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
    <div className='row g-0 sticky-bottom pt-2 pb-3'>
      <div className='col-10'>
        <input type="text" className="form-control input-size rounded-0 rounded-start" placeholder="Masukkan pesan..." aria-label="Username" value={value} onChange={valueChange} />
      </div>
      <div className='col-2'>
        {
          value.trim().length === 0 ? (
            <button className="btn w-100 input-size btn-primary rounded-0 rounded-end" type="button" disabled><h3><BiSend /></h3></button>
          ) : (
            <button className="btn w-100 input-size btn-primary rounded-0 rounded-end" type="button" onClick={send}><h3><BiSend /></h3></button>
          )
        }
      </div>

    </div>
  );
}