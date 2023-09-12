import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

import ChatWindow from './chatwindow/chatwindow';
import ChatInput from './ChatInput/ChatInput';
import './chatpage.css';

const Chat = () => {
    const [chat, setChat] = useState([]);
    const chatWindowRef = useRef(null);

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl('https://localhost:5001/hubs/chat')
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(result => {
                console.log('Connected!');

                connection.on('ReceiveMessage', message => {
                    const updatedChat = [...chat, message];
                    setChat(updatedChat);
                    scrollChatToBottom();
                });
            })
            .catch(e => console.log('Connection failed: ', e));
    }, []);

    const sendMessage = async (message) => {
        const chatMessage = {
            message: message
        };

        try {
            await fetch('https://localhost:5001/chat/messages', {
                method: 'POST',
                body: JSON.stringify(chatMessage),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Add the sent message to the chat
            const sentMessage = {
                user: 'me',
                message: message
            };
            const updatedChat = [...chat, sentMessage];
            setChat(updatedChat);
            scrollChatToBottom();
        } catch (e) {
            console.log('Sending message failed.', e);
        }
    };

    const scrollChatToBottom = () => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    };

    return (
        <div className='chat_wrapper'>
            <ChatInput sendMessage={sendMessage} />
            <hr />
            <ChatWindow chat={chat} ref={chatWindowRef} />
        </div>
    );
};

export default Chat;
