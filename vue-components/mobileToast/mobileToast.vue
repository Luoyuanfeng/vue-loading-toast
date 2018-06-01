<template>
  <div class="bg" @click="onClick">
    <transition name="fold">
      <p class="content" v-if="show">{{ message }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      onClose: null,
      show: false
    }
  },

  methods: {
    onClick() {

    }
  },

  mounted () {
    this.show = true
    if (typeof this.onClose === 'function') {
      let dur = (this.message.length * 200)
      dur = (dur > 2500 ? (dur > 6000 ? 6000 : dur) : 2500) - 500
      setTimeout(() => {
        this.show = false
        setTimeout(() => {
          this.onClose()
        }, 500)
      }, dur)
    }
  }
}
</script>

<style scoped>
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 12px;
  width: 60%;
  padding: 10px;
  border-radius: 3px;
  text-align: center;
  word-break: break-all;
}

.fold-enter-active {
  animation-name: fold-in;
  animation-duration: .5s;
}
.fold-leave-active {
  animation-name: fold-out;
  animation-duration: .5s;
}
@keyframes fold-in {
  0% {
    opacity: 0;
    margin-bottom: 50px;
  }
  100% {
    opacity: 1;
    margin-bottom: 0;
  }
}
@keyframes fold-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>


