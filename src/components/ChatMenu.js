import React from 'react'
import ChatList from './ChatList'
import { onSnapshot } from 'firebase/firestore'
import { makeQuery, addChat } from '../utils/backend'
import ChatInput from './ChatInput'
import UserContext from '../context/UserContext'

export default function ChatMenu() {
  const [chats, setChats] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const { name } = React.useContext(UserContext)

  React.useEffect(() => {
    onSnapshot(makeQuery, (snapshot) => {
      const chats = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      setChats(chats)
      setLoading(false)
    })
  }, [])

  React.useEffect(() => {
    const documentHeight = document.body.scrollHeight
    const currentScroll = window.scrollY + window.innerHeight
    const modifier = 200
    if (currentScroll + modifier > documentHeight) {
      window.scrollTo({ top: document.documentElement.scrollHeight })
    }
  }, [chats])
  const sendChat = async (chat) => {
    await addChat(name, chat)
  }

  if (loading)
    return (
      <section className='container h-100 d-flex flex-column justify-content-center text-center'>
        <h1 className='text-primary mb-0'>Memuat Chat</h1>
        <p>Mohon tunggu sebentar</p>
      </section>
    )

  return (
    <>
      <div className='bg position-fixed w-100 min-vh-100'></div>
      <section className='container min-vh-100 d-flex flex-column justify-content-between'>
        <div className='sticky-top pt-3'>
          <div className='bg-light p-2 rounded shadow-sm'>
            <p className='m-0 text-center logo text-danger fs-4'>ChatanKuy!</p>
          </div>
        </div>
        <ChatList chats={chats} />
        <ChatInput sendChat={sendChat} />
      </section>
    </>
  )
}
