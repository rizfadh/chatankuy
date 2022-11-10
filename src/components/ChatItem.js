import React from 'react';
import { formattedDateAndTime } from '../utils/service';
import { MdDelete } from 'react-icons/md';
import { deleteChat } from '../utils/backend';

export default function ChatItem({ id, name, chat, createdAt }) {

  const rawDate = createdAt.toDate();
  const [, time] = formattedDateAndTime(rawDate);

  const onDelete = async () => {
    await deleteChat(id);
  };

  return (
    <div className="card bg-light border-0 shadow-sm">
      <div className="row g-0">
        <div className="col-10 d-flex align-items-center">
          <div className="card-body py-2">
            <div className='d-flex justify-content-between'>
              <p className="card-title fw-bold text-break mb-0">{name}</p>
              <small className="text-muted">{`${time}`}</small>
            </div>
            <p className="card-text text-break mb-0">{chat}</p>
          </div>
        </div>
        <div className="col-2">
          <button className='btn w-100 h-100 d-flex align-items-center justify-content-center btn-primary rounded-0 rounded-end fs-1' onClick={onDelete}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  )
}