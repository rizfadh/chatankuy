import React from 'react';
import ChatList from './ChatList';
import { onSnapshot } from 'firebase/firestore';
import { makeQuery, addChat } from '../utils/backend';
import ChatInput from './ChatInput';
import UserContext from '../context/UserContext';

export default function ChatMenu() {
  const [chats, setChats] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [newChat, setNewChat] = React.useState('');
  const { name } = React.useContext(UserContext);

  React.useEffect(() => {
    const unsubChat = onSnapshot(makeQuery, (snapshot) => {
      const chats = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setChats(chats);
      setLoading(false);
    });

    return () => {
      unsubChat();
    };
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: document.documentElement.scrollHeight });
  }, [chats]);

  const newChatChange = (e) => setNewChat(e.target.value);
  const sendChat = async () => {
    await addChat(name, newChat);
    setNewChat('');
  }

  if (loading) return (
    <section className='container h-100 d-flex flex-column justify-content-center text-center'>
      <h1 className='text-primary'>Memuat Chat</h1>
      <p>Mohon tunggu sebentar</p>
    </section>
  );

  return (
    <section className='container h-100'>
      <ChatList chats={chats} />
      <div className='p-4'></div>
      <ChatInput newChat={newChat} newChatChange={newChatChange} sendChat={sendChat} />
    </section>
  );
}