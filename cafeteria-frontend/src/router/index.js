import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import OrderSuccess from '@/components/OrderSuccess.vue';
import LoginForm from '@/views/LoginForm.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true } 
  },
  {
    path: '/pedido/sucesso',
    name: 'OrderSuccess',
    component: OrderSuccess,
    props: route => ({
      nome: route.query.nome,
      id: Number(route.query.id)
    }),
    meta: { requiresAuth: true } 
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.meta.requiresAuth && !token) {
    return next({ name: 'Login' });
  }

  next();
});

export default router;