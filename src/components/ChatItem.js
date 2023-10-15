import React from 'react'
import { formattedDateAndTime } from '../utils/service'
import { MdDelete } from 'react-icons/md'
import { deleteChat } from '../utils/backend'

export default function ChatItem({ id, name, chat, createdAt, username }) {
  const rawDate = createdAt.toDate()
  const [, time] = formattedDateAndTime(rawDate)

  const onDelete = async () => {
    await deleteChat(id)
  }

  return (
    <div className='card bg-light border-0 shadow-sm'>
      <div className='card-body py-2'>
        <div className='d-flex justify-content-between'>
          <p className='card-title fw-bold text-break mb-0'>{name}</p>
          <small className='text-muted'>{`${time}`}</small>
        </div>
        <div className='d-flex justify-content-between'>
          <p className='card-text text-break mb-0 me-2 d-flex align-self-center'>
            {chat}
          </p>
          <div className='d-flex align-items-center'>
            {username === name ? (
              <button
                className='d-flex align-items-center justify-content-center border-0 rounded text-primary fs-5 py-2'
                onClick={onDelete}
              >
                <MdDelete />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
