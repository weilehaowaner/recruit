import Vue from 'vue'
import Router from 'vue-router'
import welcome from '../../views/welcome.vue'
import our from '../../views/our.vue'
import regulation from '../../views/regulation.vue'
import signup from '../../views/signup.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: welcome
    },
    {
      name: 'welcome',
      path: '/welcome',
      component: welcome
    },
    {
      name: 'our',
      path: '/our',
      component: our
    },
    {
      path: '/regulation',
      component: regulation
    },
    {
      path: '/signup',
      component: signup
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
    //每次进入一个页面，滚动条都会回到最顶部
  }
})
