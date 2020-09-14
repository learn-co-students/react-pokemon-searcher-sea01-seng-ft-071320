import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    side: "front",
  };

  flipCard = () => {
    const flipped = this.state.side === "front" ? "back" : "front";
    this.setState({
      side: flipped,
    });
  };

  render() {
    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img src={this.props.sprites[this.state.side]} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
