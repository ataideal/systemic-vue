<template>
    <v-container style="max-width: 500px" class="border-round">
        <v-text-field
                v-model="task"
                label="No que você está trabalhando?"
                solo
                @keydown.enter="create"
        >
            <v-fade-transition slot="append">
                <v-icon
                        v-if="task"
                        @click="create"
                >
                    mdi-plus-circle
                </v-icon>
            </v-fade-transition>
        </v-text-field>

        <h2 class="display-1 success--text pl-3">
            Tasks:&nbsp;
            <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
            </v-fade-transition>
        </h2>

        <v-divider class="mt-3"></v-divider>

        <v-layout
                my-1
                align-center
        >
            <strong class="mx-3 info--text text--darken-3">
                Restantes: {{ remainingTasks }}
            </strong>

            <v-divider vertical></v-divider>

            <strong class="mx-3 black--text">
                Completadas: {{ completedTasks }}
            </strong>

            <v-spacer></v-spacer>

            <v-progress-circular
                    :value="progress"
                    class="mr-2"
            ></v-progress-circular>
        </v-layout>

        <v-divider class="mb-3"></v-divider>

        <v-card v-if="tasks.length > 0">
            <v-slide-y-transition
                    class="py-0"
                    group
            >
                <template v-for="(task, i) in tasks">
                    <v-divider
                            v-if="i !== 0"
                            :key="`${i}-divider`"
                    ></v-divider>
                    <v-list-tile :key="`${i}-${task.text}`">
                        <v-list-tile-action>
                            <v-checkbox
                                    v-model="task.done"
                                    color="info darken-3"
                            >
                                <div
                                        slot="label"
                                        :class="task.done && 'grey--text' || 'text--primary'"
                                        class="ml-3"
                                        v-text="task.text"
                                ></div>
                            </v-checkbox>
                        </v-list-tile-action>

                        <v-spacer></v-spacer>

                        <v-scroll-x-transition>
                            <v-icon
                                    v-if="task.done"
                                    color="success"
                            >
                                mdi-check
                            </v-icon>
                        </v-scroll-x-transition>
                    </v-list-tile>
                </template>
            </v-slide-y-transition>
        </v-card>
    </v-container>
</template>

<script>
  export default {
    name: 'TaskList',
    data: () => ({
      tasks: [
        {
          done: true,
          text: 'Login'
        },
        {
          done: true,
          text: 'DashBoard'
        },
        {
          done: false,
          text: 'Usuários'
        },
        {
          done: false,
          text: 'Canvas'
        },
        {
          done: false,
          text: 'Websocket'
        }
      ],
      task: null
    }),

    computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      }
    },

    methods: {
      create () {
        this.tasks.push({
          done: false,
          text: this.task
        })

        this.task = null
      }
    }
  }
</script>

<style scoped>

</style>