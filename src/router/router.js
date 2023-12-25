import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/electromechanical',
        name: 'electromechanical',
        component: () => import(/* webpackChunkName: "electromechanical" */ '../views/ElectromechanicalView.vue')
    },
    {
        path: '/computing',
        name: 'computing',
        component: () => import(/* webpackChunkName: "computing" */ '../views/ComputingView.vue')
    },
    {
        path: '/programming',
        name: 'programming',
        component: () => import(/* webpackChunkName: "programming" */ '../views/ProgrammingView.vue')
    },
    {
        path: '/inscription',
        name: 'inscription',
        component: () => import(/* webpackChunkName: "inscription" */ '../views/InscriptionView.vue')
    },
    {
        path: '/forum',
        name: 'forum',
        component: () => import(/* webpackChunkName: "forum" */ '../views/ForumView.vue')
    },
    {
        path: '/library',
        name: 'library',
        component: () => import(/* webpackChunkName: "library" */ '../views/LibraryView.vue')
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: () => import(/* webpackChunkName: "gallery" */ '../views/GalleryView.vue')
    },
    {
        path: '/history',
        name: 'history',
        component: () => import(/* webpackChunkName: "history" */ '../views/HistoryView.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
    }
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router