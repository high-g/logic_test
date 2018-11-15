import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'create',
      component: () => import('./views/Create.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/Form.vue'),
    },
    {
      path: '/mock',
      name: 'mock',
      component: () => import('./views/Mock.vue'),
    },
  ],
});
