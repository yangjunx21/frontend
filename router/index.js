import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index.vue'
import Characters from '@/pages/characters.vue'
import Dialog from '@/pages/dialog.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
      path: '/',
      name: 'main',
      component: Index
    }, {
      path: '/characters',
      name: 'Characters',
      component: Characters
    }, {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    }, ]
  }, ]
})
