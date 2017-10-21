import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import home from '../compontents/home.vue';
import Map from '../compontents/map.vue';

export default new VueRouter({
    routes: [
        {path: '/', component: Map},
        {path:'/home',component:home},
        
    ]
})