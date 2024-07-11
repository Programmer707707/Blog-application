<template>
  <ul>
    <li
      v-for="errorMessage in errorMessages"
      :key="errorMessage"
      class="list-group-item list-group-item-danger mt-2 px-2"
    >
      {{ errorMessage }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map((m) => {
        const msg = this.validationErrors[m].join(",");
        return `${m} ${msg}`;
      });
    },
  },
};
</script>

<style></style>
