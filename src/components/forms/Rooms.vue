<template>
  <div id="js__rooms">
    <h2 class="signup__heading">{{heading}}</h2>
    <div class="signup__container">
      <form class="signup__checkbox">
        <div v-for="(option, index) in options" class="signup__checkbox__button" @click="addRooms"><input type="checkbox" :id="['area' + index]" v-bind:value="option" v-model="checkedRooms"/><label v-bind:for="['area' + index]"><span></span>{{option}}</label></div>
      </form>
      <p v-if="showError" class="signup__details__error">{{errorMessage}}</p>
    </div>

    <div class="g__flex g__flex--full signup__button-container signup__button-container--first">
      <a @click="verifyForms" class="g__button g__button--white signup__button-container__button">{{formContinue}}</a>
    </div>
  </div>
</template>

<!-- Script and Styles -->
<script src="../../js/forms/rooms.js"></script>

<style lang="scss">
  @import "../../sass/colors";
  @import "../../sass/breakpoints";
  @import "../../sass/global";
  @import "../../sass/signup";
</style>
