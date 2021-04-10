<template>
  <div>
    <v-row class="base-color">
      <p class="font-weight-medium subtitle-1">
        {{ message }}
      </p>
    </v-row>
    <v-row class="mt-1 justify-center">
      <v-btn color="#ffe81f" depressed @click="onClick()">
        Spróbuj ponownie
      </v-btn>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
  name: 'ErrorHandler',
})
export default class ErrorHandler extends Vue {
  @Prop() message!: string;

  onClick(): void {
    this.$emit('tryAgain');
  }
}
</script>
