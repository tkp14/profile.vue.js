import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
const Home = () => import("./components/Home.vue")
const Header = () => import("./components/Header.vue")

Vue.use(Router);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      components: {
        default: Header
      }
    },
    {
      path: '/home',
      components: {
        default: Home
      }
    }
  ]
});
