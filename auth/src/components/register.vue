<script setup>
import { ref, onMounted } from "vue";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as generate_random_id } from "uuid";

const { showLogin } = defineProps({message: String, showLogin: Boolean});
const emit = defineEmits();

const toggleShowLogin = () => {
  emit('toggle-show-login', !showLogin);
};

const fullName = ref("");
const userName = ref("");
const email = ref("");
const password = ref("");
const userTitle = ref("Customer");

const userTitleOptions = ref(['Customer', 'Seller']);

const createUser = () => {
  addDoc(collection(db, 'users'), {
    id: generate_random_id(),
    title: userTitle.value,
    fullname : fullName.value,
    username: userName.value,
    password: password.value,
    email: email.value,
    favorites: [],
    cart: [],
  })
}
</script>

<template>
  <div class="border-1 border-round-3xl border-gray-300 mt-1 font-Ubuntu">
    <Card>
      <template #title> Sign Up </template>
      <template #content>
        <div class="flex flex-column p-4">
          <label for="fullname" class="font-Ubuntu mb-2">Full Name</label>
          <InputText
            id="fullname"
            v-model="fullName"
            aria-describedby="fullname-help"
          />
          
          <label for="username" class="font-Ubuntu mt-4 mb-2">User Name</label>
          <InputText
            id="username"
            v-model="userName"
            aria-describedby="username-help"
          />

          <label for="email" class="font-Ubuntu mt-4 mb-2">E-mail</label>
          <InputText
            id="email"
            v-model="email"
            aria-describedby="email-help"
          />

          <label for="password" class="mt-4 mb-2">Password</label>
          <Password v-model="password" id="password">
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
          <div class="flex justify-content-center">
            <SelectButton v-model="userTitle" :options="userTitleOptions" aria-labelledby="basic" class="mt-4" />
          </div>
        </div>
        <p class="ml-4 font-Ubuntu">
          Already registered? 
          <a @click="toggleShowLogin()" class="no-underline text-primary">log in.</a>
        </p>
        <Button @click="createUser" label="Sign Up" severity="info" class="ml-4 mt-3 border-round-md" style="width:200px" />
      </template>
    </Card>
  </div>
</template>

<style scoped> </style>