<template>
    <v-layout justify-center>
        <span class="mx-2 filter-text" :class="[(filter === 'all' && 'ativo')]" @click="filter = 'all'">Todos </span>
        <span class="mx-2 filter-text" :class="[(filter === 'Aluno' && 'ativo')]" @click="filter = 'Aluno'">Aluno</span>
        <span class="mx-2 filter-text" :class="[(filter === 'Professor' && 'ativo')]" @click="filter = 'Professor'">Professor</span>
        <span class="mx-2 filter-text" :class="[(filter === 'Gerente' && 'ativo')]" @click="filter = 'Gerente'">Gerente</span>
        <span class="mx-2 filter-text" :class="[(filter === 'Admin' && 'ativo')]" @click="filter = 'Admin'">Admin</span>
    </v-layout>
</template>

<script>
  export default {
    name:'filter-users',
    data () {
      return {
        filter: 'all'
      }
    },
    watch:{
      filter(value){
        this.$emit('filter',value)
      }
    }
  }
</script>

<style>
    .filter-text{
        cursor: pointer;
    }
    .ativo{
        font-weight: bold;
    }
</style>