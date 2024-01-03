<script setup>
import { ref, onMounted, reactive } from "vue";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as generate_random_id } from "uuid";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import { useToast } from 'primevue/usetoast';

const { showLogin } = defineProps({ message: String, showLogin: Boolean });
const emit = defineEmits();
const toast = useToast();

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

const items = ref([{label: "Account"}, {label: "Personal"}]);

const userData = reactive({
  fullName: '',
  userName: '',
  password: '',
  email: '',
  address: '',
  userTitle: 'Customer',
  favorites: [],
  cart: [],
})

const validationRules = {
  userName: { required },
  email: { required, email },
  password: { required, minLength: minLength(8) },
  fullName: { required },
  address: { required },
  userTitle: { required },
}

const $v = useVuelidate(validationRules, userData);

const userTitleOptions = ref(["Customer", "Seller"]);

const createUser = async () => {
  const isItValid = await $v.value.$validate();

  if (isItValid) {
    addDoc(collection(db, "users"), {
      id: generate_random_id(),
      title: userData.userTitle,
      full_name: userData.fullName,
      address: userData.address,
      username: userData.userName,
      password: userData.password,
      email: userData.email,
      favorites: [],
      cart: [],
    });
    
    userData.userName = "";
    userData.email = "";
    userData.password = "";
    userData.fullName = "";
    userData.address = "";
    userData.userTitle = "Customer";
  } else {
    toast.add({ severity: 'error', detail: 'You have entered the user data incorrectly!', life: 3000 });
  }
};
</script>

<template>
  <div class="border-1 border-round-xl border-gray-300 mt-1 font-Ubuntu">
    <h2 class="ml-5">Sign Up</h2>
    <Steps :model="items" :readonly="true" :activeStep="activeIndex" />
    <Toast />
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
                <label for="username" style="margin-bottom: 10px;" class="font-Ubuntu mt-4 mb-2s">User Name *</label>
                <InputText
                  id="username"
                  class="mb-0"
                  v-model="userData.userName"
                  aria-describedby="username-help"
                />  
              </span>
              <span class="flex flex-column">
                <label for="password" class="mt-4 mb-2">Password *</label>
                <Password v-model="userData.password" id="password" style="margin-bottom: 0px;">
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
  
            <label for="email" class="font-Ubuntu mt-4 mb-2">E-mail *</label>
            <InputText id="email" v-model="userData.email" aria-describedby="email-help" />
          </div>
          <p class="text-xs text-center my-0">Fields marked with (*) are required.</p>
          <div class="flex align-items-center justify-content-around mr-5">
            <span class="ml-4 font-Ubuntu mt-3">
            Already registered?
            <a @click="toggleShowLogin()" class="no-underline text-primary cursor-pointer">log in.</a>
          </span>
          <Button
            @click="nextStep"
            label="Personal"
            icon="pi pi-angle-right" 
            iconPos="right"
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
            <label for="full_name" class="font-Ubuntu mb-2">Full Name *</label>
            <InputText
              id="full_name"
              v-model="userData.fullName"
              aria-describedby="full_name-help"
            />

            <label for="address" class="font-Ubuntu mt-4 mb-2">Address *</label>
            <textarea 
               name="address" 
               id="address" 
               cols="30" 
               rows="3" 
               v-model="userData.address" 
               class="p-1"
               aria-describedby="address-help"  
            ></textarea>
            <div class="flex justify-content-center">
              <SelectButton v-model="userData.userTitle" :options="userTitleOptions" aria-labelledby="basic" class="mt-4" />
            </div>
            <p class="text-xs text-center mb-0">Fields marked with (*) are required.</p>
          </div>
          <div class="flex justify-content-center">
            <Button @click="prevStep" class="ml-1" icon="pi pi-angle-left" iconPos="left" label="General"></Button>
            <Button @click="createUser" class="ml-3" style="width: 150px;" label="Sign Up"></Button>
          </div>
        </template>
      </Card> 
    </div>
  </div>
</template>

<style scoped>
</style>