<template>
  <ul>
    <li
      v-for="errorMessage in errorMessages"
      :key="errorMessage"
      class="list-group-item list-group-item-danger mt-2 px-2 item"
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

<style scoped>
.item {
  background: #c51244 !important;
  padding: 10px !important;
  border-radius: 0 !important;
  position: relative;
  display: inline-block !important;
  box-shadow: 1px 1px 1px #aaaaaa;
  margin-top: 10px;
  color: white;
  transition: ease-in-out;
}
</style>
