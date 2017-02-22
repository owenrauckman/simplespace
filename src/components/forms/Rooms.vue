<template>
  <div id="js__rooms">
    <h2 class="signup__heading">{{heading}}</h2>
    <div class="signup__container">

      <form class="signup__checkbox">
        <div v-for="(option, index) in options" class="signup__checkbox__button"><input type="checkbox" :id="['area' + index]" name="area"/><label v-bind:for="['area' + index]"><span></span>{{option}}</label></div>
      </form>
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
