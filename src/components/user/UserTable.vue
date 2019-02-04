<template>
    <v-layout column align-center class="table">
        <v-layout d-flex row align-center justify-center class="table my-3">
            <v-flex md2>
                <h1 class="primary--text">Usuários</h1>
            </v-flex>
            <v-flex align-center justify-end>
                <filter-users @filter="filter = $event"/>
            </v-flex>
            <v-flex md4>
                <v-text-field
                        v-model="search"
                        class="ma-0 pa-0"
                        append-icon="mdi-magnify"
                        label="Buscar"
                        single-line
                        hide-details
                />
            </v-flex>
            <v-flex md1>
                <v-dialog v-model="dialog" max-width="500px">
                    <v-btn slot="activator" color="primary" dark class="mb-2">Novo</v-btn>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex md6>
                                        <v-text-field v-model="editedItem.name" label="Nome"></v-text-field>
                                    </v-flex>
                                    <v-flex md6>
                                        <v-text-field v-model="editedItem.cpf" label="CPF" mask="###.###.###-##"></v-text-field>
                                    </v-flex>
                                    <v-flex md8>
                                        <v-text-field v-model="editedItem.email" label="E-mail"></v-text-field>
                                    </v-flex>
                                    <v-flex md4>
                                        <v-select v-model="editedItem.role" label="Tipo" :items="types"></v-select>
                                    </v-flex>
                                    <v-flex md6>
                                        <v-text-field v-model="editedItem.password" label="Password" type="password"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>
        <v-card class="table">
            <v-data-table
                    :headers="headers"
                    :items="filteredUsers"
                    :search="search"
                    :loading="isLoading"
                    :custom-filter="customFilter"
                    :rows-per-page-items="rowPerPageText"
                    rows-per-page-text="Participantes por página:"
                    no-data-text="Sem participantes"
                    class="table"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name}}</td>
                    <td>{{ props.item.cpf }}</td>
                    <td>{{ props.item.email }}</td>
                    <td>{{ props.item.role}}</td>
                    <td class="justify-center layout px-0">
                        <v-icon
                                small
                                class="mr-2"
                                @click="editItem(props.item)"
                        >
                            mdi-pen
                        </v-icon>
                        <v-icon
                                small
                                @click="deleteItem(props.item)"
                        >
                            mdi-delete
                        </v-icon>
                    </td>

                </template>
                <template slot="pageText" slot-scope="props">
                    {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="mdi-alert-circle">
                    Sua busca por "{{ search }}" não encontrou resultados em "Nome", "Empresa", "Cargo".
                </v-alert>
            </v-data-table>
        </v-card>
    </v-layout>
</template>

<script>
  import FilterUsers from '@/components/user/FilterUsers'

  export default {
    name:'user-table',
    props:['users'],
    components:{
      FilterUsers,
    },
    data () {
      return {
        // users:[],
        isLoading: false,
        search: '',
        filter: 'all',
        rowPerPageText: [10,25,{"text":"Todos","value":-1}],
        headers: [
          {
            text: 'Nome',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'CPF', value: 'cpf' },
          { text: 'E-mail', value: 'email' },
          { text: 'Tipo', value: 'role' },
          { text: 'Ações', value: 'actions', sortable: false, align: 'center' }
        ],
        types:[
          'Aluno', 'Professor', 'Gerente', 'Admin'
        ],
        editedIndex: -1,
        dialog: false,
        editedItem: {
          id: -1,
          name: '',
          cpf: '',
          email: '',
          role: '',
          password: '',
        },
        defaultItem: {
          id: -1,
          name: '',
          cpf: '',
          email: '',
          role: '',
          password: '',
        }
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    methods: {
      customFilter(items, queryText) {
        const searchText = queryText.toLowerCase();
        return items.filter(item => {
          return item.name.toLowerCase().indexOf(searchText) > -1
              || item.cpf.toLowerCase().indexOf(searchText) > -1
              || item.email.toLowerCase().indexOf(searchText) > -1
        });
      },
      editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        confirm('Você tem certeza??') && this.$store.dispatch('deleteUser',item)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        this.$store.dispatch('setLoadingDialog', true);
        if (this.editedIndex > -1) {
          this.$store.dispatch('updateUser',this.editedItem)
            .finally(()=>{
              this.$store.dispatch('setLoadingDialog', false);
            })
        } else {
          this.$store.dispatch('newUser',this.editedItem)
            .finally(()=>{
              this.$store.dispatch('setLoadingDialog', false);
            })
        }
        this.close()
      }
    },
    computed: {
      filteredUsers(){
        return this.users.filter( e => {
          if (this.filter ==='all')
            return true
          else if (this.filter === e.role)
            return true
          else
            return false
        });
      },
      formTitle () {
        return this.editedIndex === -1 ? 'Novo usuário' : 'Editar usuário'
      }
    },
  }
</script>

<style lang="scss">
    .table{
        width: 100%;
    }
    .title-border{
        border-bottom: solid thin #9B9B9B;
        background-color: #EBEBEB;
    }

    .text-edit-inline {
        .v-menu__activator {
            > a {
                width: 100%;
            }
        }
    }
</style>