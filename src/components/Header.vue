<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">My Profile</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>


export default {

}
</script>

<style scoped>
.navbar-brand {
  padding: 0 30px;
  margin-right: 0;
  font-weight: 900;
  display: inline;
  font-size: 30px;
}

ul {
  padding-right: 30px;
  font-weight: bold;
}
</style>
