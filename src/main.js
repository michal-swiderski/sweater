import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Floyd from './components/floyd/Floyd.vue'
import Backpack from './components/backpack/Backpack'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    {path: '/floyd', component: Floyd, alias : '/'},
    {path: '/backpack', component : Backpack}
];

const router = new VueRouter({
   routes
});

new Vue({
  render: h => h(App),
    router
}).$mount('#app');
