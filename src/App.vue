<template>
  <v-app>
    <AppBar />
    <v-container fluid>
      <router-view />
    </v-container>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue';

import AppBar from '@/components/common/AppBar.vue';

export default Vue.extend({
  components: {
    AppBar,
  },
});
</script>
