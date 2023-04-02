<template>
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

            <span class="text-grey-darken-4">{{ title }}</span>
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
              color="blue-grey-darken-4"
              label="Name"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="title"
              :disabled="isUpdating"
              color="blue-grey-darken-4"
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
              color="blue-grey-darken-1"
              item-title="name"
              item-value="name"
              label="Select"
              multiple
            >
              <template v-slot:chip="{ props, item }">
                <v-chip
                  v-bind="props"
                  class="ma-2"
                  closable
                  color="blue-gray-darken-4"
                  text-color="white"
                  close-icon="mdi-delete"
                 
                  :model-value="true"
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

    <v-card-actions>
      <v-switch
        v-model="autoUpdate"
        :disabled="isUpdating"
        class="mt-0 ms-2"
        color="green-lighten-2"
        density="compact"
        hide-details
        label="Auto Update"
      ></v-switch>

      <v-spacer></v-spacer>

      <v-btn
        :disabled="autoUpdate"
        :loading="isUpdating"
        :variant="isUpdating ? 'tonal' : undefined"
        color="blue-grey-lighten-2"
        prepend-icon="mdi-update"
        @click="isUpdating = true"
      >
        Update Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const srcs = ref({
  1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
});

const autoUpdate = ref(true);
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

function isUpdateing(val: any) {
  clearTimeout(timeout.value);

  if (val) {
    timeout.value = setTimeout(() => (isUpdating.value = false), 3000);
  }
}

const remove = (item: any) => {
  const index = friends.value.indexOf(item.name);
  if (index >= 0) friends.value.splice(index, 1);
};
</script>
