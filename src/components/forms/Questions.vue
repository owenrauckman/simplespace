<template>
  <div id="js__room-details">
    <h2 class="signup__heading">{{heading}}</h2>
    <div class="signup__container">
      <form class="signup__details">
        <div class="g__flex">
          <div class="signup__details__box g__flex--half">
            <h3 class="signup__details__heading">{{personalInfoHeading}}</h3>
            <input class="signup__details__input" :placeholder="firstNamePlaceholder" v-model="personalInfo.firstName"/>
            <input class="signup__details__input" :placeholder="lastNamePlaceholder" v-model="personalInfo.lastName"/>
            <input class="signup__details__input" :placeholder="emailAddressPlaceholder" v-model="personalInfo.emailAddress"/>
            <input class="signup__details__input" :placeholder="phoneNumberPlaceholder" type="tel" v-model="personalInfo.phoneNumber" @keyup="dashifyNumber"/>
          </div>
          <div class="signup__details__box g__flex--half">
            <h3 class="signup__details__heading">{{addressHeading}}</h3>
            <input class="signup__details__input" :placeholder="addressPlaceholder" v-model="personalInfo.address"/>
            <input class="signup__details__input" :placeholder="cityPlaceholder" v-model="personalInfo.city"/>
            <input class="signup__details__input" :placeholder="statePlaceholder" v-model="personalInfo.state"/>
            <input class="signup__details__input" :placeholder="zipPlaceholder" v-model="personalInfo.zip"/>
          </div>
        </div>
      </form>
      <p v-if="showError" class="signup__details__error">{{errorMessage}}</p>

    </div>
    <div class="g__flex g__flex--full signup__button-container">
      <router-link to="/organization-amount" exact class="g__back-arrow"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5"><path d="M135.874 28.126L65 99l70.874 70.874" fill="none" stroke="#788A99" stroke-width="20.0055219"/></svg></router-link>
      <a @click="verifyForms" class="g__button g__button--white signup__button-container__button">{{formContinue}}</a>
    </div>
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
