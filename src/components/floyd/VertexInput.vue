<template>
    <div>
        <p class="flow-text"><small>Wierzchołek</small> {{number}} <small>liczba połączeń:</small> {{connections.length}}</p>
        <div>
            <div v-for="connection in connections" :key="connection.to" class="connection">
                Do {{connection.to + 1}}, waga: {{connection.weight}}
                <button class="btn-small red" v-on:click="connections.splice(connections.indexOf(connection), 1)">Usuń</button>
            </div>
        </div>
        <div class="inputs">
            <label>Do</label>
            <input type="number" name="to" v-model.number="to">
            <label>Waga łuku</label>
            <input type="number" name="weight" v-model.number="weight">
            <button class="btn-floating btn-small waves-effect waves-light" v-on:click="addConnection"><i class="material-icons">add</i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VertexInput",
        props: ["number"],
        data() {
            return {
                to: null,
                weight: null,
                connections : []
        }
        },
        methods: {
            addConnection(){
                    // if()
                    this.connections.push({to: this.to-1, weight: this.weight});
                    this.$emit('connectionAdded', this.connections);
            }
        }
    }
</script>

<style scoped>
    .inputs{
        padding-left: 50px;
    }
    .inputs input
    {
        width: 30px;
    }

    .inputs *
    {
        margin-right: 10px;
    }
    .connection
    {
        padding-left: 50px;
        margin-top: 10px;
    }
    .connection button
    {
        margin-left: 20px;
    }
</style>