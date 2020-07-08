<template>
    <v-app-bar
      app
      color="white"
      class="mt-5"
      elevation = 0
      hide-on-scroll
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

        <v-btn class="ma-2" text>Features</v-btn>
        <v-btn class="ma-2" text>Docs</v-btn>
        <v-btn class="ma-2" text>Testimonial</v-btn>
        <Register/>
        <v-btn class="ma-2" outlined large color="rgb(44, 75, 255)">Login</v-btn>
    </v-app-bar>
</template>

<script>
import Register from './Register';
export default {
    name: 'NavBar',
    components:{
      Register
    }
}
</script>