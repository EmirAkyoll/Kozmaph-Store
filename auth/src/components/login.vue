<script setup>
import { db } from "../firebase";
import { ref } from "vue";
import { collection, getDocs, query, where } from "firebase/firestore";

const { showLogin } = defineProps({message: String, showLogin: Boolean});
const emit = defineEmits();

const toggleShowLogin = () => {
  emit('toggle-show-login', !showLogin);
};

const username = ref("");
const password = ref("");

const getUser = async () => {
  try {
    const getUserByUsernameAndEmailQuery = query(
      collection(db, 'users'),
      where('username', '==', username.value),
      where('password', '==', password.value)
    );

    const userData = await getDocs(getUserByUsernameAndEmailQuery);
    userData.forEach((doc) => {
      localStorage.setItem('CurrentUserData', JSON.stringify(doc.data()))
      console.log('user:', doc.data());
    });

  } catch (error) {
    console.error(error);
  }
};
// console.log("HABBAQ: ", environment_variable.API_KEY);
</script>

<template>
  <div class="border-1 border-round-3xl border-gray-300 mt-5 font-Ubuntu">
    <Card class="w-17rem md:w-20rem">
      <template #title> Log In </template>
      <template #content>
        <div class="flex flex-column p-4">
          <label for="username" class="font-Ubuntu mb-2">Username</label>
          <input 
            id="username" 
            type="username" 
            name="username" 
            v-model="username"
            class="border-1 border-gray-400 border-round-sm p-2" 
          />

          <label for="password" class="mt-4 mb-2">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            v-model="password"
            class="border-1 border-gray-400 border-round-sm p-2" 
          />
        </div>
        <p class="ml-4 font-Ubuntu">
          New user? 
          <a @click="toggleShowLogin()" class="no-underline text-primary">sign up.</a>
        </p>
        <Button @click="getUser" label="Log In" severity="info" class="ml-4 mt-3 border-round-md w-12rem md:w-15rem" />
      </template>
    </Card>
  </div>
</template>

<style scoped> </style>