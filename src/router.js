import { createWebHistory, createRouter } from 'vue-router'


// Import delle Pagine dell'Applicativo
import AppHome from './pages/AppHome.vue'
import AppNotFound from './pages/AppNotFound.vue'
import AppRollForStats from './pages/AppRollForStats.vue'
import AppPointBuy from './pages/AppPointBuy.vue'
import AppCritTable from './pages/AppCritTable.vue'

// Creazione delle Rotte

const routes = [

    { 
        path: '/', name:'home', component:AppHome 
    },

    { 
        path: '/rollForStats', name:'rollForStats', component:AppRollForStats 
    },

    { 
        path: '/pointBuy', name:'pointBuy', component:AppPointBuy 
    },
     
    { 
        path: '/critTable', name:'critTable', component:AppCritTable 
    },

    {   // will match everything and put it under `route.params.pathMatch`
        path: '/:pathMatch(.*)*', name: 'NotFound', component: AppNotFound 
    },

]


const router = createRouter({

    history: createWebHistory(),

    routes: routes,

})


export default router