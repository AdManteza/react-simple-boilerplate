import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

const App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty {console.log("Rendering <nav/>")}</h1>
        </nav>
        <MessageList />
        <ChatBar />
      </div>
    )
  }
})

export default App;