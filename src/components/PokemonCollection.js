import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    let pokemon = this.props.pokemon;
    if (this.props.search.length > 0) {
      const regex = RegExp(".*" + this.props.search + ".*");
      pokemon = this.props.pokemon.filter(
        (pokemon) => !!regex.test(pokemon.name)
      );
    }

    return (
      <Card.Group itemsPerRow={6}>
        {pokemon.map((pokemon) => (
          <PokemonCard {...pokemon} key={pokemon.id} />
        ))}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
