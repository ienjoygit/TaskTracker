import React from "react";
import { Link } from 'react-router-dom';

class ChatIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.renderParticipants = this.renderParticipants.bind(this);
  }

  renderParticipants() {
    let usernames = [];
    const { participants } = this.props.chat;

    participants.map(user => {
      let username;
      if (user !== this.props.currentUser) username = this.props.users[user].username;
      usernames.push(username)
    });

    return (
      <div className="participants">
        {usernames.join(', ')}
      </div>
    );
  }

  render() {
    return <li className="chats">
        <div className="user-pictures" />
        <div className="chat">
          <div className="chat-content">
            {this.renderParticipants()}
            <p>Temp Chat</p>
          </div>
          <p className="date">date</p>
        </div>
      </li>;
  }
}

export default ChatIndexItem;
