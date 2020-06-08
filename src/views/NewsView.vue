<template>
    <div>
        <p v-for="item in this.$store.state.news" :key="item.id">
            <a v-bind:href="item.url">
                {{item.title}}
            </a>
            <small>{{item.time_ago}} by
                <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
            </small>
        </p>
    </div>
</template>

<script>
    // import {fetchNewsList} from '../api/index'

export default {
    data (){
        return {
            // news: []
        }
    },
    created() {
        this.$store.dispatch('FETCH_NEWS') // store action에 있는 함수가 실행됨

        // fetchNewsList()
        // .then(response => {console.log(response), this.news = response.data})
        // .catch(error => console.log(error));
    }
}
</script>

<style>

</style>