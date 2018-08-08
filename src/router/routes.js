
// 路由

import Header from '../components/nav-menu/Header.vue'
import Information from '../components/nav-menu/Information.vue'
import Forum from '../components/nav-menu/Forum.vue'
import Model from '../components/nav-menu/Model.vue'
import Shopping from '../components/nav-menu/Shopping.vue'
import More from '../components/nav-menu/More.vue'
import Register from '../components/nav-menu/Register.vue'
import Login from '../components/nav-menu/Login.vue'


export const routes = [
    {path:"/home", name: "homeLink", component: Information},
    {path:"/forum", name: "forumLink", component: Forum},
    {path:"/model", name: "modelLink", component: Model},
    {path:"/shopping", name: "shoppingLink", component: Shopping},
    {path:"/more", name: "moreLink", component: More},
    {path:"/register", name: "registerLink", component: Register},
    {path:"/login", name: "loginLink", component: Login},

    {path:"*", redirect: "/"}
]
