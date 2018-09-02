import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatIndexItem from './chat_index_item';

class ChatIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.getChats = this.getChats.bind(this);
  }
  // registerHandler(onMessageReceived) {
  //   socket.on('message', onMessageReceived)
  // }

  // unregisterHandler() {
  //   socket.off('message')
  // }

  // getChats(userId, cb) {
  //   socket.emit('chats', userId, cb)
  // }

  componentDidMount() {
    const userId = this.props.currentUser.id
    this.props.fetchChats(userId);
  }

  render() {
    const { users, currentUser, fetchChat, openChatModal } = this.props;

    return (
      <div className="chat-bar">
        <div className="chat-header">
          <div></div>
          <h1>Messages</h1>
          <i className="far fa-edit"></i>
        </div>
        <ul className="conversations">
          {this.props.chats.map(chatData => {
            return <ChatIndexItem
              key={chatData.chat._id}
              chatData={chatData}
              users={users}
              currentUser={currentUser.id}
              fetchChat={fetchChat}
              openChatModal={openChatModal} />
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(ChatIndex);
