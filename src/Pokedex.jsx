import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default class Pokedex extends Component {
  render() {
    let title;

    if (this.props.isWinner) {
      title = <button className="shadow__btn">Winner!</button>;
    } else {
      title = <button className="shadow__btn2">Loser!</button>;
    }

    return (
      <div className="Pokedex">
        {title}
        <h4 className="total">Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.id}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
