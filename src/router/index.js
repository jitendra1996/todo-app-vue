// import TasksVue from '@/components/Tasks.vue'
import TasksVue from '@/components/Tasks.vue';
import AboutViewVue from '@/views/AboutView.vue';
import HomeViewVue from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router'
import AddTask from '../components/AddTask.vue';
import Signup from '../views/Signup.vue';

const routes = [
  {
    path:'/',
    name : 'login-page',
    component : HomeViewVue
  },
  {
    path: '/add-task',
    name: 'add-task',
    component: AddTask
  },
  {
    path: '/about',
    name: 'about',
    component: AboutViewVue
  },
  {
    path: '/signup',
    name : 'signup-page',
    component : Signup
  },
  {
    path : '/tasks',
    name : 'tasks-page',
    component : TasksVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
