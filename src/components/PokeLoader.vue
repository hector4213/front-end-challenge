<template>
  <div class="loader" v-if="loading"></div>
</template>

<script>
export default {
  name: "PokeLoader",
  props: ["loading"],
};
</script>