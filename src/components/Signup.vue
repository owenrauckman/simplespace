<template>
  <div class="g__container">
    <div class="signup">
      <router-view></router-view>
      <div class="signup__progress-bar" v-bind:style="{ width: $store.state.progressBar}"></div>
    </div>
  </div>
</template>

<!-- Script and Styles -->
<script src="../js/signup.js"></script>

<style lang="scss">
  @import "../sass/colors";
  @import "../sass/breakpoints";
  @import "../sass/global";
  @import "../sass/signup";
</style>
