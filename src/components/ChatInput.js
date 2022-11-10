import React from 'react';
import { BiSend } from 'react-icons/bi';

export default function ChatInput({ sendChat }) {

  const [value, setValue] = React.useState('');
  const valueChange = (e) => setValue(e.target.value);

  const send = (e) => {
    e.preventDefault();
    setValue('');
    sendChat(value);
  };

  return (
    <form onSubmit={send} className='container fixed-bottom pb-3'>
      <div className='row g-0 shadow-sm'>
        <div className='col-10'>
          <input type='text' className='form-control input-size rounded-0 rounded-start' placeholder='Masukkan pesan...' aria-label='Username' value={value} onChange={valueChange} />
        </div>
        <div className='col-2'>
          {
            value.trim().length === 0 ? (
              <button className='btn w-100 d-flex align-items-center justify-content-center input-size btn-primary rounded-0 rounded-end' disabled><h2><BiSend /></h2></button>
            ) : (
              <button type='submit' className='btn w-100 d-flex align-items-center justify-content-center input-size btn-primary rounded-0 rounded-end'><h2><BiSend /></h2></button>
            )
          }
        </div>
      </div>
    </form>
  );
}