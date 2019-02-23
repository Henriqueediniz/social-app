import React, { Component } from 'react';

 import  './Timeline.css';
 import twitterLogo from '../twitter.svg';
 import api from '../services/api'
 import Tweet from '../components/Tweet'
 
export default class TimeLine extends Component {
  state = {
    tweets: [],
    newTweet: '',
  };

  async componentDidMount(){
    const response = await api.get('tweets');

    this.setState({tweets: response.data});
  }

  handleNewTweet = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem("@TwitterApp:username");

    await api.post('tweets', {content, author});

    this.setState({newTweet: '' });
  };

  handleInputChange = e => {
    this.setState({ newTweet: e.target.value });
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt='myTwiiterApp'/>
        
        <form>
          <textarea 
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet} 
            placeholder='What is happen?'
          />
        </form>

        <ul className="tweet-list">
          {this.state.tweets.map(tweet => (
            <Tweet key={tweet._id} tweet={tweet}/>
          ))}
        </ul>
      </div>
    );
  }
}
