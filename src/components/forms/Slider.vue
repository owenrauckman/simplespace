<template>
  <div id="js__scale">
    <h2 class="signup__heading">{{heading}}</h2>
    <div class="signup__container">
      <form class="signup__scale">
        <div class="g__container">
          <input type="range" min="0" max="100" value="30">
          <p class="signup__scale__copy"><span class="signup__scale__copy--bold">{{messages.minimal.heading}}</span> {{messages.minimal.copy}}</p>
        </div>
      </form>
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
