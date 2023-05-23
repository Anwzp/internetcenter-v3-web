import {
    createRouter,
    RouteRecordRaw,
    createWebHashHistory
} from "vue-router";
const routes: Array<RouteRecordRaw> = [{
    name:"login",
    path:'/login',
    component:()=>import('@/view/Login/login.vue')
}];
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router