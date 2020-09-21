import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      clicked: [],
    };
  }
  componentDidMount() {
    let API = "http://localhost:3000/pokemon";
    fetch(API)
      .then((res) => res.json())
      .then((pokemon) =>
        this.setState({
          pokemon: pokemon,
        })
      );
  }

  changeImage = (pokemon) => {
    console.log(pokemon);
  };

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.state.pokemon.map((pokemon) => (
          <PokemonCard
            pokemon={pokemon}
            key={pokemon.id}
            changeImage={this.changeImage}
          />
        ))}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
