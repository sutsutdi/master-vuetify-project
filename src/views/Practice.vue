<template>
  <div style="justify-content: center; align-items: center" class="pt-3">
    <!-- <v-container> -->
    <v-row class="d-flex">
      <v-col cols="8" >
      <v-img src="@/assets/image/telemed.png"></v-img>
      </v-col>

      <v-col cols="4" height="80%">
        <v-card color="blue-grey-darken-4" class="" max-width="420">
          <iframe
            :src="teleVideo"
            height="460"
            width="420"
            allow=" geolocation ; microphone; camera"
          >
          </iframe>
          <v-card class="d-flex pa-3 bg-grey-darken-4">
            <v-switch
              v-model="autoUpdate"
              class="mt-0 ms-2"
              color="red-lighten-2"
              density="compact"
              hide-details
              inset
              label="Video Call"
            ></v-switch>

            <v-spacer></v-spacer>

            <v-btn
              :disabled="!autoUpdate"
              color="primary"
              prepend-icon="mdi-update"
              @click="getToken"
            >
              Video Call
            </v-btn>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <!-- </v-container> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { person } from "@/store/person";
import axios from "axios";

// import ServInput from "@/components/Service/ServInput.vue";
// import ServInput2 from "@/components/Service/ServInput2.vue";

const cid = ref<string>("3749900428607");
const autoUpdate = ref(false);
const tabs = ref(null);
const personService = person;

const rules = ref([
  (value: string) => {
    if (value) return true;

    return "You must enter a first name.";
  },
]);

const healthRecord = ref({
  bw: 50.2,
  bp: "130/70",
  pulse: 87,
  fbs: 110,
  temp: 37.2,
});

const tabLabel = ref([
  { label: '', input: '', text: '' },
  { label: "Health Record", input: '', text: 'past history hx PE' },
  { label: "Diagnosis", input: '', text: 'DM type 2 with HT' },
  { label:"Medication",input:'',text:'metformin 1x3pc # 20 tabs'}]);

const teleVideo = ref("");

const getToken = async () => {
  const result = await axios(
    "https://mophvc.moph.go.th/mophvc/Token/CreateMophToken?UserID=10954@MophTelemed&Password=uMO0J/UAJp2SPZHfMf97muELjXem8/"
  );
  const token = result.data;
  console.log(token);

  let data = JSON.stringify({
    pid: "3749900428607",
  });

  let config = {
    method: "post",
    url: "https://mophvc.moph.go.th/mophvc/Msg/CallTelemed",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Cookie: "__cfruid=6f3d6623f9830228a77e2758ebb53b0d65337126-1675424710",
    },
    data: data,
  };

  await axios(config)
    .then(function (response: any) {
      console.log(JSON.stringify(response.data));
      teleVideo.value = response.data.data;
      console.log(teleVideo.value);
      // window.location.assign(teleVideo.value);
    })
    .catch(function (error: any) {
      console.log(error);
    });
};
</script>

<style scoped></style>
