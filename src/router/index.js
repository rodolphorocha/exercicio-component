import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import TeamView from "@/views/TeamView.vue";
import TermosView from "@/views/TermosView.vue";
import EnvioView from "@/views/EnvioView.vue";
import DevolucoesView from "@/views/DevolucoesView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/equipe',
            name: 'Team',
            component: TeamView
        },
        {
             path: '/livro/:id',
          name: 'Book',
          component: () => import('@/views/BookView.vue'),
          props: true,

        },
        {
            path: '/envio',
            name: 'Envio',
            component: EnvioView
        },
        {
            path: '/devolucoes',
            name: 'Devoluções',
            component: DevolucoesView
        },
        {
            path: '/termos',
            name: 'Termos',
            component: TermosView
        },
    ]
    });
    export default router;
