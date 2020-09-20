import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    value: ''
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/pokemon")
      .then((response) => response.json())
      .then(data => this.setState({ pokemon: data }))

  }
  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }
  handelSubmitForm = (pokemon) => {
    const { name, hp, frontUrl, backUrl } = pokemon
    const newPokemon = {
      name: name,
      hp: +hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newPokemon)
    }
    this.setState({ pokemon: [...this.state.pokemon, newPokemon] })

    fetch('http://localhost:3000/pokemon', options)
      .then((resp) => resp.json())
      .then((pokemon) => console.log(pokemon))

  }

  PokemonToDisplay = () => {
    if (this.state.value.length > 0) {
      return this.state.pokemon.filter((pokemon) => pokemon.name.includes(this.state.value))
    }
    return this.state.pokemon
  }

  render() {
    console.log(this.state.pokemon[0])
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handelSubmitForm={this.handelSubmitForm} />
        <br />
        <Search handleChange={this.handleChange} value={this.state.value} />
        <br />
        <PokemonCollection pokemon={this.PokemonToDisplay()} />
      </Container>
    )
  }
}

export default PokemonPage
