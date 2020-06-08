<template>
    <div>
        <section>
            <div>
                User
            </div>
            <div>
                <router-link v-bind:to="`/user/${fetchedItem.user}`">
                    {{fetchedItem.user}}
                </router-link>
                <div>{{fetchedItem.time_ago}}</div>
            </div>
            <h2>{{fetchedItem.title}}</h2>
        </section>
        <section>
            <div v-html="fetchedItem.content"></div>
        </section>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "ItemView",
        computed:{
            ...mapGetters(['fetchedItem']),
            // itemInfo(){
            //     return this.$store.state.item;
            // }
        },
        created(){
            const id = this.$route.params.id;
            console.log(id);
            this.$store.dispatch('FETCH_ITEM', id)
        }
    }
</script>

<style scoped>

</style>