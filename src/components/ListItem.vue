<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in listItems" :key="item.id">
        <div class="points">{{ item.points || 0}}</div> <!-- null 인경우 0 -->
        <div>
          <!-- 분기처리 template + v-if -->
          <p class="news-title">
              <template v-if='item.domain'> <!-- 도메인이 있는경우만 -->
                <a v-bind:href="item.url"> {{item.title}} </a>
              </template>
              <template v-else>
                <router-link v-bind:to='`item/${item.id}`'> {{item.title}} </router-link>  
              </template>  
          </p>
          <!-- 분기처리 태그 내부 v-if 삽입 -->
          <small class="link-text">
            {{item.time_ago}} by
            <router-link v-if='item.user' v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
            <a v-else v-bind:href='item.url'>{{item.domain}}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // news: []
    };
  },
  created() {
    // this.$store.dispatch("FETCH_NEWS"); // store action에 있는 함수가 실행됨

    // $route객체를 통해 page name 정보에 접근할 수 있음
    console.log(this.$route);

    const routeName = this.$route.name;
    let actionName = null;
    if( routeName === 'news'){
        actionName = 'FETCH_NEWS';
    }else if( routeName === 'ask'){
        actionName = 'FETCH_ASK';
    }else if( routeName === 'jobs'){
        actionName = 'FETCH_JOBS';
    }

    this.$store.dispatch(actionName);

  },
  computed: {
    listItems() {
        const routeName = this.$route.name;
        if( routeName === 'news'){
            return this.$store.state.news;
        }else if( routeName === 'ask'){
            return this.$store.state.ask;
        }else if( routeName === 'jobs'){
            return this.$store.state.jobs;
        }
        return null;
    }
  }
};
</script>

<style>
.news-list {
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
}
</style>