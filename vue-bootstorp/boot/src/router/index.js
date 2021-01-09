import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/index"
Vue.use(VueRouter);

export default new VueRouter ({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index
    },
    // {
    //   path: '/comment',
    //   name:'comment',
    //   component: Comment
    // },
  ]
})
