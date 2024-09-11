import { createWebHistory, createRouter } from 'vue-router'

import { store } from './store'

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


// Guard beforeEach → Controlla i cambiamenti nelle rotte.
router.beforeEach((to, from) => {
    // Se la rotta ha nome 'NotFound', imposta notFound su true nello store
    if (to.name === 'NotFound') {
        store.notFound = true;
    } else {
        store.notFound = false;
    }    
})

export default router