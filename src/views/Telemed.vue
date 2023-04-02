<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    "
  >
    <!-- <v-card class="mx-auto" max-width="344"> -->
    <v-card
      :loading="isUpdating"
      color="blue-grey-darken-4"
      class="mx-auto"
      max-width="420"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="green-lighten-3"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        cover
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
      >
        <v-row class="pa-3">
          <v-col cols="12">
            <v-menu
              location="bottom start"
              origin="overlap"
              transition="slide-y-transition"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  icon="mdi-dots-vertical"
                  density="comfortable"
                  variant="tonal"
                ></v-btn>
              </template>

              <v-list :lines="false">
                <v-list-item
                  title="Update"
                  @click="isUpdating = true"
                ></v-list-item>
              </v-list>
            </v-menu>
          </v-col>

          <v-row>
            <v-col class="text-center">
              <!-- <h3 class="text-h5">{{ name }}</h3> -->
              <h3 class="text-h5">{{ friends[0] }}</h3>

              <span class="text-grey-darken-3">{{ title }}</span>
            </v-col>
          </v-row>
        </v-row>
      </v-img>

      <v-form>
        <v-container>
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="name"
                :disabled="isUpdating"
                color="blue-grey-lighten-2"
                label="Name"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="title"
                :disabled="isUpdating"
                color="blue-grey-lighten-2"
                label="Title"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-autocomplete
                v-model="friends"
                :disabled="isUpdating"
                :items="people"
                chips
                closable-chips
                color="blue-grey-lighten-2"
                item-title="name"
                item-value="name"
                label="Select"
                multiple
              >
                <template v-slot:chip="{ props, item }">
                  <v-chip
                    v-bind="props"
                    :prepend-avatar="item.raw.avatar"
                    :text="item.raw.name"
                  ></v-chip>
                </template>

                <template v-slot:item="{ props, item }">
                  <v-list-item
                    v-bind="props"
                    :prepend-avatar="item?.raw?.avatar"
                    :title="item?.raw?.name"
                    :subtitle="item?.raw?.group"
                  ></v-list-item>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-divider></v-divider>


    </v-card>



    <v-card
      :loading="isUpdating"
      color="blue-grey-darken-1"
      class="mx-auto"
      max-width="420"
    >
      <iframe :src="teleVideo" height="460" width="420" allow=" geolocation ; microphone; camera"> </iframe>
      <v-card class="d-flex pa-3 bg-grey-darken-4">
        <v-switch
          v-model="autoUpdate"
          :disabled="isUpdating"
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const srcs = ref({
  1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
});

const autoUpdate = ref(false);
const friends = ref(["Sandra Adams", "Britta Holt"]);
const isUpdating = ref(false);
const name = ref("Midnight Crew");
const people = ref([
  { header: "Group 1" },
  { name: "Sandra Adams", group: "Group 1", avatar: srcs.value[1] },
  { name: "Ali Connors", group: "Group 1", avatar: srcs.value[2] },
  { name: "Trevor Hansen", group: "Group 1", avatar: srcs.value[3] },
  { name: "Tucker Smith", group: "Group 1", avatar: srcs.value[2] },
  { divider: true },
  { header: "Group 2" },
  { name: "Britta Holt", group: "Group 2", avatar: srcs.value[4] },
  { name: "Jane Smith ", group: "Group 2", avatar: srcs.value[5] },
  { name: "John Smith", group: "Group 2", avatar: srcs.value[1] },
  { name: "Sandra Williams", group: "Group 2", avatar: srcs.value[3] },
]);
const title = ref("The summer breeze");
const timeout = ref<any>(null);

function isUpdate(val: any) {
  clearTimeout(timeout.value);

  if (val) {
    timeout.value = setTimeout(() => (isUpdating.value = false), 3000);
  }
}

const remove = (item: any) => {
  const index = friends.value.indexOf(item.name);
  if (index >= 0) friends.value.splice(index, 1);
};

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
      Authorization:
        `Bearer ${token}`,
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
