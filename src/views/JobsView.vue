<template>
    <div>
        <p v-for="item in this.$store.state.jobs" v-bind:key="item.id">
            <a v-bind:href="item.url">
                {{ item.title }}
            </a>
            <small>{{item.domain}}</small>
        </p>
    </div>
</template>

<script>
    // import {fetchJobsList} from '../api/index'

    export default {
        data(){
            return {
                // users : []
            }
        },
        created() {
            this.$store.dispatch('FETCH_JOBS');

            // var vm = this;
            // fetchJobsList()
            // .then(function(response){
            //     console.log(response);
            //     vm.users = response.data;
            // })
            // .catch(function(error){
            //     console.log(error);
            // })
        }
    }
</script>

<style>

</style>