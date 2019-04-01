<template>
    <div class="backpack-wrapper ">
        <div class="row">
            <div class="col s12 m6 offset-m3">
                <div class="title">
                    <h6>Plecak alternatywny, używacie na własną odpowiedzialność</h6>
                    <p><small>by cynical</small></p>
                </div>
                <div class="row">
                    <div class="col s6">
                        <label>Wartości odzielone przecinkami</label>
                        <input v-model="valuesInput" placeholder="wartości">
                        <label>Wagi odzielone przecinkami</label>
                        <input v-model="weightsInput" placeholder="wagi">
                        <label>Pojemność plecaka</label>
                        <input v-model.number="capacity" placeholder="pojemność" type="number">
                        <button class="btn teal" v-on:click="table = pack()">Pakuj</button>
                    </div>
                </div>
                <h6 class="red-text text-lighten-2">{{error}}</h6>
            </div>
        </div>
        <div class="row">
            <Table class="col m6 s12 offset-m3" v-if="table" v-bind:table="table" v-bind:valueSum="valueSum"></Table>
        </div>
    </div>
</template>

<script>
    import Table from './Table';
    export default {
        name: "Backpack",
        data() {
            return {
                weightsInput: '3,4,2,6,1',
                valuesInput: '5,3,2,4,3',
                capacity: 10,
                error : '',
                table : null
            }
        },
        computed:{
            weights(){
                return this.weightsInput.split(',').map(x=>parseInt(x));
            },
            values(){
                return this.valuesInput.split(',').map(x=>parseInt(x));
            },
            itemsCount(){
                return this.values.length;
            },
            valueSum(){
                return this.values.reduce((a,b)=>a+b, 0);
            }
        },
        methods:{
            pack(){
                let table = [];
                let valueSum = this.values.reduce((a,b)=>a+b, 0);
                for (let i = 0; i < this.itemsCount; i++) {
                    table.push([]);
                    for (let j = 0; j < valueSum+1; j++) {
                        table[i].push(null);
                    }
                }

                //iterations
                table[0][this.values[0]] = this.weights[0];
                for (let k = 1; k < this.itemsCount; k++) {
                    table[k][this.values[k]] = this.weights[k];
                    for (let j = 0; j < valueSum; j++) {
                        if(table[k-1][j] !== null)
                            if(this.weights[k] + table[k-1][j] <= this.capacity) {
                                table[k][this.values[k] + j] = this.weights[k] + table[k - 1][j];
                                console.log(k, this.weights[k] + table[k - 1][j]);
                            }
                        }
                    for (let j = 0; j < valueSum; j++) {
                        if(table[k-1][j] !== null)
                            if(table[k][j] === null || table[k-1][j] < table[k][j])
                                table[k][j] = table[k-1][j];
                    }
                }
                return table;
            }
        },
        components:{
            Table
        }
    }
</script>

<style scoped>
    .backpack-wrapper{
        padding:10px;
    }
</style>