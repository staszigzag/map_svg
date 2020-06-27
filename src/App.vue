<template>
  <v-app >
    <!-- <Header /> -->
    <v-main class="content">
      <v-container  class="container">
        <v-card class="mt-10 main">
          <!-- <mapa-navigation /> -->
          <router-view ></router-view>
        </v-card>
      </v-container>
    </v-main>
    <!-- <mapa-notifications /> -->
    <!-- <Footer /> -->
  </v-app>
</template>

<script>

// import MapaNavigation from './components/MapaNavigation'
// import MapaNotifications from './components/MapaNotifications'
// import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    // MapaNavigation,
    // MapaNotifications
  },
  created() {
    // this.getServices()
  },
  methods: {
    // загрузка данных для всех страниц
    // ...mapActions('servicesModule', ['getServices'])
  }
}
</script>
<style>
.main{
  background-image: url('/img/22.jpg');
  background-repeat: repeat;
}
  .content {
    background-color: #D8E6E7 ;
  }
  /* .container{
    min-width: 1500px !important;
    max-width: 1500px !important;
  } */
</style>
