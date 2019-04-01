<template>
    <div class="floyd-wrapper row">
        <div class="col s12 m6 offset-m3">
            <div class="title">
                <h6>Algorytm floyda, wersja pre-alpha, not foolproof, używacie na własną odpowiedzialność</h6>
                <p><small>by cynical</small></p>
            </div>
            <div>
                <button class="btn-small" v-on:click="vertices.push([])">Dodaj wierzchołek</button>
                <VertexInput v-for="index in vertices.length" v-bind:number="index" v-on:connectionAdded="$set(vertices, index-1, $event)"></VertexInput>
                <div class="table-wrapper row">
                    <Matrix v-for="(iteration, index) in iterations" :iteration="index" :data="iteration"></Matrix>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import VertexInput from './VertexInput';
    import Matrix from './Matrix'
    export default {
        name: 'floyd',
        props: {

        },
        data(){
            return {
                vertices: []
            }
        },
        computed:{
            iterations(){
                let matrix = Array(this.vertices.length).fill(null).map(x => Array(this.vertices.length).fill(null));
                for(let i = 0; i<this.vertices.length; i++){
                    matrix[i][i] = 0;
                    for(let j=0; j<this.vertices[i].length; j++){

                        let to = this.vertices[i][j].to;
                        let weight = this.vertices[i][j].weight;
                        matrix[i][to] = weight;
                    }
                }
                let iterations = [];
                for(let k = 0; k<this.vertices.length; k++){
                    for (let i = 0; i < matrix.length; i++) {
                        for (let j = 0; j < matrix[i].length; j++) {
                            if(i === k || j === k)
                                continue;
                            else{
                                if(matrix[i][k] ===null ||  matrix[k][j] === null)
                                    continue;
                                if(matrix[i][j] === null || matrix[i][k] + matrix[k][j] < matrix[i][j])
                                {
                                    matrix[i][j] = matrix[i][k] + matrix[k][j];
                                }
                            }
                        }
                    }
                    iterations.push(JSON.parse(JSON.stringify(matrix)));
                }
                return iterations;
            }
        },
        components: {
            VertexInput,
            Matrix
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .table-wrapper{
        margin-top: 50px;
        min-width: 300px;
    }

    .floyd-wrapper{
    }

    .title{
        text-align: justify;
    }

    .title p{
        margin-top: 0;
    }
</style>
