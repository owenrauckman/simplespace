<template>
  <div id="js__room-details">
    <h2 class="signup__heading">{{heading}}</h2>
    <div class="signup__container">
      <form class="signup__details">
        <div class="g__flex">
          <div class="signup__details__box g__flex--half">
            <h3 class="signup__details__heading">{{numberOfRoomsCopy}}</h3>
            <input class="signup__details__input" :value="numberOfRooms"/>
          </div>
          <div class="signup__details__box g__flex--half">
            <h3 class="signup__details__heading">{{squareFeetCopy}}</h3>
            <input class="signup__details__input" :value="squareFeet"/>
          </div>
        </div>
      </form>
    </div>
    <div class="g__flex g__flex--full signup__button-container"><router-link to="/slider" exact class="g__button g__button--white signup__button-container__button" type="submit">{{formContinue}}</router-link></div>
  </div>

</template>

<!-- Script and Styles -->
<script src="../../js/forms/questions.js"></script>

<style lang="scss">
  @import "../../sass/colors";
  @import "../../sass/breakpoints";
  @import "../../sass/global";
  @import "../../sass/signup";
</style>
