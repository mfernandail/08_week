const apiUrl = "https://pokeapi.co/api/v2/pokemon"
const container = document.getElementById("pokemonList")

async function getPokemons(apiUrl) {
  for (let i = 1; i <= 10; i++) {
    const pokeCard = document.createElement('div')
    pokeCard.classList.add('pokeCard')

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const result = await response.json()

    console.log(result)

    pokeCard.innerHTML = `
      <h3>${result.name}</h3>
      <img
        class="img"
        src="${result.sprites.other.dream_world.front_default}"
        alt=${result.name}
      />
    `

    container.appendChild(pokeCard)
  }
}

getPokemons(apiUrl)
