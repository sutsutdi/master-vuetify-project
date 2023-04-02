<template>
  <div style="display: flex; justify-content: center ; align-items: center;" class="pt-5">
    <v-card width="344">
      <v-img
        src="https://media.istockphoto.com/id/1377926786/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B8%A7%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B8%81%E0%B9%8D%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%8A%E0%B9%89%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=qo4FBxz28WBD4bc_bhxFMMsvV7cWR6te1s_EluQTDWw="
        height="200px"
        cover
      ></v-img>

      <v-card-title> cid: {{ person.cid }} </v-card-title>

      <v-card-subtitle>PID : {{ person.pid }}  </v-card-subtitle>
      <div class="pa-3">
        <p>{{ person.prefix }}. {{ person.fname }} {{ person.lname }}</p>
        <p>
          {{ person.hno }} ม.{{ person.moo }} ต.{{ person.subdist }} อ.{{
            person.dist
          }}
        </p>
        <p>{{ person.prov }}</p>
        <p>สิทธิ : {{ person.rightname }}</p>
        <p>{{ person.brthdate  }} age {{ person.age }} ปี</p>
      </div>
      <div class="d-flex pa-5">
        <v-btn color="primary" @click = "router.push('/service')"> Registration </v-btn>
        <v-spacer></v-spacer>

        <v-btn icon color="pink" v-on:click="resetPerson">
          <v-icon>mdi-home-circle</v-icon>
        </v-btn>
      </div>

      <!-- <v-card-actions>

      </v-card-actions> -->
    </v-card>
  </div>
</template>

<script setup lang="ts">

import { person } from "@/store/person";
import { useRouter } from "vue-router";
const router = useRouter();

const resetPerson = ()=>{
  person.cid = ""
  person.pid = ""
  person.prefix =""
  person.fname = ""
  person.lname = ""
  person.brthdate = ""
  person.age = 0
  person.hno = ""
  person.moo = ""
  person.subdist = ""
  person.dist = ""
  person.prov = ""
  person.rightname = ""

  console.log(person);

  router.push('/ncd')
}
</script>
