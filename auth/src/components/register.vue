<script setup>
import { ref, onMounted } from "vue";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as generate_random_id } from "uuid";

const { showLogin } = defineProps({ message: String, showLogin: Boolean });
const emit = defineEmits();

const toggleShowLogin = () => {
  emit("toggle-show-login", !showLogin);
};

const activeIndex = ref(0);

const nextStep = () => {
  activeIndex.value++;
};

const prevStep = () => {
  activeIndex.value--;
};

const items = ref([
  {
    label: "Account",
  },
  {
    label: "Personal",
  },
]);

const userName = ref("");
const email = ref("");
const password = ref("");
const fullName = ref("");
const address = ref("");
const userTitle = ref("Customer");

const userTitleOptions = ref(["Customer", "Seller"]);

const createUser = () => {
  // console.log("id:", generate_random_id(),"title:", userTitle.value,"full_name:", fullName.value,"address:", address.value,"username:", userName.value,"password:", password.value,"email:", email.value,"favorites:", [],"cart: ", []);
  addDoc(collection(db, "users"), {
    id: generate_random_id(),
    title: userTitle.value,
    full_name: fullName.value,
    address: address.value,
    username: userName.value,
    password: password.value,
    email: email.value,
    favorites: [],
    cart: [],
  });
};
</script>

<template>
  <div class="border-1 border-round-xl border-gray-300 mt-1 font-Ubuntu">
    <h2 class="ml-5">Sign Up</h2>
    <Steps :model="items" :readonly="true" :activeStep="activeIndex" />
    <div v-if="activeIndex === 0">
      <Card>
        <!-- <template #title> Sign Up </template> -->
        <template #content>
          <div class="card">
            <!-- <Steps :model="items" :readonly="true" :activeIndex.sync="activeIndex" /> -->
          </div>
          <div class="flex flex-column p-4 pt-0">
  
            <div class="flex flex-column md:flex-row">
              <span class="flex flex-column mr-2">
                <label for="username" style="margin-bottom: 10px;" class="font-Ubuntu mt-4 mb-2s">User Name</label>
                <InputText
                  id="username"
                  class="mb-0"
                  v-model="userName"
                  aria-describedby="username-help"
                />  
              </span>
              <span class="flex flex-column">
                <label for="password" class="mt-4 mb-2">Password</label>
                <Password v-model="password" id="password" style="margin-bottom: 0px;">
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
              </span>
            </div>
  
            <label for="email" class="font-Ubuntu mt-4 mb-2">E-mail</label>
            <InputText id="email" v-model="email" aria-describedby="email-help" />
          </div>
          <div class="flex align-items-center justify-content-around mr-5">
            <span class="ml-4 font-Ubuntu mt-3">
            Already registered?
            <a @click="toggleShowLogin()" class="no-underline text-primary">log in.</a>
          </span>
          <Button
            @click="nextStep"
            label="Next Step"
            severity="info"
            class="ml-4 mt-3 border-round-md"
            style="width: 120px"
          />
          </div>
        </template>
      </Card>
    </div>

    <div v-if="activeIndex === 1">
      <Card class="w-18rem sm:w-23rem md:w-30rem">
        <!-- <template #title> Sign Up </template> -->
        <template #content>
          <div class="card">
            <!-- <Steps :model="items" :readonly="true" :activeIndex.sync="activeIndex" /> -->
          </div>
          <div class="flex flex-column p-4 pt-0">
            <label for="full_name" class="font-Ubuntu mb-2">Full Name</label>
            <InputText
              id="full_name"
              v-model="fullName"
              aria-describedby="full_name-help"
            />

            <label for="address" class="font-Ubuntu mt-4 mb-2">Address</label>
            <textarea 
               name="address" 
               id="address" 
               cols="30" 
               rows="3" 
               v-model="address" 
               class="p-1"
               aria-describedby="address-help"  
            ></textarea>
            <div class="flex justify-content-center">
              <SelectButton v-model="userTitle" :options="userTitleOptions" aria-labelledby="basic" class="mt-4" />
            </div>
          </div>
          <div class="flex justify-content-center">
            <Button @click="prevStep" class="ml-1">Back</Button>
            <Button @click="createUser" class="ml-3" style="width: 150px;" label="Sign Up"></Button>
          </div>
        </template>
      </Card> 
    </div>
  </div>
</template>

<style scoped>
</style>