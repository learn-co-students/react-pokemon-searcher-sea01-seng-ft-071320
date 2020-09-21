import React from "react";
import { Card } from "semantic-ui-react";

const PokemonCard = ({ pokemon, changeImage }) => {
  const url = pokemon.sprites.front;
  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={() => changeImage(pokemon)} src={url} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default PokemonCard;
