import React, { Component } from "react";
import Spinner from "../spinner";
import GotService from "../../services/gotService";
import "./itemList.css";
export default class ItemList extends Component {
  gotService = new GotService();

  state = {
    charList: null,
  };

  componentDidMount() {
    this.gotService
      .getAllCharacters()
      .then((charList) => this.setState({ charList }));
  }

  renderItems(array) {
    return array.map((item, index) => {
      return (
        <li
          key={index}
          className="list-group-item"
          onClick={() => this.props.onCharSelected(13 + index)}
        >
          {item.name}
        </li>
      );
    });
  }

  render() {
    const { charList } = this.state;

    if (!charList) {
      return <Spinner />;
    }

    const items = this.renderItems(charList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
