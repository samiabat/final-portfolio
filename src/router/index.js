import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogPost from '../views/BlogPost.vue'
import CertificationPage from '../views/CertificationPage.vue'
import EducationPage from '../views/EducationPage.vue'
import ContactMe from '../views/ContactMe.vue'
import ProjectPage from '../views/ProjectPage.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectPage,
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogPost
  },
  {
    path: '/certifications',
    name: 'certifications',
    component: CertificationPage
  },
  {
    path: '/educations',
    name: 'educations',
    component: EducationPage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactMe
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
