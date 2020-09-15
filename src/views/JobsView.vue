<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for="item in this.$store.state.jobs" :key="item.id">
                <div class="points">
                    {{ item.points || 0}} <!-- null 인경우 0 return -->
                </div>
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url">{{ item.title }}</a>
                    </p>
                    <small class="link-text">
                        {{item.time_ago}} by                        
                        <a v-bind:href="item.url">{{item.domain}}</a>
                    </small>
                </div>
            </li>
        </ul>

        <!-- <p v-for="item in this.$store.state.jobs" v-bind:key="item.id">
            <a v-bind:href="item.url">
                {{ item.title }}
            </a>
            <small>{{item.domain}}</small>
        </p> -->
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
    .news-list{
        margin:0;
        padding:0;
    }  
    .post{
        list-style:none;
        display:flex;
        align-items:center;
        border-bottom:1px solid #eee;
    }
    .points{
        width:80px;
        height:60px;
        display:flex;
        align-items: center;
        justify-content: center;
        color: #41b883;
    }
    .news-title{
        margin:0;
    }
    .link-text {
        color: #828282;
    }
</style>