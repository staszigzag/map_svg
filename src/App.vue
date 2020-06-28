<template>
  <v-app >
    <v-main class="content">
      <v-container  class="container">
        <v-card class="mt-3 main">
          <router-view ></router-view>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style>
  .main{
    background-image: url('/img/cells.jpg');
    background-repeat: repeat;
  }
  .content {
    background-color: #F5F5F5;
  }
</style>
