<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="loading"
      persistent
      width="300"
    >
      <v-card
        color="rosa"
        dark
      >
        <v-card-text>
          Por favor aguarde
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
// this.$store.dispatch('setLoadingDialog',false);
</script>
