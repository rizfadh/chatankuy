import React from 'react';
import ChatList from './ChatList';
import { onSnapshot } from 'firebase/firestore';
import { makeQuery, addChat } from '../utils/backend';
import ChatInput from './ChatInput';
import UserContext from '../context/UserContext';

export default function ChatMenu() {
  const [chats, setChats] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { name } = React.useContext(UserContext);

  React.useEffect(() => {
    onSnapshot(makeQuery, (snapshot) => {
      const chats = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setChats(chats);
      setLoading(false);
    });
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: document.documentElement.scrollHeight });
  }, [chats]);

  const sendChat = async (chat) => {
    await addChat(name, chat);
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
      <ChatInput sendChat={sendChat} />
    </section>
  );
}