<template>
  <div class="container">
    <Navbar />
    <RouterView />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";

export default {
  components: { Navbar },
};
</script>

<style></style>
