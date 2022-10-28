import React from 'react';
import { BiSend } from 'react-icons/bi';

export default function ChatInput({ newChat, newChatChange, sendChat }) {
  return (
    <div className='container input-group fixed-bottom p-2'>
      <input type="text" className="form-control" placeholder="Masukkan pesan..." aria-label="Username" value={newChat} onChange={newChatChange} />
      {
        newChat.trim().length === 0 ? (
          <button className="btn btn-primary" type="button" disabled><BiSend /></button>
        ) : (
          <button className="btn btn-primary" type="button" onClick={sendChat}><BiSend /></button>
        )
      }

    </div>
  );
}