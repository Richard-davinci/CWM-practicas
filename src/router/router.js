import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";
import GlobalChat from "../pages/GlobalChat.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import NewsFeed from "../pages/NewsFeed.vue";
import MyProfile from "../pages/MyProfile.vue";
import {subscribeToAuthChanges} from "../services/auth.js";


const routes = [
  {path: '/', component: Home,},
  {path: '/ingresar', component: Login,},
  {path: '/crear-cuenta', component: Register,},
  {path: '/news', component: NewsFeed},
  {path: '/chat', component: GlobalChat, meta: {requiresAuth: true,},},
  {path: '/mi-perfil', component: MyProfile, meta: {requiresAuth: true,},},
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
let user = {
  id: null,
  email: null,
}
subscribeToAuthChanges(newUserState => user = newUserState);

router.beforeEach((to) => {
  if(to.meta.requiresAuth && user.id === null) {
    return '/ingresar';
  }
})

export default router;