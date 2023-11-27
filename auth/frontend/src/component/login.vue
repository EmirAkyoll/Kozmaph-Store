<script setup>
import environment_variable from "../env";
import { ref } from "vue";
const value = ref(null);

// console.log("HABBAQ: ", environment_variable.API_KEY);
</script>

<template>
  <div class="border-1 border-round-3xl border-gray-300 mt-5 font-Ubuntu">
    <Card>
      <template #title> Log In </template>
      <template #content>
        <div class="flex flex-column p-4">
          <label for="username" class="font-Ubuntu mb-2">Username</label>
          <InputText
            id="username"
            v-model="username_value"
            aria-describedby="username-help"
          />

          <label for="password" class="mt-4 mb-2">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            class="border-1 border-gray-400 border-round-sm p-2" 
          />
        </div>
        <p class="ml-4 font-Ubuntu">New user? <a href="" class="no-underline text-primary">sign up.</a></p>
        <Button label="Log In" severity="info" class="ml-4 mt-3 border-round-md" style="width:   200px" />
      </template>
    </Card>
  </div>
</template>

<style scoped> </style>