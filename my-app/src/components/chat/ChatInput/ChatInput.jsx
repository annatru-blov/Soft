import React, { useState } from "react";
import sendImg from "./../../../img/send.png";

const ChatInput = (props) => {
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const isMessageProvided = message && message !== "";

    if (isMessageProvided) {
      props.sendMessage(message);
    } else {
      alert("Please insert an a message.");
    }
  };

  const onMessageUpdate = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="message"></label>
      <br />
      <input
        placeholder="message"
        className="input_message"
        type="text"
        id="message"
        name="message"
        value={message}
        onChange={onMessageUpdate}
        autoComplete="off" 
      />
      <br />
      <br />

      <button className="submit_button">
        {" "}
        <img className="imgsendchat" src={sendImg} alt="sendImg" width={40} />
      </button>
    </form>
  );
};

export default ChatInput;
