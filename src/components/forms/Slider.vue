<template>
  <div id="js__scale">
    <h2 class="signup__heading">{{heading}}</h2>
    <div class="signup__container">
      <form class="signup__scale">
        <div class="g__container">
          <input type="range" v-model="minimizeAmount" min="0" max="100" @mouseup="updateSlider">
          <p class="signup__scale__copy"><span class="signup__scale__copy--bold">{{dynamicHeading}}</span> {{dynamicCopy}}</p>
        </div>
      </form>
    </div>
    <div class="g__flex g__flex--full signup__button-container">
      <router-link to="/" exact class="g__back-arrow"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path d="M135.874 28.126L65 99l70.874 70.874" fill="none" stroke="#788A99" stroke-width="20.0055219"/></svg></router-link>
      <a class="g__button g__button--white signup__button-container__button" type="submit" @click="verifyForms">{{formContinue}}</a>
    </div>
  </div>
</template>

<!-- Script and Styles -->
<script src="../../js/forms/slider.js"></script>

<style lang="scss">
  @import "../../sass/colors";
  @import "../../sass/breakpoints";
  @import "../../sass/global";
  @import "../../sass/signup";
</style>
