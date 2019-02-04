<template>
    <authentication-layout>
        <header slot="form-header" class="header">
            <h2 class="title">Faça seu cadastro no portal Systemic e tenha acesso um conteúdo incrível.</h2>
        </header>

        <template slot="form-content">
            <v-card elevation="0" class="mt-2">
                <v-form v-model="valid">
                    <v-text-field
                            v-model="cpf"
                            label="CPF"
                            mask="###.###.###-##"
                            :rules="[validationRules.required, validationRules.cpf]"
                            type="text"
                    />

                    <v-text-field
                            name="fullname"
                            v-model="fullName"
                            label="Nome Completo"
                            :rules="[validationRules.required]"
                            type="text"
                    />

                    <v-text-field
                            v-model="email"
                            label="E-mail"
                            :rules="[validationRules.required, validationRules.email]"
                            type="email"
                    />

                    <v-text-field
                            v-model="cellphone"
                            label="Telefone"
                            :rules="[validationRules.required]"
                            type="text"
                            mask="(##) #####-####"
                    />

                    <v-text-field
                            v-model="password"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="(show = !show)"
                            :type="show ? 'password' : 'text'"
                            :rules="[validationRules.required]"
                            name="password"
                            label="Senha"
                            hint="Mínimo de 8 caracteres"
                            min="8"
                    />

                    <v-layout justify-start>
                        <v-checkbox
                                v-model="agreed"
                                required
                                :rules="[(v) => v || 'Este campo é obrigatório']"
                                :error-messages="[]"
                                class="mb-2"
                        >
                            <div slot="label">
                                Eu li e aceito os &nbsp;
                                <strong
                                        style="margin-left: -6px"
                                        class="blue--text"
                                >
                                    termos legais
                                </strong>
                            </div>
                        </v-checkbox>
                    </v-layout>
                </v-form>

                <v-card-actions class="action">
                    <v-btn
                            id="buttonsub"
                            color="primary"
                            :disabled="!valid"
                            @click="createUser"
                    >
                        Registrar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </template>

        <template slot="navigation">
            <v-btn flat small color="primary" class="link" :to="{name:'Login'}">
                <v-icon left>mdi-account-circle</v-icon>
                <span class="text">Voltar ao login</span>
            </v-btn>
        </template>
    </authentication-layout>
</template>


<script>
  import AuthenticationLayout from '@/layouts/AuthenticationLayout';
  import validationRules from '@/mixins/validation-rules';

  export default {
    name: 'FormSignup',
    components: {
      AuthenticationLayout,
    },
    mixins: [validationRules],
    data: () => ({
      show: true,
      agreed: false,
      cellphone: '',
      cpf: '',
      fullName: '',
      email: '',
      isLegalTermsVisible: false,
      password: '',
      valid: false,
      validationRules,
    }),
    methods: {
      onCaptchaVerified(recaptchaToken) {
        const userParams = {
          name: this.fullName,
          cpf: this.cpfcnpj,
          cellphone: this.cellphone,
          email: this.email,
          password: this.password,
          recaptcha: recaptchaToken,
        };
        UserService
            .createUser(userParams)
            .then(() => {
              this.$store.dispatch('setUserSignUpData', userParams);
              this.$router.push('cadastrar/sucesso');
            })
            .catch((responseError) => {
              this.$swal({
                type: 'error',
                title: 'Erro',
                html: responseError.response.data.join('<br/>'),
              });
            })
            .finally(() => {
              this.$store.dispatch('setLoadingDialog', false);
              this.$refs.recaptcha.reset();
            });
      },
      onCaptchaExpired() {
        this.$refs.recaptcha.reset();
        this.$store.dispatch('setLoadingDialog', false);
      },
      createUser() {
        this.$store.dispatch('setLoadingDialog', true);
        this.$refs.recaptcha.execute();
      },
    },
  };
</script>
