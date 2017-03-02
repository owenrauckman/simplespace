// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
    rooms: []
  },

  // mutators
  mutations: {
    setRooms(state, rooms) {
      state.rooms = rooms;
    }
  },
  // computed values
  computed: {
    count () {
      return store.state.count
    }
  }
})



// VUE ROUTER INITIALIZATION
import Rooms from './components/forms/Rooms';
import Questions from './components/forms/Questions';
import Slider from './components/forms/Slider';
import Calendar from './components/forms/Calendar';

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {path: '/', component: Rooms},
    {path: '/questions', component: Questions},
    {path: '/slider', component: Slider},
    {path: '/calendar', component: Calendar}
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
