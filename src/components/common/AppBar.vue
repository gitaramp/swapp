<template>
  <v-card>
    <v-app-bar dense>
      <v-app-bar-title>
        <img
          src="../../assets/images/logo.svg"
          class="d-flex align-center"
        />
      </v-app-bar-title>
      <nav class="ml-15">
        <router-link class="app-bar-link" :to="{ name: 'Home' }">
          Home
        </router-link>
        <a
          class="ml-4 app-bar-link"
          href="https://github.com/gitaramp/swapp"
          target="_blank"
          >Github</a
        >
      </nav>
    </v-app-bar>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'AppBar',
})
export default class AppBar extends Vue {}
</script>
