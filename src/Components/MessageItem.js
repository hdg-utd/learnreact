import React, { Component } from 'react';
import './MessageItem.css';

class MessageItem extends Component {
  render() {
    return (
      <li className="MessageItem">
        <h2>{this.props.message.title}</h2>
        <h6>{this.props.message.date.toDateString()}</h6>
        {this.showVideoOrAudio()}
      </li>
    );
  }

  showVideoOrAudio() {
  	if(this.props.message.audio && this.props.message.video) {
  		return (
  			<div className="playback-type">
	  			<a href={this.props.message.audio}>Listen</a>
	        	<a href={this.props.message.video}>Watch</a>
	        </div>
  		);
  	} else if (this.props.message.audio) {
  		return <div className="playback-type"><a href={this.props.message.audio}>Listen</a></div>
  	} else if (this.props.message.video) {
  		return <div className="playback-type"><a href={this.props.message.video}>Watch</a></div>
  	} else {
  		return <div className="playback-type">No Video or Audio</div>
  	}
  }
}

export default MessageItem;

// title: message.title,
// id: message.id,
// date: message.date,
// series: message.series.title,
// seriesId: message.series.id,
// audio: message.assets.audio.url
