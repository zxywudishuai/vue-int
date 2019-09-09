import Vue from 'vue'
import Router from 'vue-router'
import IndexNav from './view/IndexNav.vue'
import VenuePage from './view/VenuePage.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path: "/", component: IndexNav,children:[
      {path: "", component: VenuePage},
      {path: "VenuePage", component: VenuePage},
      {path: "ActivePage", component: ()=>import("./view/ActivePage.vue")},
      {path: "FindPage", component: ()=>import("./view/FindPage.vue")},
      {path: "UserPage", component: ()=>import("./view/UserPage.vue")},
    ]},
    // {path: "/MenueDetails/:id", component: MenueDetails},
  ]
})
