import React from 'react';
import { BiSend } from 'react-icons/bi';

export default function ChatInput({ sendChat }) {
  const [value, setValue] = React.useState('');
  const valueChange = (e) => setValue(e.target.value);
  const send = () => {
    setValue('');
    sendChat(value);
  };

  return (
    <div className='container input-group fixed-bottom p-2'>
      <input type="text" className="form-control" placeholder="Masukkan pesan..." aria-label="Username" value={value} onChange={valueChange} />

      {
        value.trim().length === 0 ? (
          <button className="btn btn-primary" type="button" disabled><BiSend /></button>
        ) : (
          <button className="btn btn-primary" type="button" onClick={send}><BiSend /></button>
        )
      }

    </div>
  );
}