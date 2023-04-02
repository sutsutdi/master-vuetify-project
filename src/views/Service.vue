<template>
  <div style="justify-content: center; align-items: center" class="pt-5">
    <!-- <v-container> -->
    <v-row class="d-flex">
      <v-col cols="8" class="px-10">
        <p>
          ชื่อ {{ personService.fname }} {{ personService.lname }} pid :
          {{ personService.pid }} Id : {{ cid }}
        </p>
        <v-btn  href="http://203.114.123.212/opdcard2020/main_dev.php" prepend-icon="mdi-cloud-upload" target="_blank" color="primary" elevation="2">ประวัติเก่า</v-btn>
        
        <div class="d-inline-flex mt-3">
          <v-text-field
            v-model="healthRecord.bw"
            :rules="rules"
            color="primary"
            label="Bw"
            variant="outlined"
            tabindex="3"
            width="100px"
            class="text-blue-accent-4 w-50 mx-3 my-2"
          ></v-text-field>

          <v-text-field
            v-model="healthRecord.temp"
            :rules="rules"
            color="primary"
            label="Temp"
            variant="outlined"
            tabindex="3"
            class="text-blue-accent-4 w-50 mx-3 my-2"
          ></v-text-field>
          <v-text-field
            v-model="healthRecord.bp"
            :rules="rules"
            color="primary"
            label="BP"
            variant="outlined"
            tabindex="2"
            class="text-blue-accent-4 w-75 mx-3 my-2"
          ></v-text-field>
          <v-text-field
            v-model="healthRecord.pulse"
            :rules="rules"
            color="primary"
            label="Pulse"
            variant="outlined"
            tabindex="2"
            class="text-amber-darken-4 w-50 mx-3 my-2"
          ></v-text-field>
          <v-text-field
            v-model="healthRecord.fbs"
            :rules="rules"
            color="primary"
            label="FBS"
            variant="outlined"
            tabindex="2"
            class="text-amber-darken-4 w-50 mx-3 my-2"
          ></v-text-field>
          
        </div>

        <div class="d-flex">
          <v-card width="800px " class="px-5 py-3">
            <v-toolbar color="transparent" class="px-0">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>

              <v-toolbar-title>Health Profile</v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon color="primary">mdi-magnify</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>

              <template v-slot:extension>
                <v-tabs v-model="tabs" color="primary" grow>
                  <v-tab :value="1">
                    <v-icon color="primary">mdi-clipboard-pulse</v-icon>
                  </v-tab>

                  <v-tab :value="2">
                    <v-icon color="error">mdi-medical-cotton-swab</v-icon>
                  </v-tab>

                  <v-tab :value="3">
                    <v-icon class="text-amber-accent-4">mdi-pill</v-icon>
                  </v-tab>
                </v-tabs>
              </template>
            </v-toolbar>

            <v-window v-model="tabs">
              <v-window-item v-for="(item, index) in tabLabel" :key="index">
                <v-card style="padding: 5px">
                  <v-textarea
                    v-model="item.input"
                    clearable
                    :label="item.label"
                    variant="outlined"
                    class="text-black"
                  ></v-textarea>
                  <p style="font-size: 14px">
                    {{ item.input }}
                  </p>
                </v-card>
              </v-window-item>
            </v-window>
          </v-card>
        </div>
        <!-- <v-btn type="submit" block class="mt-2">Submit</v-btn> -->
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
