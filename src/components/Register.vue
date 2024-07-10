<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>

      <Input :label="'Name'" :type="'text'" />
      <Input :label="'Email'" :type="'email'" />
      <Input :label="'Password'" :type="'password'" />

      <Button type="submit" :disabled="isLoading" @click="submitHandler"
        >Sign up</Button
      >
      <!-- <button class="btn btn-primary w-100 py-2 mt-3" type="submit">
        Sign up
      </button> -->
    </form>
  </main>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading;
    },
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        username: "utribol",
        email: "matribol@gmail.x",
        password: "utrimatri",
      };
      this.$store.dispatch("register", data);
      // the data whic is second param of dispatch is called - "Payload"
    },
  },
};
</script>

<style></style>
