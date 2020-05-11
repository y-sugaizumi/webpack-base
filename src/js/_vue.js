import Vue from 'vue';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
Vue.use(Vuikit);
Vue.use(VuikitIcons);
Vue.component('app', require('./components/App').default);

const app = new Vue({
  el: '#app'
});