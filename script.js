const container = document.getElementById('pokemonList')
const search = document.getElementById('search')
let pokeList = []

async function getPokemons() {
  container.innerHTML = ''

  for (let i = 1; i <= 151; i++) {
    const pokeCard = document.createElement('div')
    pokeCard.classList.add('pokeCard')

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const result = await response.json()

    pokeList.push(result)

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

search.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const pokeFind = e.target.value.toLowerCase()
    const filterPoke = pokeList.filter(
      (pokemon) => pokemon.name.toLowerCase() === pokeFind
    )
    console.log(filterPoke)

    if (filterPoke.length > 0) {
      clearHTML()
      const pokeCard = document.createElement('div')
      pokeCard.classList.add('pokeCard')

      pokeCard.innerHTML = `
        <h3>${filterPoke[0]?.name}</h3>
        <img
          class="img"
          src="${filterPoke[0]?.sprites.other.dream_world.front_default}"
          alt=${filterPoke[0]?.name}
        />
      `
      container.appendChild(pokeCard)
    } else {
      getPokemons()
    }
  }
})

getPokemons()

function clearHTML() {
  container.innerHTML = ''
}
