<template>
    <v-container class="grey lighten-4 fill ">
        <user-table :users="users"/>
    </v-container>
</template>

<script>
    import UserTable from '@/components/user/UserTable'
  export default {
    name: "users",
    components:{
      UserTable
    },
    mounted(){
      this.$store.dispatch('fetchUsers')
    },
    computed:{
      users(){
        return this.$store.getters.users;
      }
    }
  }
</script>

<style scoped>
    .fill{
        height: 100vh;
    }
</style>