
<script>
    import { store } from '../store';

    export default {
        data(){
            return {
                test: 'ciao',
                focusLabelNum: false,
                focusLabelText: false,
                newAbility: '',
                abilityPoints: 0,
                abilityPointsMax: 27,
                stats: [
                    {
                        id: 0,
                        name: 'Forza',
                        value: 8
                    },
                    {
                        id: 1,
                        name: 'Destrezza',
                        value: 8
                    },
                    {
                        id: 2,
                        name: 'Costituzione',
                        value: 8
                    },
                    {
                        id: 3,
                        name: 'Intelligenza',
                        value: 8
                    },
                    {
                        id: 4,
                        name: 'Saggezza',
                        value: 8
                    },
                    {
                        id: 5,
                        name: 'Carisma',
                        value: 8
                    }
                ]
            }
        },

        watch:{
            abilityPointsMax(newValue)
            {
                console.log(isNaN(newValue))
                if(isNaN(newValue) || newValue === '' || !Number.isInteger(newValue))
                {
                    this.abilityPointsMax = 27
                }
            }            
        },

        methods:{
            addNewStat()
            {
               
                let lastId = -1;

                if(this.stats.length > 0)
                {
                    lastId =  this.stats[this.stats.length-1].id
                }


                const stat = {
                    id: lastId + 1,
                    name: this.newAbility,
                    value: 8
                }

                if(stat.name !== '' && isNaN(stat.name))
                {
                    this.stats.push(stat)
                }
            },

            removeStat(statId)
            {
                const index = this.stats.map(e => e.id).indexOf(statId)
                this.stats.splice(index, 1)
            },

            addPoint(name, number)
            {

                let cost = parseInt(this.checkNumber('increase', number))            

                this.abilityPoints = this.abilityPoints + (cost)

                this.stats.forEach(stat => {
                    if(stat.name === name)
                    {
                        if(stat.value < 18)
                        {
                            stat.value++
                        }
                    }
                });
            },

            removePoint(name, number)
            {

                let cost = parseInt(this.checkNumber('decrease', number))            

                this.abilityPoints = this.abilityPoints + (cost)

                this.stats.forEach(stat => {
                    if(stat.name === name)
                    {   
                        if(stat.value > 1)
                        {
                            stat.value--
                        }
                    }
                });
            },

            checkMax()
            {
                if(this.abilityPoints > this.abilityPointsMax)
                {
                    return 'text-danger'
                }
            },

            checkNumber(action, number)
            {
                let cost = null;
                let operator = '+';

                if(action === 'decrease')
                {
                    operator = '-'
                }

                if(number == 1 && action === 'increase')
                {   
                    cost = '4'
                }else if(number <= 1 && action === 'decrease')
                {
                    cost = '0'
                }
                else if(number == 2 && action === 'increase')
                {   
                    cost = '3'
                }else if(number == 2 && action === 'decrease')
                {
                    cost = '4'
                }
                else if(number == 3 || number == 16)
                {   
                    cost = '3'
                }
                else if(number == 4 && action === 'increase')
                {
                    cost = '2'
                }
                else if(number == 4 && action === 'decrease')
                {
                    cost = '3'
                }
                else if(number == 5 || number == 14)
                {
                    cost = '2'
                }
                else if (number == 6 && action === 'increase')
                {
                    cost = '1'
                }
                else if(number == 6 && action === 'decrease')
                {
                    cost = '2'
                }
                else if(number > 6 && number < 13)
                {
                    cost = '1'
                }
                else if(number == 13 && action === 'increase')
                {
                    cost = '2'
                }
                else if(number == 13 && action === 'decrease')
                {
                    cost = '1'
                }
                else if (number == 15 && action === 'increase')
                {
                    cost = '3'
                }
                else if(number == 15 && action === 'decrease')
                {
                    cost = '2'
                }
                else if(number == 17 && action === 'increase')
                {
                    cost = '4'
                }
                else if(number == 17 && action === 'decrease')
                {
                    cost = '3'
                }
                else if(number == 18 && action === 'increase')
                {
                    cost = '0'
                }
                else if(number == 18 && action === 'decrease')
                {
                    cost = '4'
                }

                console.log(cost)
                return parseInt(operator + cost)
            },            

            calcCost(number)
            {

                if(number === 1)
                {
                    return '-4'
                }  
                if(number > 1 && number < 4)
                {
                    return '-3'
                }                
                else if(number > 3 && number < 6)
                {
                    return '-2'
                }
                else if(number > 5 && number < 8)
                {
                    return '-1'
                }
                else if(number == 8)
                {
                    return '0'
                }
                else if(number > 8 && number < 14)
                {
                    return '+1'
                }
                else if(number > 13 && number < 16)
                {
                    return '+2'
                }
                else if(number > 15 && number < 18)
                {
                    return '+3'
                }
                else if(number === 18)
                {
                    return '+4'
                }
                
            }
        }
    }
</script>



<template>
    <section class="py-5">
        <h1 class="text-center glow-text-gold mb-5"> Point Buy</h1>
        
        <!-- Intro Sezione -->
        <div class="container mb-5">
            <div class="main-container p-5">            
                <h5>
                    In questa sezione puoi utilizzare il Point Buy Classico, hai la facoltà di scegliere quanti 
                    sono i punti iniziali, ed utilizzarli a tuo piacomento, seguendo le regole classiche di d&d 
                    spiegate nella legenda in fondo alla pagina.
                </h5>
            </div>
        </div>
        
        <!-- Modifiche al Point Buy -->
        <div class="container mb-5">
            <div class="main-container p-5">
                <div class="w-50 d-flex flex-column align-items-start m-0-auto">
                    <div class="w-100 d-flex justify-content-between align-items-center flex-column flex-md-row">
                        <h5>
                            <label for="newAbility" :class="{focused: focusLabelText}"> Aggiungi Caratteristica:</label>
                        </h5>
                        <h6>
                            <input @keyup.enter="addNewStat()" @focus="focusLabelText=true" @blur="focusLabelText=false" class="my-input" type="text" name="newAbility" id="newAbility" v-model="newAbility">
                        </h6>
                    </div>
                    <div class="w-100 d-flex justify-content-between align-items-center flex-column flex-md-row">
                        <h5>                        
                            <label for="abilityPointsMax" :class="{focused: focusLabelNum}"> Modifica Punti Totali:</label>
                        </h5>
                        <h6> 
                            <input @focus="focusLabelNum=true" @blur="focusLabelNum=false" class="my-input" type="number" name="abilityPointsMax" id="abilityPointsMax" v-model="abilityPointsMax">
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Point Buy -->
        <div class="container text-center mb-5">
            <div class="main-container">
                <h2 class="text-center mb-5">Point Buy</h2>
    
    
                <h4 class="mb-5">Punti Inziali: <span :class="checkMax()">{{ abilityPoints }}</span> <span> / {{ abilityPointsMax }}</span></h4>
    
                <ul class="stat-list">
                    <li v-for="stat in stats">
                        <div class="fs-4">                        
                        
                            <span class="text-start w-50">
                                {{ stat.name }} 
                            </span>
                        
                        
                            <span class="text-center d-flex justify-content-between w-35">
                                <span class="btn btn-outline-light" @click="removePoint(stat.name, stat.value)"><</span>
                                {{ stat.value }}
                                <span class="btn btn-outline-light" @click="addPoint(stat.name, stat.value)">></span>
                            </span>
                            <span class="btn btn-outline-danger" @click="removeStat(stat.id)">X</span>                  
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        

        <!-- Legenda -->
        <div class="container mb-5">
            <div class="main-container">
                <h2 class="text-center mb-3">Legenda</h2>
                <div class="table-container fs-5">
                    <table>
                        <thead>
                            <th class="px-2 text-center tborder-T tborder-L">Punteggio</th>
                            <th class="px-2 text-center tborder-T pe-4">Costo</th>
                            <th class="px-2 text-center tborder-T ps-4">Punteggio</th>
                            <th class="px-2 text-center tborder-T tborder-R">Costo</th>
                        </thead>
                        <tbody>
                            <tr v-for="number in 9">
                                <td class="text-center tborder-B tborder-L">{{ number }}</td>                            
                                <td class="text-center tborder-B tborder-R">{{ calcCost(number)}}</td>
                                <td class="text-center tborder-B">{{ number+9 }}</td>
                                <td class="text-center tborder-B tborder-R">{{ calcCost(number+9) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>





<style lang="scss" scoped>
.main-container{
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 18px;

    .table-container{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .stat-list{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 15px;
        li{
            width: 35%;
            border-bottom: 1px solid white;
            padding: 0 15px;
            padding-bottom: 5px;
            div{
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}

.tborder-B{
    border-bottom: 1px dotted white;
}

.tborder-R{
    border-right: 1px dotted white;
}

.tborder-L{
    border-left: 1px dotted white;
}
.tborder-T{
    border-top: 1px dotted white;
}

.w-35{
    width: 35% !important;
}

.m-0-auto{
    margin: 0 auto;
}

input[type="text"],
input[type="number"] {
    /* Dimensioni e posizionamento */
    width: 130px;
    padding: 10px;
    margin: 10px;
    
    /* Stile del testo */
    font-family: 'Cinzel', serif;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff; /* Oro brillante */
    text-align: center;

    /* Sfondo */    
    background-color: black;
    
    /* Bordo e ombreggiatura */
    border: 3px solid #dfdfdf; /* Rosso scuro */
    border-radius: 8px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.8);
    
    /* Aspetto generale */
    appearance: none;
    -moz-appearance: textfield; /* Per rimuovere le frecce su Firefox */
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    /* Rimuove le frecce su Chrome */
    -webkit-appearance: none;
    margin: 0;
}

input[type="text"]:focus,
input[type="number"]:focus {
    /* Effetto di messa a fuoco */
    outline: none;
    color: #ffa500;
    border-color: #ffa500; /* Arancione fuoco */
    box-shadow: 0px 0px 15px 5px rgba(255, 165, 0, 0.8);
}

label.focused {
    color: #ffa500;
    text-shadow: 1px 1px 2px rgb(0, 0, 0), 0 0 1em rgba(255, 165, 0, 0.8), 0 0 0.2em rgba(255, 165, 0, 0.8);
}

@media (max-width: 450px) {
    .main-container{
        .stat-list{
            li{
                width: 100%;            
            }
        }
    }
}
</style>