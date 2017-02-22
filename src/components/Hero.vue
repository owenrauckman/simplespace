<template>
  <div class="vue__hero">
    <div class="hero__background"></div>
    <section class="hero">
      <div class="g__container">
        <navigation></navigation>
        <h1 class="hero__heading">{{heading}}</h1>
        <p class="hero__copy">{{copy}}</p>
      </div>
    </section>
  </div>
</template>

<!-- Script and Styles -->
<script src="../js/hero.js"></script>

<style lang="scss">
  @import "../sass/colors";
  @import "../sass/breakpoints";
  @import "../sass/global";
  @import "../sass/hero";
</style>
