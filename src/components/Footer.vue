<template>
  <div class="footer">
    <div class="footer-wrapper">
      <ul class="footer__menu">
        <router-link
          :to="{
            name: 'Menu',
            params: {
              groupId: 1,
            },
          }"
          tag="li"
          >Меню</router-link
        >
        <router-link
          :to="{
            name: 'howTo',
            params: {
              groupId: 1,
            },
          }"
          tag="li"
          >Как приготовить?</router-link
        >
        <router-link
          :to="{
            name: 'PaymentInfo',
          }"
          tag="li"
          >Условия доставки</router-link
        >
        <router-link
          :to="{
            name: 'Loyalty',
          }"
          tag="li"
          >Бонусная программа</router-link
        >
        <router-link
          :to="{
            name: 'Privacy',
          }"
          tag="li"
          >Политика конфиденциальности</router-link
        >
      </ul>
      <a class="footer__link" href="tel:+78126007969"> +7 (812) 600-79-29</a>
      <a class="footer__link" href="mailto:zakaz@pelmenya-spb.ru">
        zakaz@pelmenya-spb.ru</a
      >
      <div class="footer__social">
        <a href="https://www.instagram.com/pelmenya_spb/" target="_blank">
          <img alt="logo" src="@/assets/instagram.svg" />
        </a>
        <a href="https://vk.com/pelmenya.rest/" target="_blank">
          <img alt="logo" src="@/assets/vk.svg" />
        </a>
      </div>
      <div class="footer__info">
        ООО "ЗАК", ИНН 7801644899 <br />
        ОГРН 1147847424581<br />
        199004, г. С-Петербург, пр. Средний В.О., д. 11,<br />
        лит.А, пом. 3-Н
      </div>
      <div class="footer__info">
        ООО «Пищевые технологии», ИНН 7840034400<br />
        ОГРН 1157847191920<br />
        191002, г. С-Петербург, ул.Разъезжая, д. 10/15,<br />
        лит. А, пом. 2-Н
      </div>
      <div class="footer__info">
        ООО «Русский продукт», ИНН 7840043933<br />
        ОГРН 1157847431422<br />
        191025, г. С-Петербург, ул. Марата, д. 8,<br />
        лит. А, пом. 7-Н.
      </div>
      <div class="footer__info">
        ООО «УК «Ресто», ИНН 7840039888<br />
        ОГРН 1157847323853<br />
        191023, г. С-Петербург, ул. Караванная, д. 24-26,<br />
        лит. А, пом. 16-Н.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";
.footer {
  width: 100%;
  background-color: $pl-red;
  color: $pl-yellow;
  padding: 20px 0;
  &__info {
    white-space: pre-line;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    margin-top: 25px;
  }
  &-wrapper {
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    @media (min-width: $viewport--md) {
      width: 95%;
    }
    @media (min-width: $viewport--xl) {
      width: 1100px;
    }
  }
  &__link {
    color: $pl-yellow;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 14px;
    cursor: pointer;
  }
  &__social {
    margin-top: 14px;
    & *:not(:last-child) {
      margin-right: 14px;
    }
  }
  &__menu {
    text-transform: uppercase;
    color: $pl-yellow;
    list-style-type: none;
    padding-inline-start: 0;
    margin-block-start: 0;
    text-align: left;
    font-weight: 700;
    border-bottom: 1px solid $pl-yellow;
    letter-spacing: 110%;
    & * {
      margin-bottom: 18px;
      line-height: 18px;

      cursor: pointer;
    }
  }
}
</style>
