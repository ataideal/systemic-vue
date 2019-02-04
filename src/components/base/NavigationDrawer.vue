<template>
    <v-navigation-drawer
            app
            dark
            floating
            persistent
            width="260"
    >
                <v-list>
                    <v-list-tile class="my-4">

                            <v-img
                                    src="http://systemic.com.br/wp-content/themes/systemic/assets/images/layout/logo-systemic.png"
                                    width="100px"
                                    contain
                            />
                    </v-list-tile>
                    <v-divider class="mb-3"/>
                    <v-list-tile
                            v-for="(link, i) in links"
                            :key="i"
                            :to="{name: link.to}"
                            active-class="rosa"
                            class="mx-3"
                    >
                        <v-list-tile-action>
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title
                                v-text="link.text"
                        />
                    </v-list-tile>
                    <v-list-tile
                            :to="{name: 'Login'}"
                            active-class="rosa"
                            class="mx-3"
                    >
                        <v-list-tile-action>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>
                            Logout
                        </v-list-tile-title>
                    </v-list-tile>

                </v-list>
    </v-navigation-drawer>
</template>
<script>
  export default {
    data: () => ({
      selected: {to: '/dashboard',
                 icon: 'mdi-view-dashboard',
                 text: 'Dashboard'},

      links: [
        {
          to: 'DashBoard',
          icon: 'mdi-view-dashboard',
          text: 'Dashboard'
        },
        {
          to: 'Users',
          icon: 'mdi-account',
          text: 'Usuários'
        },
        {
          to: 'Canvas',
          icon: 'mdi-clipboard-outline',
          text: 'Canvas'
        },
      ],
    }),
    computed: {

    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style>
    .v-list__tile {
        border-radius: 10px;
    }
</style>