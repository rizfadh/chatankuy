import React from 'react';
import { formattedDateAndTime } from '../utils/service';
import { MdDelete } from 'react-icons/md';
import { deleteChat } from '../utils/backend';

export default function ChatItem({ id, name, chat, createdAt }) {

  if (createdAt === null) return null;

  const rawDate = createdAt.toDate();
  const [date, time] = formattedDateAndTime(rawDate);
  const onDelete = async () => {
    await deleteChat(id);
  };

  return (
    <div className="card my-2 bg-light">
      <div className="row g-0">
        <div className="col-10">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-justify">{chat}</p>
            <p className="card-text"><small className="text-muted">{`${date} Jam ${time}`}</small></p>
          </div>
        </div>
        <div className="col-2">
          <button className='btn w-100 h-100 btn-primary fs-1' onClick={onDelete}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  )
}