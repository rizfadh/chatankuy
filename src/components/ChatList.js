import React from 'react';
import ChatItem from './ChatItem';

export default function ChatList({ chats }) {
  if (chats.length === 0) return (
    <div className='h-100 d-flex flex-column justify-content-center text-center'>
      <h1 className="text-muted">
        Chat kosong
      </h1>
      <p className='text-muted'>
        Ayo mulai percakapan baru
      </p>
    </div>
  );

  return (
    <div className='list-chat'>
      {
        chats.map(chat => {
          return <ChatItem
            id={chat.id}
            name={chat.name}
            chat={chat.chat}
            createdAt={chat.createdAt}
            key={chat.id}
          />
        })
      }
    </div>
  );
}