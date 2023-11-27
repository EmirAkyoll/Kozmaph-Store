<script setup>
import { ref, onMounted } from "vue";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const all_names = ref([]);
const value = ref(null);

const username = ref("");
const email = ref("");
const password = ref("");

const createUser = () => {
  addDoc(collection(db, 'users'), {
    username: username.value,
    email: email.value,
    password: password.value
  })
}

onMounted(async () => { 
    const querySnapshot = await getDocs(collection(db, 'users'));
    let names = []
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const name = {
            username: doc.data().username,
            email: doc.data().email,
            password: doc.data().password
        }
        names.push(name)
    })
    all_names.value = names
})
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
            v-model="username"
            aria-describedby="username-help"
          />
          <!-- {{ all_names }} -->
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
        </div>
        <p class="ml-4 font-Ubuntu">Already registered? <a href="" class="no-underline text-primary">log in.</a></p>
        <Button @click="createUser" label="Sign Up" severity="info" class="ml-4 mt-3 border-round-md" style="width:200px" />
      </template>
    </Card>
  </div>
</template>

<style scoped> </style>