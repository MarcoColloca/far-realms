<script>
    import {store} from '../store.js'

    export default {
        components:{            
        },

        data(){
            return{
                store
            }
        },

        methods:{

        }
    }
</script>



<template>
    <header class="header-section">
        <div class="container">
            <nav class=" justify-content-center align-items-center navbar navbar-expand-lg">
                <div>
                    <button 
                    class="navbar-toggler navbar-burger p-1" 
                    type="button" 
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span class="burger"><font-awesome-icon :icon="['fas', 'scroll']" /></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">   
                        <ul class="d-flex gap-5">
                            <li>
                                <RouterLink  :to="{name: 'home'}">Home</RouterLink>
                            </li>
                            <li>
                                <RouterLink  :to="{name: 'rollForStats'}">Roll for Stats!</RouterLink>
                            </li>
                            <li>
                                <RouterLink  :to="{name: 'pointBuy'}">Point Buy</RouterLink>
                            </li>
                            <li>
                                <RouterLink  :to="{name: 'critTable'}">Crit Table</RouterLink>
                            </li>
                        </ul>     
                    </div>
                </div>
            </nav>
            <img class="dragon-h-icon-left d-none d-md-block" src="/public/imgs/dragon-header-icon.png" alt="">
            <img class="dragon-h-icon-right d-none d-md-block" src="/public/imgs/dragon-header-icon.png" alt="">
        </div>
    </header>
</template>



<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

header{
    height: 100px;
    background-color: $app-purple;
}

/*\ Header Section /*/

.header-section{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
}

.dragon-h-icon-left{
    max-width: 300px;
    position: absolute;
    z-index: -5;
    bottom: 0;
    left: 0;
    animation: flyLeft 5s linear infinite;
}

.dragon-h-icon-right{
    max-width: 300px;
    position: absolute;
    z-index: -5;
    bottom: 0;
    right: 0;
    transform: scaleX(-1);
    animation: flyRight 5s linear infinite;
}

@keyframes flyLeft{
    0% {
        transform:  translateX(0) rotate(0deg);
    }

    49.99% {
        transform:  translateX(calc(50vw - 150px)) rotate(0deg);
    }

    50% {
        transform:  translateX(calc(50vw - 150px)) rotateY(180deg);
    }

    99.99% {
        transform:  translateX(0) rotateY(180deg);
    }

    100% {
        transform:  translateX(0) rotateY(0deg);
    }
}


@keyframes flyRight{
    0% {
        transform:  translateX(0) rotateY(180deg);
    }

    49.99% {
        transform:  translateX(calc(-50vw + 150px)) rotateY(180deg);
    }

    50% {
        transform:  translateX(calc(-50vw + 150px)) rotateY(0deg);
    }

    99.99% {
        transform:  translateX(0) rotateY(0deg);
    }

    100% {
        transform:  translateX(0) rotateY(180deg);
    }
}

/** Navbar */
.burger {
    font-size: 20px;
    color: $app-purple;
}

.navbar-burger {
    border: none;
    background-color: white;
    background-size: 100%;
    background-position: center;
    vertical-align: middle;
}

.navbar-toggler:focus {
    box-shadow: none;
}

.navbar-collapse {
    
    .btn {
        border: transparent;
    }
}

.down-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}


</style>