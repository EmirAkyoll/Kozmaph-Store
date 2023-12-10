<script setup>
import { ref } from "vue";
import Login from "./components/login.vue";
import Register from "./components/register.vue";

const showLogin = ref(true);

function setShowLogin(value) {
    showLogin.value = value;
}
</script>

<template>
    <div class="flex justify-content-center">
     <Login v-if="showLogin" :show-login="showLogin" @toggle-show-login="setShowLogin" />
     <Register v-if="!showLogin" :show-login="showLogin" @toggle-show-login="setShowLogin" />
    </div>
</template>

<style scoped></style>
