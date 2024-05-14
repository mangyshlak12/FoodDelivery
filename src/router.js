import { createRouter, createWebHistory } from 'vue-router'; // Import named exports
import LoginPage from './components/Login.vue'; // Adjusted path
import SignUpPage from './components/SignUp.vue'; // Adjusted path
import LocationPage from './components/LocationAccess.vue';
import MainPage from './components/Main.vue';
import RestaurantPage from './components/Restaurant.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpPage
    },
    {
        path: '/location',
        name: 'Location',
        component:LocationPage
    },
    {
        path: '/main',
        name: 'Main',
        component:MainPage
    },
    {
        path: '/rest',
        name: 'Rest',
        component:RestaurantPage
    }
  ]
});

export default router; 
