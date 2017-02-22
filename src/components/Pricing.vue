<template>
  <section class="pricing">
    <div class="g__container">
      <h2 class="g__section-heading">{{heading}}</h2>
      <p class="pricing__copy">{{copy}}</p>
      <div class="pricing__container">
        <div v-for="price in prices" :class="['pricing__box pricing__box--' + price.color]">
          <h3 class="pricing__box__price">{{price.cost}}<span>{{price.costMeasure}}</span></h3>
          <p class="pricing__box__type" v-html="price.appointment"></p>
          <p class="pricing__box__people">{{price.organizers}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- Script and Styles -->
<script src="../js/pricing.js"></script>

<style lang="scss">
  @import "../sass/colors";
  @import "../sass/breakpoints";
  @import "../sass/global";
  @import "../sass/pricing";
</style>
