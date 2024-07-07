<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal mt-3">Login</h1>

      <Input :label="'Email'" :type="'email'" />
      <Input :label="'Password'" :type="'password'" />

      <Button type="submit">Login</Button>
      <!-- <button class="btn btn-primary w-100 py-2 mt-3" type="submit">
        Sign in
      </button> -->
    </form>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
