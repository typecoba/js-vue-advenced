<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import ToolBar from "./components/ToolBar";

export default {
  name: 'App',
  components: {
    ToolBar,
  }
}
</script>

<style>

  body{
    padding:0;
    margin:0;
  }
  a{
    color:#34495e;
    text-decoration: none;
  }
  a:hover{
    color:#42b883;
    text-decoration: underline;
  }
  a.router-link-exact-active{
    text-decoration: underline;
  }

  .fade-enter-active, .fade-leave-active{
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

</style>
