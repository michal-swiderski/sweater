<template>
    <div class="table-wrapper">
        <table class="striped centered">
            <thead>
            <tr>
                <th></th>
                <th v-for="i in valueSum">{{i}}</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(line, j) in table">
                    <th>{{j+1}}</th>
                    <td v-for="cell in line.slice(1,valueSum+1)">{{cell}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Table",
        props: ["table", "valueSum", "iteration"]
    }
</script>

<style scoped>
    .table-wrapper{
        margin-top: 30px;
    }
    td{
        border: 1px solid lightblue;
    }
</style>