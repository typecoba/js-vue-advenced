<template>
    <div>
        <p v-for="item in askItems" v-bind:key="item.id">
            <a v-bind:href="`/item/${item.id}`">
                {{item.title}}
            </a>
            <small>{{item.time_ago}} by {{item.user}}</small>
        </p>
    </div>
</template>

<script>
    import {/*mapState,*/ mapGetters} from 'vuex'

    // import {fetchAskList} from '../api/index'

    export default {
        data() {
            return {
                // ask: []
            }
        },
        computed: {
            //3 스프레이드 오퍼레이터 문법 es6 (객체던 배열이던 풀어넣어준다)
            ...mapGetters({
                askItems: 'fetchedAsk'
            }),

            //2
          // ...mapState({
          //     ask: state => state.ask
          // })

            //1
          // ask(){
              // return this.$store.state.ask;
          // }
        },
        created() {
            this.$store.dispatch('FETCH_ASK');

            // var vm = this;
            // fetchAskList()
            // .then(function(response){
            //     console.log(response);
            //     vm.ask = response.data;
            // })
            // .catch(function(error){
            //     console.log(error);
            // })
        }
    }
</script>

<style>

</style>