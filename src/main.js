// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import es6 promise polyfill for vuex
require('es6-promise').polyfill()

import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App';

// load vuex
Vue.use(Vuex);

//load moment
window.moment = require('moment');

// load jQuery
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;



// Global Vuex Store
const store = new Vuex.Store({
  // global vars
  state: {
    rooms: [],
    minimizeAmount: '',
    progressBar: '20%',
    personalInfo: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    },
    bookingDate: ''
  },

  // mutators
  mutations: {
    setRooms(state, rooms) {
      state.rooms = rooms;
    },
    setSlider(state, minimizeAmount){
      state.minimizeAmount = minimizeAmount;
    },
    setProgress(state, progressBar){
      state.progressBar = progressBar;
    },
    setPersonalInfo(state, personalInfo){
      state.personalInfo = personalInfo;
    },
    setBookingDate(state, bookingDate){
      state.bookingDate = bookingDate;
    }
  }
})



// VUE ROUTER INITIALIZATION
import Rooms from './components/forms/Rooms';
import Questions from './components/forms/Questions';
import Slider from './components/forms/Slider';
import Calendar from './components/forms/Calendar';
import Confirmation from './components/forms/Confirmation';

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {path: '/', component: Rooms},
    {path: '/info', component: Questions},
    {path: '/organization-amount', component: Slider},
    {path: '/book', component: Calendar},
    {path: '/confirmation', component: Confirmation}
  ]
})




// INITIALIZE APP
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
