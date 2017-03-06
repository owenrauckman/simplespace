<template>
  <section class="services" id="Services">
    <div class="services__background"></div>
    <div class="g__container">
      <h2 class="g__section-heading">{{heading}}</h2>
      <div class="services__container">
        <div v-for="service in services" class="services__box" :style="{display: service.display}">
          <div :class="['services__box__photo services__box__photo--' + service.photo]"></div>
          <div class="services__box__info">
            <h3 class="services__box__info__heading">{{service.heading}}</h3>
            <ul class="services__box__info__list">
              <li v-for="item in service.list" class="services__box__info__list__item">{{item}}</li>
            </ul>
          </div>
        </div>

        <div class="g__flex g__flex--full services__button-container">
          <button class="g__button g__button--white-white services__button-container__margin" @click="showAllServices">{{viewMore}}</button>
          <button class="g__button g__button--orange" type="submit" @click="scrollToTop">{{getStarted}}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- Script and Styles -->
<script src="../js/services.js"></script>

<style lang="scss">
  @import "../sass/colors";
  @import "../sass/breakpoints";
  @import "../sass/global";
  @import "../sass/services";
</style>
