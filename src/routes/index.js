import {createRouter} from "vue-router";
import {createWebHistory} from "vue-router";
import {PATH} from "../configs/router.config.js";
import * as Pages from "../pages/index.js";

const routes = [
    {
        path: PATH.HOME,
        name: 'Home',
        component: Pages.HomePage,
    },
    {
        path: PATH.LOGIN,
        name: 'Login',
        component: Pages.LoginPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;