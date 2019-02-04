<template>
  <v-snackbar
          v-model="active"
          bottom
          multi-line
          :color="color"
          :timeout="timeout"
  >
    {{text}}
  </v-snackbar>
</template>

<script>
export default {
  name: 'snackbar',
  data(){
    return {
      active: false,
      text: '',
      color: '',
      timeout: 3000,
    }
  },
  computed: {
    snackBar() {
      return this.$store.getters.snackBar;
    },
  },
  watch:{
    snackBar(value){
      this.active = true
      this.text = value.text
      this.color = value.color
      this.timeout = value.timeout || 3000
    }
  }
};
// this.$store.dispatch('setLoadingDialog',false);
</script>
