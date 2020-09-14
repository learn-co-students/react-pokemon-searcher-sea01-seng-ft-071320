import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const ENDPOINT = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    search: "",
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  };

  componentDidMount() {
    fetch(ENDPOINT)
      .then((resp) => resp.json())
      .then((pokemon) => this.setState({ pokemon: pokemon }));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const pokemon = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl,
      },
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(pokemon),
    };

    fetch(ENDPOINT, configObj)
      .then((resp) => resp.json())
      .then((pokemon) =>
        this.setState({
          pokemon: [pokemon, ...this.state.pokemon],
        })
      )
      .catch(console.log);

    this.setState({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <br />
        <Search handleChange={this.handleChange} />
        <br />
        <PokemonCollection {...this.state} />
      </Container>
    );
  }
}

export default PokemonPage;
