<template>
  <ul class="suggestions" v-if="results.length > 0">
    <li v-bind:key="pokemon.Number" v-for="pokemon in results.slice(0, 4)">
      <img v-bind:src="pokemon.img" v-bind:alt="pokemon.Name" />
      <div class="info">
        <h1>
          <span v-html="highlight(pokemon.Name)"></span>
        </h1>
        <div v-for="type in pokemon.Types" v-bind:key="type">
          <span class="type" :class="type.toLowerCase()">{{ type }}</span>
        </div>
      </div>
    </li>
  </ul>
  <ul class="suggestions" v-else-if="results.length === 0 && search.length > 0">
    <li>
      <img
        src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png"
        alt="No results"
      />
      <div class="info">
        <h1 class="no-results">No results</h1>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PokeList",
  props: ["results", "search"],
  methods: {
    highlight: function (pokeName) {
      console.log(this.search, "gi");
      return pokeName.replace(
        new RegExp(this.search, "gi"),
        '<span class="hl">$&</span>'
      );
    },
  },
};
</script>

<style scoped>
</style>