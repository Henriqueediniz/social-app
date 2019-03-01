import React, { Component } from "react";
import api from "../services/api";

import like from "../like.svg";
import trash from "../garbage.svg"

import "./Tweet.css";

export default class Tweet extends Component {
  handleLike = async () => {
    const { _id } = this.props.tweet;

    await api.post(`likes/${_id}`);
  };

  handleDelete = async () => {
    const { _id } = this.props.tweet;

    await api.delete(`tweets/${_id}`);
  };

  render() {
    const { tweet } = this.props;

    return (
      <li className="tweet">
        <strong>{tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type="button" onClick={this.handleLike}>
          <img src={like} alt="Like" />
          {tweet.likes}
        </button>
        <button type="button" onClick={this.handleDelete}>
          <img src={trash} alt="Delete"/>
        </button>
      </li>
    );
  }
}
