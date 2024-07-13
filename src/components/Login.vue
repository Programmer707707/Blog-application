<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal mt-3">Login</h1>

      <ValidationError
        v-if="validationErrors"
        :validationErrors="validationErrors"
      />

      <Input :label="'Email'" :type="'email'" v-model="email" />
      <Input :label="'Password'" :type="'password'" v-model="password" />

      <Button type="submit" :disabled="isLoading" @click="submitHandler"
        >Login</Button
      >
      <!-- <button class="btn btn-primary w-100 py-2 mt-3" type="submit">
        Sign in
      </button> -->
    </form>
  </main>
</template>

<script>
import ValidationError from "@/components/ValidationError.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: { ValidationError },
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      validationErrors: (state) => state.auth.errors,
    }),

    //Second version of doing computed functions
    // isLoading() {
    //   return this.$store.state.auth.isLoading;
    // },
    // validationErrors() {
    //   return this.$store.state.auth.errors;
    // },
  },

  methods: {
    submitHandler(e) {
      e.preventDefault();
      //we are giving this data using dispatch and AuthService's register method sends post request to add new user's info to our api
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      //if the register function works our then will be executed, else catch
      this.$store
        .dispatch("auth/login", data)
        .then((user) => {
          console.log("User: ", user);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log("Error:", err);
        });
      // the data which is the second parameter of dispatch is called - "Payload"
    },
  },
};
</script>

<style></style>
