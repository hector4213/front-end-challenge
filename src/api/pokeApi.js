const getPokemon = async (url) => {
  const response = await fetch(url)
  const pokemon = await response.json()
  return pokemon
}




export {
getPokemon
}
