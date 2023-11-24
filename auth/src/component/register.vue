<script setup>
import { ref } from "vue";
const value = ref(null);
</script>

<template>
  <div class="border-1 border-round-3xl border-gray-300 mt-5 font-Ubuntu">
    <Card>
      <template #title> Sign Up </template>
      <template #content>
        <div class="flex flex-column p-4">
          <label for="username" class="font-Ubuntu mb-2">Username</label>
          <InputText
            id="username"
            v-model="value"
            aria-describedby="username-help"
          />
          
          <label for="email" class="font-Ubuntu mt-4 mb-2">E-mail</label>
          <InputText
            id="email"
            v-model="value"
            aria-describedby="email-help"
          />

          <label for="password" class="mt-4 mb-2">Password</label>
          <Password v-model="value" id="password">
            <template #header>
              <h6>Pick a password</h6>
            </template>
            <template #footer>
              <Divider />
              <p class="mt-2">Suggestions</p>
              <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </Password>
        </div>
        <p class="ml-4 font-Ubuntu">Already registered? <a href="" class="no-underline text-primary">log in.</a></p>
        <Button label="Sign Up" severity="info" class="ml-4 mt-3 border-round-md" style="width:200px" />
      </template>
    </Card>
  </div>
</template>

<style scoped> </style>