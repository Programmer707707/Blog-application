<template>
  <div
    class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom"
  >
    <a
      href="/"
      class="d-flex align-items-center link-body-emphasis text-decoration-none pointer"
    >
      <img
        src="https://i.ibb.co/Y2kpx8h/Screenshot-2024-07-07-at-09-50-28.png"
        alt=""
        style="width: 150px"
        @click="toHomeHandler"
      />
    </a>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <RouterLink
        :to="{ name: 'register' }"
        class="me-3 py-2 link-body-emphasis text-decoration-none"
        >Register</RouterLink
      >

      <RouterLink
        :to="{ name: 'login' }"
        class="me-3 py-2 link-body-emphasis text-decoration-none"
        >Login</RouterLink
      >
    </nav>
  </div>
</template>

<script>
import { logo } from "@/constants";
export default {
  data() {
    return logo;
  },
  methods: {
    toHomeHandler() {
      return this.$router.push("/");
    },
  },
};
</script>

<style></style>
