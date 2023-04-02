<template>
  <v-app style="font-family: Prompt; ">
    <v-card>
      <v-layout>
        <DefaultBar />
        <DefaultDrawer />
        <DefaultView />
        <!-- <DefaultFooter/> -->

      </v-layout>
    </v-card>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import DefaultDrawer from "./Drawer.vue";
// import DefaultFooter from "./Footer.vue";

</script>

