import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
const Home = () => import("./components/Home.vue")
const Header = () => import("./components/Header.vue")
const Profile = () => import("./components/Profile.vue")
const Portfolio = () => import("./components/Portfolio.vue")
const Contact = () => import("./components/Contact.vue")

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
        default: Home,
        header: Header
      }
    },
    {
      path: '/profile',
      components: {
        default: Profile,
        header: Header
      }
    },
    {
      path: '/portfolio',
      components: {
        default: Portfolio,
        header: Header
      }
    },
    {
      path: '/contact',
      components: {
        default: Contact,
        header: Header
      }
    }
  ]
});
