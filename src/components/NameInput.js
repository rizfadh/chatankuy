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
    <div className='row g-0'>
      <div className="col-10">
        <input type="text" className="form-control input-size rounded-0 rounded-start" placeholder="Masukkan nama kamu" aria-label="Username" value={name} onChange={nameChange} />
      </div>
      <div className="col-2">
        <button className="btn w-100 input-size btn-primary rounded-0 rounded-end" type="button" onClick={login}><h3><FiLogIn /></h3></button>
      </div>
    </div>
  );
}