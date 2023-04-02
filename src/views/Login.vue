<template>
  <div style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">
    <!-- <v-card class="mx-auto" max-width="344"> -->
    <v-card width="344">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
      ></v-img>

      <v-card-title> NCD Clinic Login </v-card-title>

      <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      <FormLogin/>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          outline
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import FormLogin from '@/components/FormLogin.vue';

const show = ref(false);

</script>
