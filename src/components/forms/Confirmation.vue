<template>
  <div id="js__confirmation">
    <div class="signup__container">
      <form class="signup__details">
        <div class="signup__confirmation">
          <svg class="signup__confirmation__checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="signup__confirmation__checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="signup__confirmation__checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
          <h3 class="signup__confirmation__message signup__details__heading">{{message}}</h3>
        </div>
      </form>
    </div>
  </div>

</template>

<!-- Script and Styles -->
<script src="../../js/forms/confirmation.js"></script>

<style lang="scss">
  @import "../../sass/colors";
  @import "../../sass/breakpoints";
  @import "../../sass/global";
  @import "../../sass/signup";
</style>
