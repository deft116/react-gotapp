import React, { Component } from "react";
import "./randomChar.css";
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
export default class RandomChar extends Component {
  gotService = new gotService();
  state = {
    character: {},
    loading: true,
  };

  componentDidMount() {
    this.updateCharacter();
  }

  onCharacterLoaded = (character) => {
    this.setState({
      character,
      loading: false,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateCharacter() {
    const id = Math.floor(Math.random() * 140 + 25);
    this.gotService
      .getCharacterById(id)
      .then(this.onCharacterLoaded)
      .catch(this.onError);
  }

  render() {
    const { character, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View character={character} /> : null;

    return (
      <div className="random-block rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const View = ({ character }) => {
  const { name, gender, born, died, culture } = character;
  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
