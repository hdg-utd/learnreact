import React, { Component } from 'react';
import MessageItem from './MessageItem'
import './Messages.css';

class Messages extends Component {
  render() {
    let messageItems;
    if(this.props.messages) {
      messageItems = this.props.messages.map(message => {
        return (
          <MessageItem key={message.title} message={message} />
        )
      })
    }

    return (
      <div className="Messages">
        <ul>
          {messageItems}
        </ul>
      </div>
    );
  }
}

export default Messages;
