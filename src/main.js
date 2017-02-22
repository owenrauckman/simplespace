// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';


//load moment
window.moment = require('moment');

// load jQuery
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
