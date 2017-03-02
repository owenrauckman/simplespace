<template>
  <div id="js__rooms">
    <h2 class="signup__heading">{{heading}}</h2>
    <div class="signup__container">
      <form class="signup__checkbox">
        <div v-for="(option, index) in options" class="signup__checkbox__button" @click="addRooms"><input type="checkbox" :id="['area' + index]" v-bind:value="option" v-model="checkedRooms"/><label v-bind:for="['area' + index]"><span></span>{{option}}</label></div>
      </form>
    </div>

    <div class="g__flex g__flex--full signup__button-container"><router-link to="/questions" exact class="g__button g__button--white signup__button-container__button" type="submit">{{formContinue}}</router-link></div>

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
