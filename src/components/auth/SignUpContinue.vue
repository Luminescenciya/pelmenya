<template>
  <div class="sidebar-cart">
    <div class="sidebar-cart-wrapper">
      <div class="sidebar-cart__top-line">
        <img
          class="sidebar-cart__top-line-back"
          src="@/assets/icons/arrow-left.svg"
          @click="$emit('toggleLayers', ['signUpContinue'])"
        />
        <span class="sidebar-cart__top-line-title">РЕГИСТРАЦИЯ</span>
        <div
          id="mobile-burger"
          @click="$emit('toggleLayers', ['signUpContinue'])"
          class="mobile-burger change"
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <form
        id="signUpContinueForm"
        @submit.prevent="signUp()"
        class="sidebar-cart__middle"
      >
        <div class="full-line">
          <label class="input-label" for="name">Ваше имя</label>
          <input
            v-model="newUser.firstName"
            class="input"
            type="text"
            id="name"
            required
          />
        </div>
        <div class="full-line">
          <label class="input-label" for="email">Ваш Email</label>
          <input
            v-model="newUser.email"
            class="input"
            type="email"
            id="email"
          />
        </div>
        <div class="full-line">
          <label class="input-label" for="parentNumber">Телефон родителя</label>
          <TheMask
            v-model="newUser.parentPhone"
            :mask="['+7 (###) ###-##-##']"
            :masked="false"
            placeholder="+7"
            id="parentNumber"
            class="input"
            :class="{ 'error-input': errors.parentPhoneLength }"
          />
          <span class="error-span" v-if="errors.parentPhoneLength"
            >Номер введен не полностью</span
          >
        </div>
        <div class="full-line full-line--mobile">
          <FormSubmitButton
            class="button-red"
            form="signUpContinueForm"
            :isLoading="isLoading"
            :text="'ЗАРЕГИСТРИРОВАТЬСЯ'"
          />
        </div>
      </form>
      <div class="sidebar-cart__bottom-line">
        <FormSubmitButton
          class="button-red"
          form="signUpContinueForm"
          :isLoading="isLoading"
          :text="'ЗАРЕГИСТРИРОВАТЬСЯ'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TheMask } from "vue-the-mask";
import { DataFactory } from "@/services/Api/DataFactory.js";
const users = DataFactory.get("users");
import FormSubmitButton from "@/components/FormSubmitButton.vue";

export default {
  components: {
    TheMask,
    FormSubmitButton,
  },
  data() {
    return {
      newUser: {
        firstName: "",
        email: "",
        parentPhone: "",
      },
      errors: {
        parentPhoneLength: false,
      },
      isLoading: false,
    };
  },
  methods: {
    async signUp() {
      try {
        if (this.isLoading) return;
        Object.keys(this.errors).forEach((v) => (this.errors[v] = false));
        if (
          this.newUser.parentPhone.length > 0 &&
          this.newUser.parentPhone.length !== 10
        ) {
          this.errors.parentPhoneLength = true;
          return;
        }
        this.isLoading = true;
        let user = JSON.parse(JSON.stringify(this.newUser));
        user.phone = `+7${user.phone}`;
        if (user.parentPhone.length > 0)
          user.parentPhone = `+7${user.parentPhone}`;
        else delete user.parentPhone;
        const newUserDataToApi = {
          fullName: user.firstName,
          firstName: user.firstName,
          email: user.email,
          parentPhone: user.parentPhone,
        };
        let userOwnResponse = await users.createUser(newUserDataToApi);
        this.$store.commit("changeStateVariable", {
          variable: "userData",
          data: userOwnResponse.data,
        });
        this.$emit("toggleLayers", ["signUpContinue", "account"]);
        this.isLoading = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
