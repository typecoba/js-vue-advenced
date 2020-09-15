import VueRouter from 'vue-router'
import Vue from 'vue'
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/news',
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/item/:id',
            name: 'item',
            component: ItemView,
        },
        {
            path: '/user/:username',
            name: 'user',
            component: UserView,
        },
    ]
})
