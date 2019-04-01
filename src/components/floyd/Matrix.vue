<template>
    <div class="col s12">
        Iteracja {{iteration + 1}}
        <table class="centered">
            <thead>
            <tr>
                <th></th>
                <th v-for="i in data.length">{{i}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(line, i) in data">
                <th>{{i+1}}</th>
                <td v-bind:class="{active : iteration==j || iteration==i}" v-for="(cell, j) in line">{{cell == null ? "" : cell}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Matrix",
        props : ["iteration", "data"],
        data(){
            return {}
        }
    }
</script>

<style scoped>
    table{
        margin-bottom: 20px;
        /*min-width: 300px;*/
    }
    .active{
        background-color: aquamarine;
        color:white;
    }

    tr{
        border: none;
    }
    td{
        border: 1px solid aquamarine;
    }
</style>