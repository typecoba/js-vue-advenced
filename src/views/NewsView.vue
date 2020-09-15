<template>
  <div>
    <!-- <p v-for="item in this.$store.state.news" :key="item.id">
            <a v-bind:href="item.url">
                {{item.title}}
            </a>
            <small>{{item.time_ago}} by
                <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
            </small>
    </p>-->
    <!-- <ul class="news-list">
      <li class="post" v-for="item in this.$store.state.news" :key="item.id">
        <div class="points">{{ item.points }}</div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">{{item.title}}</a>
          </p>
          <small class="link-text">
            {{item.time_ago}} by
            <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
          </small>
        </div>
      </li>
    </ul>-->

    <list-item></list-item>
  </div>
</template>

<script>
// import {fetchNewsList} from '../api/index'

// export default {
//   data() {
//     return {
//       // news: []
//     };
//   },
//   created() {
//     this.$store.dispatch("FETCH_NEWS"); // store action에 있는 함수가 실행됨

//     // fetchNewsList()
//     // .then(response => {console.log(response), this.news = response.data})
//     // .catch(error => console.log(error));
//   },
// };

// 공통 컴포넌트 처리
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
};
</script>

<style scoped>
/* .news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
} */
</style>