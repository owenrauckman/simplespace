<template>
  <div id="js__calendar">
    <h2 class="signup__heading">{{heading}}</h2>
    <div class="signup__container">
      <form class="signup__details">

        <div class="display:inline-flex;">
          <div style="width: 300px">
            <div class='datepicker'>
            </div>
          </div>
          <div style="background:red; width: auto;">
            <ul class="times">
              <li v-for="time in appointmentTimes">{{time}}</li>
            </ul>
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

.datepicker {
  font-family: 'Roboto', sans-serif;
  width: 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 50px 0 rgba(0,0,0,0.05);
  overflow: auto;

  //temp redo when 2 boxes
  margin-left: -1.5rem;
  @include breakpoint(desktop){
    margin-left:0;
  }
  .ui-datepicker-inline {
    padding: 10px;
  }

  .ui-datepicker-header {
    text-align: center;
    padding:1rem 0 2rem 0;
    font-family: 'Montserrat', sans-serif;
    color: $blue-dull;
    .ui-datepicker-prev,
    .ui-datepicker-next {
      display: inline;
      float: left;
    }

    .ui-datepicker-next {
      float: right;
    }
  }

  .ui-datepicker-calendar {
    width: 100%;
    text-align: center;
    thead {
      color: $gray-light;
    }

    tr {
      th, td {
        padding-bottom: .5em;
      }
      td{
        color: $blue-dull;
      }
    }
    a {
      color: $blue-dull;
      text-decoration: none;
      display: block;
      margin: 0 auto;
      width: 35px;
      height: 35px;
      line-height: 35px;
      border-radius: 50%;
      border: 1px solid transparent;
      cursor: pointer;
    }
    .calendar__day--available a{
      background: $java;
      color: $gray-light;
    }
    .ui-state-highlight {
      border-color: #D24D57;
      color: #D24D57;
    }
    .ui-state-active{
      // background: darken($java, 25%) !important;
      background: $orange !important;
    }
  }
}

.calendar__arrow{
  display: block;
  height: 20px;
  width: 20px;
  cursor: pointer;
  svg path{
    stroke: $blue-dull;
    transition: stroke 0.2s ease-in;
  }
  &:hover{
    path{
      stroke: $turquoise;
    }
  }
  &--left{
    float:left;
  }
  &--right{
    transform: rotate(180deg);
    float: right;
  }
}



</style>
