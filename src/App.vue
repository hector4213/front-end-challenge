<template>
  <label for="maxCP" class="max-cp">
    <input type="checkbox" id="maxCP" />
    <small> Maximum Combat Points </small>
  </label>
  <input type="text" class="input" placeholder="Pokemon or type" />
  <div class="loader"></div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { getPokemon } from "./api/pokeApi";
import PokeList from "./components/PokeList";
const URL_PATH =
  "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";

export default {
  name: "App",
  components: {
    PokeList,
  },
};
</script>
