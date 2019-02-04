<template>
    <v-container class="grey lighten-4 fill">
        <h1 class="primary--text mb-4 ml-2">DashBoard</h1>
        <v-layout wrap justify-start align-top >
            <v-flex xs4 v-for="i in 3" class="px-2">
                <v-card
                        elevation="3"
                        class="border-round"

                >
                    <chartist
                            ratio="ct-major-second"
                            :type="chartType[i-1]"
                            :data="chartData[i-1]"
                            :options="chartOptions[i-1]" >
                    </chartist>
                    <v-card-title>
                        <div>
                            <div class="headline">{{chartText[i-1]}}</div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout align-center>
            <task-list class="white ma-2 elevation-3"></task-list>
            <v-layout wrap class="ma-2">
                <v-flex xs6 v-for="i in 4" class="px-2 my-2">
                    <v-card height="180" class="px-2 border-round" elevation="3">
                        <v-layout align-end justify-space-between>
                            <v-icon
                                    :color="cardsIconColor[i-1]"
                                    size="86"
                            >
                                {{cardsIcon[i-1]}}
                            </v-icon>
                            <v-layout justify-end>
                                <h2>{{cardsTitle[i-1]}}</h2>
                            </v-layout>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-card-title>
                            <div>
                                <div class="headline">{{cardsHeadLine[i-1]}}</div>
                                <div class="sub-title">{{cardsSubTitle[i-1]}}</div>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
  import TaskList from '@/components/TaskList'
  export default {
    components:{
      TaskList
    },
    name: 'DashBoard',
    data () {
      return {
        chartType: [
            'Line',
            'Bar',
            'Pie',
        ],
        chartData: [
          {
            labels: ["Jan", "Fev", "Mar", "Abr","Mai", "Jun"],
            series:[[100, 120, 145, 130, 190, 160]]
          },
          {
            labels: ["Básico", "Intermediário", "Avançado"],
            series:[[90, 45, 80], [9, 12, 20]]
          },
          {
            labels: ["Básico", "Intermediário", "Avançado"],
            series: [5, 3, 4]
          }
        ],
        chartOptions: [
          {
            lineSmooth: true
          },
          {
            lineSmooth: true
          },
          {
            lineSmooth: true
          },
        ],
        chartText:[
            'Alunos por mês',
            'Aprovados/Reprovados',
            'Turmas',
        ],
        cardsTitle:[
            'Faturamento',
            'Salas',
            'Novos alunos',
            'Hashtags twitter',
        ],
        cardsIcon:[
            'mdi-cash-usd',
            'mdi-home-alert',
            'mdi-account',
            'mdi-twitter'
        ],
        cardsIconColor:[
            'success',
            'warning',
            'error',
            'blue'
        ],
        cardsHeadLine:[
            'R$ 12.934,00',
            '12/15',
            '75',
            '+245'
        ],
        cardsSubTitle:[
            'Ultimos 7 dias',
            'Em uso',
            'Janeiro/2019',
            'Hoje'
        ]

      }
    }
  }
</script>

<style>
    .fill{
        height: 100%;
    }
    .border-round{
        border-radius: 16px;
    }

</style>