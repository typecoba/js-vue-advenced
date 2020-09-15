<template>
    <div>
        <!-- 1. askitems 바인딩 -->
        <!-- <p v-for="item in askItems" v-bind:key="item.id">
            <a v-bind:href="`/item/${item.id}`">
                {{item.title}}
            </a>
            <small>{{item.time_ago}} by {{item.user}}</small>
        </p> -->


        <!-- 2. 구조 공통화 -->
        <!-- <ul class="news-list">
            <li class="post" v-for="item in askItems" :key="item.id">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="news-title">
                        <router-link v-bind:to="`item/${item.id}`">
                            {{item.title}}
                        </router-link>
                    </p>
                    <small class="link-text">
                        {{item.time_ago}} by
                        <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
                    </small>
                </div>
            </li>
        </ul> -->

        <!-- 3. 공통 컴포넌트 사용 -->
        <list-item></list-item>
        
    </div>
</template>

<script>
    // import {/*mapState,*/ mapGetters} from 'vuex'
    // import {fetchAskList} from '../api/index'

    /*
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
    }*/

    import ListItem from '../components/ListItem.vue';
    
    export default {
        components : {
            ListItem,
        }
    }

</script>

<style>
    /* .news-list{
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
    } */
</style>