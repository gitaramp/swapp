<template>
  <div></div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { Person } from '@/types/person';

@Component({
  name: 'Persons',
})
export default class Persons extends Vue {}
</script>
