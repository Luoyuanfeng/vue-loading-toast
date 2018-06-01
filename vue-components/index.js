import Vue from 'vue'
import mt from './mobileToast/main'
import l from './mobileLoading/mian'

(function () {
  Vue.prototype.$toast = mt;
  Vue.prototype.$loading = l;
}())