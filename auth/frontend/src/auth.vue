<script setup>
import { ref } from "vue";
import Login from "./component/login.vue";
import Register from "./component/register.vue";

const showLogin = ref(true);
</script>

<template>
    <div class="flex justify-content-center">
        <!-- <router-view /> -->
    <Login v-if="!showLogin" />
    <Register v-if="showLogin" />
    </div>
</template>

<style scoped></style>
