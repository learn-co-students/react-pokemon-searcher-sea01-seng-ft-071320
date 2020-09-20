import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    toggle: true
  }

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }
  render() {
    const { hp, id, name, sprites } = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.toggle ? sprites.front : sprites.back} alt="oh no!" onClick={this.handleToggle} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
