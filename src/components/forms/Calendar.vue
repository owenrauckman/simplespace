<template>
  <div id="js__calendar">
    <h2 class="signup__heading">{{heading}}</h2>
    <div class="signup__container">
      <form class="signup__details">
        <div class="signup__schedule">
          <div class="signup__schedule__calendar">
            <div class='datepicker'></div>
          </div>
          <div class="signup__schedule__times">
            <h2 class="signup__schedule__times__heading">Available Times</h2>
            <ul class="signup__schedule__times__list">
              <li v-for="time in appointmentTimes" @click="selectTime" :data-time="time.iso" class="signup__schedule__times__list__item">{{time.pretty}}</li>
            </ul>
            <p class="signup__schedule__times__description">{{instructions}}</p>
          </div>
        </div>
      </form>
      <p v-if="showError" class="signup__details__error">{{errorMessage}}</p>
    </div>
    <div class="g__flex g__flex--full signup__button-container">
      <router-link to="/info" exact class="g__back-arrow"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path d="M135.874 28.126L65 99l70.874 70.874" fill="none" stroke="#788A99" stroke-width="20.0055219"/></svg></router-link>
      <a @click="verifyBooking" class="g__button g__button--white signup__button-container__button" type="submit">{{formContinue}}</a>
    </div>
  </div>
</template>

<!-- Script and Styles -->
<script src="../../js/forms/calendar.js"></script>

<style lang="scss">
  @import "../../sass/colors";
  @import "../../sass/breakpoints";
  @import "../../sass/global";
  @import "../../sass/signup";
</style>
