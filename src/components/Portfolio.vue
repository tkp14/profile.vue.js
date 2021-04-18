<template>
  <div id="portfolio">
    <router-view name="header"></router-view>
    <transition
      enter-active-class="animate__animated animate__rubberBand"
      leave-active-class="animate__animated animate__rubberBand"
      appear>
      <div class="container">
        <div class="row">
          <div class="jyanken col-md-10">
            <a :href="url">じゃんけんゲーム</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://tkp14.github.io/jyanken_app'
    }
  }
}
</script>

<style scoped>
.jyanken {
  height: 200px;
  line-height: 200px;
  text-decoration: none;
  color: navy;
  font-weight: bold;
  font-size: 20px;
  margin: 0 auto;
  margin-top: 60px;
}

.jyanken :hover{
  border: 2px solid #00a9ff;
  text-decoration: none;
  color: navy;
  font-weight: bold;
  font-size: 20px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 80px 300px;
}

.rubberBand-enter,
.rubberBand-leave-to :hover {
  opacity: 0;
}
.rubberBand-enter-active,
.rubberBand-leave-active :hover {
  transition: opacity 0.5s;
}
</style>
