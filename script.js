const apiUrl = "https://pokeapi.co/api/v2/pokemon"
const container = document.getElementById("pokemonList")

async function getPokemons(apiUrl) {
  for (let i = 1; i <= 10; i++) {
    const img = document.createElement("img")
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const result = await response.json()

    console.log(result)

    img.src = result.sprites.other.dream_world.front_default
    container.appendChild(img)
  }

  //

  // results.forEach((pokemon) => {
  //   img.src = pokemon.url

  //   container.appendChild(img)
  // })

  // console.log(results)

  for (let i = 1; i <= 10; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((res) => res.json())
      .then((pokemon) => {
        const nombre = pokemon.name
        const imagen = pokemon.sprites.front_default

        // Crear una card
        const card = document.createElement("div")
        card.innerHTML = `
        <h3>${nombre}</h3>
        <img src="${imagen}" alt="${nombre}">
      `
        document.body.appendChild(card)
      })
  }
}

getPokemons(apiUrl)
