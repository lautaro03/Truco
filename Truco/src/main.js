// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Toastr from 'vue-toastr'
import VueSweetalert2 from 'vue-sweetalert2';
import VModal from 'vue-js-modal'

import 'toastr/toastr'
import 'toastr/toastr.less'

Vue.use(VueSweetalert2);
Vue.use(Toastr);
Vue.use(VModal, { dialog: true });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
