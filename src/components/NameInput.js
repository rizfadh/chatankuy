import React from 'react';
import UserContext from '../context/UserContext';
import useInput from '../hooks/useInput';
import { FiLogIn } from 'react-icons/fi';

export default function NameInput() {
  const [name, nameChange] = useInput('');
  const { setName } = React.useContext(UserContext);
  const login = () => {
    if (name.trim().length === 0) alert('Nama Tidak Boleh Kosong!');
    else {
      setName(name);
    }
  };

  return (
    <div className='input-group'>
      <input type="text" className="form-control" placeholder="Masukkan nama kamu" aria-label="Username" value={name} onChange={nameChange} />
      <button className="btn btn-primary" type="button" onClick={login}><FiLogIn /></button>
    </div>
  );
}