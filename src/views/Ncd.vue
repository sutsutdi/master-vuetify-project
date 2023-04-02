<template>
  <div
    style="display: flex; justify-content: center; align-items: center"
    class="pt-5"
  >
    <v-card width="344">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        cover
      ></v-img>

      <v-card-title class="text-blue-accent-4"> NCD Clinic </v-card-title>

      <v-card-subtitle> </v-card-subtitle>
      <v-sheet width="300" class="mx-auto">
        <v-form validate-on="submit" @submit.prevent="submit">
          <v-text-field v-model="id" label="Pid" variant="outlined" color="primary"></v-text-field>
          <v-btn type="submit" block class="mt-2" color="primary">Submit</v-btn>
        </v-form>
      </v-sheet>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { person } from "@/store/person";

const router = useRouter();

const id = ref("");

const fecthData = async () => {
  const url = `http://localhost:8085/person/${id.value}`;
  const response = await axios(url);

  if (response.data[0]) {
    console.log(response.data[0]);
    console.log(response.data[0].idcard);

    person.cid = response.data[0].idcard;
    person.pid = response.data[0].pid;
    person.prefix = response.data[0].prefix;
    person.fname = response.data[0].fname;
    person.lname = response.data[0].lname;
    person.brthdate = response.data[0].brthdate;
    person.age = person.rightname = response.data[0].rightname;
    person.hno = response.data[0].hnomoi;
    person.moo = response.data[0].mumoi;
    person.subdist = response.data[0].subdistname;
    person.dist = response.data[0].distname;
    person.prov = response.data[0].provname;
    person.rightname = response.data[0].rightname;

    const personBrthdate = new Date(person.brthdate);
    const d = new Date();
    const year = d.getFullYear();
    const brthYear = personBrthdate.getFullYear();
    person.age = year - brthYear;

    router.push("/person");
  } else {
    alert(" Data Not found() ");
  }
};

// fecthData(id.value);

const submit = async () => {
  fecthData();
};
</script>
