import Vue from 'vue'
import mt from './mobileToast.vue'

let ToastConstructor = Vue.extend(mt)

let seed = 1

let instance
let instances = {}

const Toast = function(msg) {
  try {
    let opt = {
      message: msg
    }
    seed++
    let k = '_toast' + seed
    opt.onClose = function() {
      Toast.close(k)
    }
    instance = new ToastConstructor({
      data: opt
    })
    instances[k] = instance
    instance.$mount()
    document.body.appendChild(instance.$el)
    instance.$el.style.zIndex = 1000
    return instance
  } catch (e) {
    return null
  }
}

Toast.close = function(k) {
  document.body.removeChild(instances[k].$el)
}

export default Toast