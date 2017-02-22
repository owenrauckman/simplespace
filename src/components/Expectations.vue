<template>
  <section class="expectations">
    <div class="g__container">
      <h2 class="g__section-heading">{{heading}}</h2>
      <p v-for="expectation in expectations "class="expectations__copy">{{expectation.copy}}</p>
    </div>
  </section>
</template>

<!-- Script and Styles -->
<script src="../js/expectations.js"></script>

<style lang="scss">
  @import "../sass/colors";
  @import "../sass/breakpoints";
  @import "../sass/global";
  @import "../sass/expectations";
</style>
