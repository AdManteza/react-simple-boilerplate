import React, {Component} from 'react';

const Message = React.createClass({
  render: function() {
    return (
      <div className="message">
        {console.log("Rendering <Message/>")}
        <span className="username">{this.props.username}</span>
        <span className="content">{this.props.content}</span>
      </div>
    )
  }
})

export default Message;