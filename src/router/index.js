import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/pages/Home.vue'
import About from '../views/pages/About.vue'
import Portfolio from '../views/pages/Portfolio.vue'
import Contact from '../views/pages/Contact.vue'
import Blog from '../views/pages/Blog.vue'
import Blog_single from '../views/pages/Blog_single.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Blog_single',
    name: 'Blog_single',
    component: Blog_single
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
