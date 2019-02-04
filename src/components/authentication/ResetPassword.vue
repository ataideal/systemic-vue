<template>
  <div class="text-xs-center">
    <v-dialog
            v-model="dialog"
            width="400"
            persistent
    >
      <v-card>
        <v-card-title
                class="headline primary white--text"
                primary-title
        >
          Esqueci a senha
        </v-card-title>

        <v-card-text class="pa-4">
            <v-text-field
                    label="CPF"
                    v-model="cpf"
                    mask="###.###.###-##"
            >
            </v-text-field>
            <v-text-field
                    label="Email"
                    v-model="email"
            >
            </v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-layout align-center justify-space-around>
                <v-btn
                        color="primary"
                        flat
                        @click="cancel()"
                >
                    Cancelar
                </v-btn>
                <v-btn
                      color="primary"
                      flat
                      @click="sendResetInstructions()"
                      :disabled="email.length === 0 || cpf.length === 0"
                >
                    Enviar Instruções
              </v-btn>
            </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import AuthService from '@/services/AuthService'
export default {
  name: 'reset-password',
  props:['dialog'],
  data(){
    return {
      email: '',
      cpf: '',
    }
  },
  methods:{
    cancel(){
      this.$emit('update:dialog', false);
      this.email='';
      this.cpf='';
    },
    sendResetInstructions(){
      this.$emit('update:dialog', false);

      this.$store.dispatch('setLoadingDialog',true);
      AuthService.sendResetInstructions(this.email)
          .then(() => {
                this.$emit('sentInstructions', true)
          })
          .catch(() =>{
            this.$emit('sentInstructions', false)
          })
          .finally(() =>{
            this.$store.dispatch('setLoadingDialog',false);
            this.email = ''
        })
    }
  }
};
</script>
