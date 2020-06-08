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
            redirect: '/news',
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/news',
            component: NewsView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
        {
            path: '/user/:username',
            component: UserView,
        },
    ]
})
