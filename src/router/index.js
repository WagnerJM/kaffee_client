import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

import UserHome from "../views/user/Home.vue";

import Login from "../views/auth/Login.vue";
import Logout from "../views/auth/Logout.vue";
import SignUp from "../views/auth/SignUp.vue";

import AdminHome from "../views/admin/AdminHome.vue"
import Kassenbuch from "../views/admin/Kassenbuch.vue"
import System from "../views/admin/System.vue"
import UserManagement from "../views/admin/UserManagement.vue"
import Rechnung from "../views/admin/Rechnung.vue"


import store from "../store";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    
     {
       path: "/",
       name: "home",
       component: Home
     },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/user",
      name: "userHome",
      component: UserHome,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/admin",
      name: "adminHome",
      component: AdminHome,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated && store.state.user.is_admin) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/admin/kassenbuch",
      name: "kassenbuch",
      component: Kassenbuch,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated && store.state.user.is_admin) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/admin/users",
      name: "userManagement",
      component: UserManagement,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated && store.state.user.is_admin) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/admin/rechnung",
      name: "rechnung",
      component: Rechnung,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated && store.state.user.is_admin) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/admin/system",
      name: "system",
      component: System,
      beforeEnter(to, from, next) {
        if (store.state.isAuthenticated && store.state.user.is_admin) {
          next();
        } else {
          next("/login");
        }
      }
    },
    
  ]
});
