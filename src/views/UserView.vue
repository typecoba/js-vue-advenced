<template>
    <div>
        <p>name : {{userInfo.id}}</p>
        <p>karma : {{userInfo.karma}}</p>
        <p>created : {{userInfo.created}}</p>
    </div>
    
</template>

<script>

    export default {
        name: "UserView",

        computed:{
            userInfo(){
                return this.$store.state.user;
            }
        },

        created(){
            const userName = this.$route.params.username;
            console.log(this.$route.params);
            this.$store.dispatch('FETCH_USER', userName);
        }
    }
</script>

<style scoped>

</style>