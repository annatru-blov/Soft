import React, { useState } from 'react';
import Chat from './chat';
import Closechat from './../../img/close.png'
import Openchat from './../../img/open.png'
import './chatpage.css'


const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div>
      {!isChatOpen && (
        <button onClick={toggleChat} className="chat-button">
            <img className="open_img" src={Openchat} alt="Openchat" />
        </button>
      )}
      {isChatOpen && (
        <div>
          <Chat />
          <button onClick={closeChat} className="close-button">
          <img className="close_img" src={Closechat} alt="Closechat" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
