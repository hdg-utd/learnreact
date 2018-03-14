import React, { Component } from 'react';
import Messages from './Components/Messages';
import './App.css';
//import $ from 'jquery';
import Data from './api/result.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: "https://media.watermark.org/api/v1/playlists/9ArC9W2A",
    //   dataType: "json",
    //   cache: false,
    //   onSuccess: function(data) {
    //     console.log(data);
    //   }.bind(this)
    // })
    let messageList = Data.playlist.messages.map(message => {
      var result = {};
      result.title = message.title;
      result.id = message.id;
      result.date = new Date(message.date);
      result.series = message.series.title;
      result.seriesId = message.series.id;
      if (message.assets.audio.url)
        result.audio = message.assets.audio.url;
      if (message.assets.progressive_video.url)
        result.video = message.assets.progressive_video.url;
      return result;
    })
    console.log(messageList)
    this.setState({messages: messageList})
  }

  render() {
    return (
      <div className="App">
        <h1>Watermark Espanol</h1>
        <Messages messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
