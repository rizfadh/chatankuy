import React from 'react'
import NameInput from './NameInput'

export default function Landing() {
  return (
    <section className='container h-100'>
      <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
        <h2 className='logo bg-primary px-3 py-2 rounded text-white'>
          ChatanKuy!
        </h2>
        <p>Aplikasi grup chat anonim tanpa harus daftar!</p>
        <div className='w-100'>
          <NameInput />
        </div>
      </div>
    </section>
  )
}
