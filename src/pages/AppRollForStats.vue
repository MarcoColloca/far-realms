<script>
export default {

    data() {
        return {
            selected: '',

            statFlatMax: 18,
            statFlatMin: 4,

            statsDice1: [
                {
                    name: 'Forza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Destrezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Costituzione',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Intelligenza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Saggezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Carisma',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Sanità',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Fama',
                    visible: false,
                    dice: [],
                },
                {
                    name: 'Fortuna',
                    visible: false,
                    dice: [],
                },
            ],

            statsDice2: [
                {
                    name: 'Forza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Destrezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Costituzione',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Intelligenza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Saggezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Carisma',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Sanità',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Fama',
                    visible: false,
                    dice: [],
                },
                {
                    name: 'Fortuna',
                    visible: false,
                    dice: [],
                },
            ],

            statsDice3: [
                {
                    name: 'Forza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Destrezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Costituzione',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Intelligenza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Saggezza',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Carisma',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Sanità',
                    visible: true,
                    dice: [],
                },
                {
                    name: 'Fama',
                    visible: false,
                    dice: [],
                },
                {
                    name: 'Fortuna',
                    visible: false,
                    dice: [],
                },
            ],


            choseTab: {
                first: true,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
            },

            firstTab: [
                {
                    stat: 'Forza',
                    value: '-',
                    visible: true,
                    id: 1.1
                },
                {
                    stat: 'Destrezza',
                    value: '-',
                    visible: true,
                    id: 1.2
                },
                {
                    stat: 'Costituzione',
                    value: '-',
                    visible: true,
                    id: 1.3
                },
                {
                    stat: 'Intelligenza',
                    value: '-',
                    visible: true,
                    id: 1.4
                },
                {
                    stat: 'Saggezza',
                    value: '-',
                    visible: true,
                    id: 1.5
                },
                {
                    stat: 'Carisma',
                    value: '-',
                    visible: true,
                    id: 1.6
                },
                {
                    stat: 'Sanità',
                    value: '-',
                    visible: true,
                    id: 1.7
                },
                {
                    stat: 'Fama',
                    value: '-',
                    visible: false,
                    id: 1.8
                },
                {
                    stat: 'Fortuna',
                    value: '-',
                    visible: false,
                    id: 1.9
                },
            ],

            secondTab: [
                {
                    stat: 'Forza',
                    value: '-',
                    visible: true,
                    id: 2.1
                },
                {
                    stat: 'Destrezza',
                    value: '-',
                    visible: true,
                    id: 2.2
                },
                {
                    stat: 'Costituzione',
                    value: '-',
                    visible: true,
                    id: 2.3
                },
                {
                    stat: 'Intelligenza',
                    value: '-',
                    visible: true,
                    id: 2.4
                },
                {
                    stat: 'Saggezza',
                    value: '-',
                    visible: true,
                    id: 2.5
                },
                {
                    stat: 'Carisma',
                    value: '-',
                    visible: true,
                    id: 2.6
                },
                {
                    stat: 'Sanità',
                    value: '-',
                    visible: true,
                    id: 2.7
                },
                {
                    stat: 'Fama',
                    value: '-',
                    visible: false,
                    id: 2.8
                },
                {
                    stat: 'Fortuna',
                    value: '-',
                    visible: false,
                    id: 2.9
                },
            ],

            thirdTab: [
                {
                    stat: 'Forza',
                    value: '-',
                    visible: true,
                    id: 3.1
                },
                {
                    stat: 'Destrezza',
                    value: '-',
                    visible: true,
                    id: 3.2
                },
                {
                    stat: 'Costituzione',
                    value: '-',
                    visible: true,
                    id: 3.3
                },
                {
                    stat: 'Intelligenza',
                    value: '-',
                    visible: true,
                    id: 3.4
                },
                {
                    stat: 'Saggezza',
                    value: '-',
                    visible: true,
                    id: 3.5
                },
                {
                    stat: 'Carisma',
                    value: '-',
                    visible: true,
                    id: 3.6
                },
                {
                    stat: 'Sanità',
                    value: '-',
                    visible: true,
                    id: 3.7
                },
                {
                    stat: 'Fama',
                    value: '-',
                    visible: false,
                    id: 3.8
                },
                {
                    stat: 'Fortuna',
                    value: '-',
                    visible: false,
                    id: 3.9
                },
            ]

        }

    },

    watch: {
        selected(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.tabSelection()
            }
        }
    },

    methods: {

        getRandomInt(min, max) {
            const minCeiled = Math.ceil(min);
            const maxFloored = Math.floor(max);
            return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
        },


        toggleStat(index) {

            for (let i = 0; i < this.firstTab.length; i++) {

                let statFT = this.firstTab[i];
                let statST = this.secondTab[i];
                let statTT = this.thirdTab[i];
                let statSD1 = this.statsDice1[i];
                let statSD2 = this.statsDice2[i];
                let statSD3 = this.statsDice3[i];

                if (i === index) {
                    statFT.visible = !statFT.visible;
                    statST.visible = !statST.visible;
                    statTT.visible = !statTT.visible;
                    statSD1.visible = !statSD1.visible;
                    statSD2.visible = !statSD2.visible;
                    statSD3.visible = !statSD3.visible;
                }
            }

        },


        generateStat(tab, diceRolled, diceRemoved, diceArray) {

            for (let i = 0; i < tab.length; i++) {
                const numbers = []

                for (let i = 0; i < diceRolled; i++) {
                    const number = this.getRandomInt(1, 7)
                    numbers.push(number)
                }


                numbers.sort()
                const newNumbers = numbers.slice(diceRemoved, numbers.length)

                let stat = 0;
                for (let i = 0; i < newNumbers.length; i++) {
                    const dice = newNumbers[i]

                    stat += dice
                }



                diceArray[i].dice = newNumbers



                tab[i].value = stat
            }
        },

        generateStatFlat(tab) {
            for (let i = 0; i < tab.length; i++) {

                const number = this.getRandomInt(this.statFlatMin, this.statFlatMax + 1)

                tab[i].value = number
            }
        },

        tabSelection() {

            for (let i = 0; i < this.firstTab.length; i++) {
                this.firstTab[i].value = '-'
            }

            for (let i = 0; i < this.secondTab.length; i++) {
                this.secondTab[i].value = '-'
            }

            for (let i = 0; i < this.thirdTab.length; i++) {
                this.thirdTab[i].value = '-'
            }

            for (let i = 0; i < this.statsDice1.length; i++) {
                this.statsDice1[i].dice = []
            }

            for (let i = 0; i < this.statsDice2.length; i++) {
                this.statsDice2[i].dice = []
            }

            for (let i = 0; i < this.statsDice3.length; i++) {
                this.statsDice3[i].dice = []
            }


            this.choseTab.first = true;
            this.choseTab.second = false;
            this.choseTab.third = false;
            this.choseTab.fourth = false;
            this.choseTab.fifth = false;

            if (this.selected === '4d6') {
                this.choseTab.first = false;
                this.choseTab.second = true;
                this.choseTab.third = false;
                this.choseTab.fourth = false;
                this.choseTab.fifth = false;
            } else if (this.selected === '5d6') {
                this.choseTab.first = false;
                this.choseTab.second = false;
                this.choseTab.third = true;
                this.choseTab.fourth = false;
                this.choseTab.fifth = false;
            } else if (this.selected === '6d6') {
                this.choseTab.first = false;
                this.choseTab.second = false;
                this.choseTab.third = false;
                this.choseTab.fourth = true;
                this.choseTab.fifth = false;
            } else if (this.selected === 'flat') {
                this.choseTab.first = false;
                this.choseTab.second = false;
                this.choseTab.third = false;
                this.choseTab.fourth = false;
                this.choseTab.fifth = true;
            }

        },

        getDiceImg(number) {
            return `/imgs/d6-${number}.png`
        }
    }
}

</script>



<template>
    <section class="py-5">
        <h1 class="text-center mb-5 glow-text-crimson">Roll for Stats!</h1>

        <div class="main-container">
            <!-- Sezione della Selezione delle Tab -->
            <div class="tab-selection-section">
                <div class="container">
                    <div class="tab-selection-section__select-box">
                        <label for="dice-select">Scegli quanti dadi lanciare:</label>
                        <div class="select-wrapper">
                            <select name="dice" id="dice-select" v-model="selected">
                                <option>3d6</option>
                                <option>4d6</option>
                                <option>5d6</option>
                                <option>6d6</option>
                                <option>flat</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Selezione delle Stat Extra -->
            <div class="container">
                <h3 class="toggle-stats__title">Seleziona quali statistiche Rollare!</h3>
                <ul class="toggle-stats">
                    <li v-for="(object, i) in firstTab" @click="toggleStat(i)" class="box">
                        <p :class="object.visible ? 'crimson' : 'white'">
                            {{ object.stat }}
                        </p>
                    </li>
                </ul>
            </div>

            <!-- Schede con 3d6 -->
            <div class="roll-tab-section" v-show="choseTab.first === true">
                <h1 class="roll-tab-section__title">
                    Schede per le Stats con 3d6
                </h1>
                <p class="roll-tab-section__subtitle">
                    Per ogni Statistica verranno lanciati 3d6, Good Luck!
                </p>


                <div class="container">
                    <div class="roll-tab-section__tabs-wrapper row">
                        <div class="col-4">
                            <button class="roll-button" @click="generateStat(firstTab, 3, 0, statsDice1)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--4d6">
                                <li v-for="object in firstTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <button class="roll-button"
                                @click="generateStat(secondTab, 3, 0, statsDice2)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--5d6">
                                <li v-for="object in secondTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <button class="roll-button" @click="generateStat(thirdTab, 3, 0, statsDice3)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--6d6">
                                <li v-for="object in thirdTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Schede con 4d6 -->
            <div class="roll-tab-section" v-show="choseTab.second === true">
                <h1 class="roll-tab-section__title">
                    Schede per le Stats con 4d6
                </h1>
                <p class="roll-tab-section__subtitle">
                    Per ogni Statistica verranno lanciati 4d6 e tenuti i 3 migliori.
                </p>


                <div class="container">
                    <div class="roll-tab-section__tabs-wrapper row">
                        <div class="col-4">
                            <button class="roll-button" @click="generateStat(firstTab, 4, 1, statsDice1)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--4d6">
                                <li v-for="object in firstTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <button class="roll-button"
                                @click="generateStat(secondTab, 4, 1, statsDice2)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--4d6">
                                <li v-for="object in secondTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <button class="roll-button" @click="generateStat(thirdTab, 4, 1, statsDice3)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--4d6">
                                <li v-for="object in thirdTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Schede con 5d6 -->
            <div class="roll-tab-section" v-show="choseTab.third === true">
                <h1 class="roll-tab-section__title">
                    Schede per le Stats con 5d6
                </h1>
                <p class="roll-tab-section__subtitle">
                    Per ogni Statistica verranno lanciati 5d6 e tenuti i 3 migliori.
                </p>


                <div class="container">
                    <div class="roll-tab-section__tabs-wrapper row">
                        <div class="col-4">
                            <button class="roll-button" @click="generateStat(firstTab, 5, 2, statsDice1)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--5d6">
                                <li v-for="object in firstTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <button class="roll-button"
                                @click="generateStat(secondTab, 5, 2, statsDice2)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--5d6">
                                <li v-for="object in secondTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <button class="roll-button" @click="generateStat(thirdTab, 5, 2, statsDice3)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--5d6">
                                <li v-for="object in thirdTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Schede con 6d6 -->
            <div class="roll-tab-section" v-show="choseTab.fourth === true">
                <h1 class="roll-tab-section__title">
                    Schede per le Stats con 6d6
                </h1>
                <p class="roll-tab-section__subtitle">
                    Per ogni Statistica verranno lanciati 6d6 e tenuti i 3 migliori.
                </p>


                <div class="container">
                    <div class="roll-tab-section__tabs-wrapper row">
                        <div class="col-4">
                            <button class="roll-button" @click="generateStat(firstTab, 6, 3, statsDice1)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--6d6">
                                <li v-for="object in firstTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <button class="roll-button"
                                @click="generateStat(secondTab, 6, 3, statsDice2)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--6d6">
                                <li v-for="object in secondTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <button class="roll-button" @click="generateStat(thirdTab, 6, 3, statsDice3)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--6d6">
                                <li v-for="object in thirdTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Schede con stat Flat -->
            <div class="roll-tab-section" v-show="choseTab.fifth === true">
                <h1 class="roll-tab-section__title">
                    Schede per le Stats Flat <input type="number" v-model="statFlatMin" min="0" max="99"> - <input
                        type="number" v-model="statFlatMax" min="5" max="99">
                </h1>
                <p class="roll-tab-section__subtitle">
                    Il risultato di ogni statistica sarà un numero compreso tra il primo ed il secondo numero scelti.
                </p>

                <div class="container">
                    <div class="roll-tab-section__tabs-wrapper row">
                        <div class="col-4">
                            <button class="roll-button" @click="generateStatFlat(firstTab)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--6d6">
                                <li v-for="object in firstTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <button class="roll-button" @click="generateStatFlat(secondTab)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--6d6">
                                <li v-for="object in secondTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-4">
                            <button class="roll-button" @click="generateStatFlat(thirdTab)">Roll!</button>
                            <ul class="roll-tab-section__tabs-wrapper__tab--6d6">
                                <li v-for="object in thirdTab" :key="object.id">
                                    <div v-if="object.visible">
                                        <span>{{ object.stat }}:</span> <span>{{ object.value }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Bottom -->
    <section v-show="choseTab.fifth === false" class="pb-5">
        <div class="bottom-container">
            <h1 class="bottom-title"> Dadi dei Roll!</h1>
            <div class="container">
                <div class="row justify-around">
                    <div class="col-4">
                        <ul class="statsDice">
                            <li v-for="object in statsDice1" class="dash">
                                <div v-if="object.visible">
                                    <span>{{ object.name }}: </span>
                                    <p v-for="dice in object.dice"> <img class="dice-img" :src="getDiceImg(dice)"
                                            :alt="dice"> </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="col-4">
                        <ul class="statsDice">
                            <li v-for="object in statsDice2" class="dash">
                                <div v-if="object.visible">
                                    <span>{{ object.name }}: </span>
                                    <p v-for="dice in object.dice"> <img class="dice-img" :src="getDiceImg(dice)"
                                            :alt="dice"> </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="col-4">
                        <ul class="statsDice">
                            <li v-for="object in statsDice3" class="dash">
                                <div v-if="object.visible">
                                    <span>{{ object.name }}: </span>
                                    <p v-for="dice in object.dice"> <img class="dice-img" :src="getDiceImg(dice)"
                                            :alt="dice"> </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>





</template>


<style lang="scss" scoped>
/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul,
ol,
menu {
    list-style: none;
}


/* Layout */

.col-4 {
    width: calc(100%/12*4);
}

.col-6 {
    width: calc(100%/12*6);
}

.main-container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 18px;
}

.bottom-container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 18px;
    margin-top: 30px;
    min-height: 400px;
}



/* Utility */

.red {
    color: red;
}

.justify-between {
    justify-content: space-between;
}

.justify-around {
    justify-content: space-around;
}



/*\ Main Section /*/

/* Dice Select Section */
.tab-selection-section__select-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tab-selection-section__select-box label {
    color: white;
    font-size: 24px;
    padding: 30px 0;
}

.select-wrapper select {
    color: white;
    background-color: black;
    padding: 5px 20px;
    font-size: 18px;
}

.select-wrapper button {
    border: transparent;
    background-color: transparent;
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
    color: crimson;
    cursor: pointer;
}

/* Tabs Section*/
.roll-tab-section {
    padding: 35px 0 0 0;
}

.roll-tab-section__title {
    text-align: center;
    color: crimson;
}

.roll-tab-section__title input {
    color: crimson;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    background-color: transparent;
    padding: 5px 10px;
    border: 1px solid crimson;
    width: 55px;
    appearance: auto;
    -moz-appearance: textfield;
}


.roll-tab-section__subtitle {
    text-align: center;
    color: wheat;
    font-size: 18px;
    margin-top: 5px;
}

.roll-tab-section__tabs-wrapper {
    margin: 75px 0;
}


.roll-tab-section__tabs-wrapper .col-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.roll-tab-section__tabs-wrapper__tab--4d6,
.roll-tab-section__tabs-wrapper__tab--5d6,
.roll-tab-section__tabs-wrapper__tab--6d6 {
    color: white;
    border: 1px solid white;
    width: fit-content;
    padding: 15px;
    font-size: 32px;
    width: 350px;
}

.roll-tab-section__tabs-wrapper__tab--4d6 li,
.roll-tab-section__tabs-wrapper__tab--5d6 li,
.roll-tab-section__tabs-wrapper__tab--6d6 li {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.roll-tab-section__tabs-wrapper__tab--4d6 li div,
.roll-tab-section__tabs-wrapper__tab--5d6 li div,
.roll-tab-section__tabs-wrapper__tab--6d6 li div {
    border-bottom: 1px solid white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 40px;
}

.roll-button {
    padding: 5px 10px;
    margin-bottom: 15px;
    font-size: 18px;
    background-color: crimson;
    border: 1px solid rgb(255, 255, 255);
    color: white;
    cursor: pointer;
}


/*\ bottom \*/

.bottom-title {
    text-align: center;
    color: crimson;
    margin-bottom: 20px;
}

.statsDice {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
}

.statsDice li {
    margin-bottom: 11px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dash {
    margin-left: 45px;
}

.dash p {
    display: inline-block;
}

.dash span {
    margin-right: 10px;
}

.dice-img {
    max-width: 25px;
    margin-right: 10px;
}

/* Toggle Stat section */

.toggle-stats {
    display: flex;
    color: white;
    gap: 10px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
}

.crimson {
    color: crimson;
}

.white {
    color: white;
}

.toggle-stats__title {
    margin-top: 50px;
    text-align: center;
    color: white;
}

.box {
    padding: 5px 10px;
    border: 1px solid white;
    border-radius: 18px;
}

.box:hover {
    background-color: black;
}



/* Media Query Mobile */


@media(max-width: 450px) {
    .container {
        max-width: 400px;
        margin: 0 auto;
    }

    .col-4 {

        width: calc(100%/12*12);
        margin-top: 15px;
    }

    .toggle-stats {
        width: 350px;
        flex-wrap: wrap;
    }

}
</style>