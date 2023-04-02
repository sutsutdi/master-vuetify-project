
  <template>
  <v-sheet width="300" class="mx-auto">
    <v-form validate-on="submit" @submit.prevent="submit">
      <v-text-field
        v-model="userName"
        class="text-amber-darken-3"
        label="User name"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup lang="ts">
  import {ref } from 'vue'

  const userName = ref('')

  const submit = async  (event: any) =>{
        const results = await event
        alert(JSON.stringify(results, null, 2))
        alert(userName.value)
      }




</script>
