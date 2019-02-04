<template>
    <v-layout>
        <navigation-drawer></navigation-drawer>
        <router-view></router-view>
    </v-layout>
</template>

<script>
  import NavigationDrawer from "@/components/base/NavigationDrawer";

  export default {
    components: {
      NavigationDrawer
    },
    name: "InLayout"
  }
</script>

<style scoped>

</style>