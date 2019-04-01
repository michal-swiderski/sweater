<template>
    <div class="row">
        <div class="col s12 m6 offset-m3">
            <ul class="tabs" ref="tabs">
                <li class="tab col s6"><router-link class="active" to="/floyd">Floyd</router-link></li>
                <li class="tab col s6"><router-link to="/backpack">Backpack</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        mounted(){
            M.Tabs.init(this.$refs.tabs, {
                swipeable: false
            });
        }
    }
</script>

<style scoped>

</style>