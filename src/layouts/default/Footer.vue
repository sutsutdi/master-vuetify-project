<template>
  <v-app-bar class="d-flex flex-column " location="bottom">
    <div class="bg-black d-flex w-100 align-center px-4">
      <div class="text-subtitle-1">Get connected with us on social networks!</div>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <!-- <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div> -->
  </v-app-bar>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const  icons = ref([
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ])


</script>
