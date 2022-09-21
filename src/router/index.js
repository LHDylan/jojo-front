import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Homeview" */ '@/views/client/HomeView.vue'),
  },
  {
    path: '/personnage',
    name: 'personnage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Personnage" */ '@/views/client/PersonnageView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/admin/DashBoardView.vue'),
  },
  {
    path: '/add-personnage',
    name: 'add-personnage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CreateForm" */ '@/views/admin/CreateFormView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
