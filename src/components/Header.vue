<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link to="/" class="navbar-brand">My Profile</router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          <router-link to="/profile" class="nav-link">Profile</router-link>
          <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar {
  padding: 10px 60px;
}

.navbar-brand {
  margin-right: 0;
  font-weight: 900;
  display: inline;
  font-size: 30px;
}

.nav-link:active {
  color: #dddddd;
  opacity: 1;
}

.navbar-nav {
  font-weight: bold;
  font-size: 20px;
}
</style>
