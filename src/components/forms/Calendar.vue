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
              <li v-for="time in appointmentTimes" class="signup__schedule__times__list__item">{{time}}</li>
            </ul>
            <p class="signup__schedule__times__description">Choose a date in the calendar to see available times. Days with a blue circle have available times.</p>
          </div>
        </div>
      </form>
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
