<template>
    <v-app>
        <v-content>
            <router-view/>
        </v-content>
        <loading></loading>
        <snackbar></snackbar>
    </v-app>
</template>

<script>
  import Loading from '@/components/Loading'
  import Snackbar from "@/components/SnackBar";

  export default {
    components:{
      Snackbar,
      Loading,
    },
    name: 'App',
    data () {
      return {
        //
      }
    }
  }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Work+Sans');
    .application{
        font-family: 'Work Sans', sans-serif;
    }

    .title-1 {
        font-family: "Ubuntu", sans-serif;
        margin-bottom: 1rem;

        &.-tongue {
            & {
                position: relative;
            }
            &:before {
                 position: absolute;
                 top: 50%;
                 left: -64px;
                 display: block;
                 content: "";
                 width: 40px;
                 height: 8px;
                 border-radius: 0 4px 4px 0;
                 background: #01c469;
                 transform: translateY(-50%);
             }
        }
    }

    .text-uppercase {
        text-transform: uppercase;
    }

</style>