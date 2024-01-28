import React, { Component } from "react";


const Poke_Api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default class Pokecard extends Component {
  render() {
    let imgSrc = `${Poke_Api}${this.props.id}.png`;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">Pokemon</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        {/* <div className="Pokecard-data"> Type: {this.props.type}</div> */}
        <div className="Pokecard-data">
          {" "}
          Type: {this.props.type.toUpperCase()}
        </div>

        <div className="Pokecard-data"> Exp: {this.props.exp} </div>
      </div>
    );
  }
}
