<template>
  <v-row justify="center">
    <v-col cols="10">
      <EditPerson :personName="person" />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import EditPerson from '@/components/EditPerson.vue';

@Component({
  name: 'Edit',
  components: {
    EditPerson,
  },
})
export default class Edit extends Vue {
  get person(): string {
    return this.$route.params.person;
  }
}
</script>
