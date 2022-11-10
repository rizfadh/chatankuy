import React from 'react';
import UserContext from '../context/UserContext';
import useInput from '../hooks/useInput';
import { FiLogIn } from 'react-icons/fi';

export default function NameInput() {
  const [name, nameChange] = useInput('');
  const { setName } = React.useContext(UserContext);

  const login = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) alert('Nama Tidak Boleh Kosong!');
    else setName(name);
  };

  return (
    <form onSubmit={login}>
      <div className='row g-0 shadow-sm'>
        <div className='col-10'>
          <input type='text' className='form-control input-size rounded-0 rounded-start' placeholder='Masukkan nama kamu' aria-label='Username' value={name} onChange={nameChange} />
        </div>
        <div className='col-2'>
          {
            name.trim().length === 0 ? (
              <button className='btn w-100 d-flex align-items-center justify-content-center input-size btn-primary rounded-0 rounded-end' disabled><h2><FiLogIn /></h2></button>
            ) : (
              <button type='submit' className='btn w-100 d-flex align-items-center justify-content-center input-size btn-primary rounded-0 rounded-end'><h2><FiLogIn /></h2></button>
            )
          }
        </div>
      </div>
    </form>
  );
}