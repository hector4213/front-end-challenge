<template>
  <label for="maxCP" class="max-cp">
    <input type="checkbox" id="maxCP" v-model="checked" v-on:click="sortByCp" />
    <small> Maximum Combat Points </small>
  </label>
  <input
    v-model="search"
    type="text"
    class="input"
    placeholder="Pokemon or type"
  />
  <PokeLoader v-bind:loading="loading" />
  <PokeList v-bind:results="results" v-bind:search="search" />
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { getPokemon } from "./api/pokeApi";
import PokeList from "./components/PokeList";
import PokeLoader from "./components/PokeLoader";
const URL_PATH =
  "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";

export default {
  name: "App",
  components: {
    PokeList,
    PokeLoader,
  },
  data() {
    return {
      search: "",
      results: [],
      checked: false,
      loading: false,
    };
  },
  watch: {
    search: function () {
      this.getResults();
    },
  },
  methods: {
    getResults: async function () {
      if (this.search.length < 1) {
        this.results = [];
      } else {
        this.loading = true;
        const response = await getPokemon(URL_PATH);
        const pokemonResults = response.filter((pokemon) => {
          return (
            pokemon.Name.toLowerCase().includes(this.search.toLowerCase()) ||
            pokemon.Types.map((type) => type.toLowerCase()).includes(
              this.search.toLowerCase()
            )
          );
        });
        this.results = pokemonResults;
        this.loading = false;
      }
    },
    sortByCp: function () {
      this.checked = !this.checked;
      if (this.checked) {
        return this.results.sort((a, b) => b.MaxCP - a.MaxCP);
      } else {
        return this.results.sort((a, b) => a.MaxCP - b.MaxCP);
      }
    },
  },
};
</script>
