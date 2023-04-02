<template>
  <div class="mb-3">

    <label
      for="exampleFormControlInput1"
      style="font-size: "
      class="ma-3 text-amber-darken-3 text-uppercase"
      ></label>
    <input
      type="email"
      class="border rounded-lg px-2 py-2 text-success text-uppercase"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label"
      >Example textarea</label
    >
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
  </div>
</template>

<scrip setup lang="ts">
import { defineProps, ref , computed} from "vue";

const props = defineProps<{
  label?: string;
}>();


const labelInput =ref("sample")

</scrip>
