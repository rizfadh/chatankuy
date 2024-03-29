import React from 'react'
import { formattedDateAndTime } from '../utils/service'
import ChatItem from './ChatItem'
import UserContext from '../context/UserContext'

export default function ChatList({ chats }) {
  const { name } = React.useContext(UserContext)

  if (chats.length === 0)
    return (
      <div className='text-center'>
        <h1 className='text-muted mb-0'>Chat kosong</h1>
        <p className='text-muted'>Ayo mulai percakapan baru</p>
      </div>
    )

  const orderedChats = {}
  for (const chat of chats) {
    if (chat.createdAt === null) break
    const [chatDate] = formattedDateAndTime(chat.createdAt.toDate())
    if (`${chatDate}` in orderedChats) orderedChats[`${chatDate}`].push(chat)
    else orderedChats[`${chatDate}`] = [chat]
  }

  return (
    <div className='list-chat pb-2'>
      {Object.keys(orderedChats).map((obj) => {
        return (
          <React.Fragment key={obj}>
            <div className='d-flex justify-content-center'>
              <p className='d-inline-block my-3 py-2 px-3 bg-light shadow-sm rounded'>
                {obj}
              </p>
            </div>
            <div className='d-flex flex-column gap-2'>
              {orderedChats[obj].map((chat) => {
                return (
                  <ChatItem
                    id={chat.id}
                    name={chat.name}
                    chat={chat.chat}
                    createdAt={chat.createdAt}
                    username={name}
                    key={chat.id}
                  />
                )
              })}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
