<template>
    <authentication-layout>
        <header slot="form-header" class="header">
            <h2 class="title">Entre com sua conta de Usuário</h2>
        </header>

        <template slot="form-content">
            <v-card elevation="0">
                <v-card-text>
                    <v-form>
                        <v-text-field
                                v-model="cpf"
                                @keypress.enter="login"
                                mask="###.###.###-##"
                                label="CPF"
                                type="text"
                        />

                        <v-text-field
                                v-model="password"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="(show = !show)"
                                :type="show ? 'password' : 'text'"
                                @keypress.enter="login"
                                label="Senha"
                                hint="Mínimo de 8 caracteres"
                                min="8"
                        />
                    </v-form>
                </v-card-text>

                <v-card-actions class="action">
                    <v-btn flat small class="link-recovery" @click="resetPassword = true">
                        <v-icon left>mdi-lock-outline mdi-18px</v-icon>
                        <span class="text">Esqueci minha senha</span>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn large color="primary" v-on:click="login">Entrar</v-btn>
                </v-card-actions>
                <v-alert outline color="error" icon="mdi-alert" :value="loginFailed" class="text-md-center">
                    {{loginFailedMessage}}
                </v-alert>
            </v-card>

            <v-layout column justify-center align-center class="mt-4">
                <span class="text">Ainda não possui acesso?</span>

                <v-btn flat small color="primary" class="link" :to="{name: 'SignUp'}">
                    <span class="text">Faça seu cadastro</span>
                </v-btn>
            </v-layout>

            <reset-password @sentInstructions="sentInstructions($event)" :dialog.sync="resetPassword"></reset-password>
        </template>

    </authentication-layout>
</template>

<script>
  import AuthenticationLayout from '@/layouts/AuthenticationLayout';
  import ResetPassword from '@/components/authentication/ResetPassword';
  import AuthService from '@/services/AuthService'

  export default {
    components: {
      AuthenticationLayout,
      ResetPassword,
      AuthService
    },
    data() {
      return {
        cpf: '',
        password: '',
        loginFailedMessage: '',
        loginFailed: '',
        show: false,
        resetPassword: false,
      }
    },
    methods: {
      login(){
        this.$store.dispatch('setLoadingDialog', true);
        AuthService.login(this.cpf,this.password)
            .then(() => {
              this.loginFailed = false
              this.$router.push({name:'Home'});
            })
            .catch((error) => {
              this.loginFailed = true
              if(error.response.status===401){
                this.loginFailedMessage = 'CPF e/ou Senha inválidos';
              }
            })
            .finally(() => {
              this.$store.dispatch('setLoadingDialog', false);
            });
      },
      sentInstructions(bool) {
        if (bool) {
          this.$store.dispatch('setSnackBar', {
            text: 'Instruções enviadas por e-mail!',
            color: 'success'
          });
        }
        else {
          this.$store.dispatch('setSnackBar', {
            text: 'Não foi possível enviar instruções a esse e-mail!',
            color: 'error'
          });
        }
      }
    },

  }
</script>
