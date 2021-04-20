<template>
  <div id="profile">
    <h1>プロフィール</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6 imgArea"><img :src="src" alt="プロフィール写真">
          <div class="col-md-10 twitter"><a :href="url"><font-awesome-icon :icon="['fab', 'twitter']" size="2x" color="#1da1f2"/></a></div>
        </div>
        <ul class="col-md-6 profile-outer">
          <li class="col-md-6 profile-inner name">Name</li>
          <li class="col-md-9 profile-item">Takahiro Toyama</li>
          <li class="col-md-5 profile-inner">Age </li>
          <li class="col-md-7 profile-item"> 28歳</li>
          <li class="col-md-7 profile-inner">Language</li>
          <li class="col-md-10 profile-item">JavaScript (Vue.js)<br>
              Ruby(RubyonRails)</li>
          <li class="col-md-7 profile-inner hobby">Hobbies</li>
          <li class="col-md-9 profile-item">スポーツ観戦 <br>
             Youtube観賞 <br>
             ドライブ<br>
             旅行</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: require('@/assets/imgs/profile.jpg'),
      url: 'https://twitter.com/takap805014'
    }
  }
}
</script>

<style scoped>
h1 {
  padding: 50px 0;
  font-weight: bold;
  font-size: 50px;
}

.twitter {
  padding-top: 20px;
}

a:hover {
  opacity: 0.5;
}

img {
  width: 270px;
  height: 270px;
  border-radius: 50%;
}

.profile-outer {
  list-style: none;
}

.profile-inner {
  font-weight: bold;
  font-size: 25px;
}

.profile-item {
  padding-bottom: 15px;
  font-size: larger;
}

.name {
  padding-left: 5px;
}

.hobby {
  padding-left: 0;
  padding-right: 24px;
}

</style>
