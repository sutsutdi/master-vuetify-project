<template>
   <v-navigation-drawer expand-on-hover rail>
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-folder"
              title="Home"
              value="home"
              v-on:click="router.push('/')"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-account-multiple"
              title="NCD Clinic"
              value="clinic"
              v-on:click="router.push('/ncd')"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-star"
              title="Telemedicine"
              value="telemedicine"
              v-on:click="router.push('/telemed')"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-star"
              title="Provider"
              value="provider"
              v-on:click="router.push('/provider')"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
</template>

<script setup lang="ts">
 import { useRouter } from 'vue-router';
 const router = useRouter()
</script>
