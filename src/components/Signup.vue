<template>
  <div class="g__container">
    <div class="signup">
      <!-- <rooms></rooms> -->
      <!-- <questions></questions> -->
      <!-- <slider></slider> -->
      <calendar></calendar>
      <div class="g__flex g__flex--full signup__button-container"><button class="g__button g__button--white signup__button-container__button" type="submit">{{formContinue}}</button></div>
      <div class="signup__progress-bar"></div>
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
