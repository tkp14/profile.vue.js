<template>

  <transition
    enter-active-class="animate__animated animate__rubberBand"
    leave-active-class="animate__animated animate__rubberBand"
    appear>
    <div class="myapp">
      <div class="jyanken">
        <a :href="url" target="_blank">じゃんけんゲーム</a>
        <p>Vue.jsで簡単なものを作りました！</p>
      </div>
      <div class="cookApp">
        <a :href="url1" target="_blank">クック-ウィズ</a>
        <p>Ruby on Railsを使って作りました！</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://tkp14.github.io/jyanken_app',
      url1: 'https://www.cook-with.tk/'
    }
  }
}
</script>

<style scoped>
.rubberBand-enter,
.rubberBand-leave-to {
  opacity: 0;
}

.rubberBand-enter-active,
.rubberBand-leave-active {
  transition: opacity 1s;
}

.myapp {
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}

.jyanken {
  height: 150px;
  padding-top: 35px;
  border: 2px solid whitesmoke;
  color: navy;
}

.jyanken:hover {
  border: 2px solid #00a9ff;
  text-decoration: none;
}

a {
  text-decoration: none;
  font-size: 26px;
  color: dodgerblue;
  display: block;
}

a:hover {
  animation: heartBeat;
  animation-duration: 2s;
}

.cookApp {
  height: 150px;
  margin-top: 60px;
  padding-top: 35px;
  border: 2px solid whitesmoke;
  color: navy;
}

.cookApp:hover {
  border: 2px solid #00a9ff;
  text-decoration: none;
}
</style>
