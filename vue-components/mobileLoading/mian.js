import Vue from 'vue'
import l from './mobileLoading.vue'

let LaodingConstructor = Vue.extend(l)

let seed = 0

let instance
let instances = {}

const Laoding = function() {
  try {
    if (instance) {
      return instance
    }
    let k = '_loading'
    let opt = {
      message: '',
      wh: (document.documentElement.clientWidth / 4),
      hide: function() {
        this.visiable = false
      },
      show: function(msg = '请稍候...') {
        this.visiable = true
        this.message = msg
      }
    }
    instance = new LaodingConstructor({
      data: opt
    })
    instances[k] = instance
    instance.$mount()
    document.body.appendChild(instance.$el)
    instance.$el.style.zIndex = 1000
    return instance
  } catch (e) {
    console.log(e)
    return null
  }
}

export default Laoding