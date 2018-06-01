<template>
  <transition name="fold">
    <div class="bg" v-show="visiable">
      <div :style="'width: ' + wh + 'px; height: ' + wh + 'px; border-radius: '+ (wh / 10) + 'px;'" class="loading">
        <img class="loading-img" src="./assets/loading.png" alt="loading">
        <p :style="'font-size: ' + wh / 8 + 'px'" class="loading-txt">{{ message }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      wh: 0,
      hide: null,
      show: null,
      visiable: false
    }
  }
}
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loading {
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fold-enter-active {
  animation-name: fold-in;
  animation-duration: .2s;
}
.fold-leave-active {
  animation-name: fold-out;
  animation-duration: .2s;
}
@keyframes fold-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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

.loading-img {
  margin-top: 5px;
  width: 40%;
  height: 40%;
  animation: rotating 2s linear infinite;
	-webkit-animation: rotating 2s linear infinite
}
@keyframes rotating {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotating {
  from {
    -webkit-transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

.loading-txt {
  padding-top: 10px;
  color: #D5D5D5;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>


