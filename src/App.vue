<template>
  <Persons />
</template>

<script lang="ts">
import Vue from 'vue';

import Persons from '@/components/Persons.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Persons,
  },
});
</script>
