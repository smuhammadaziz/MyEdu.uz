import React from 'react';
import './style.scss';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [value, setValue] = useState(null);
  const [num, setNum] = useState(null);
  const [mail, setmail] = useState(null);
  function notify() {
    if (
      value.trim().length == null ||
      num.trim().length == null ||
      mail.trim().length == null
    ) {
      toast.success('nice login !');
    } else {
      toast.warn('Iltimos malumotni toldiring !');
    }
  }

  return (
    <div className='forms'>
      <ToastContainer />
      <div className='container'>
        <h1 className='blue sarlavha2' style={{ padding: '50px' }}>
          Savollaringiz bormi?
        </h1>
        <form action='/' method='Get'>
          <div className='inputs'>
            <div className='input'>
              <p>FIO</p>
              <input
                type='text'
                placeholder='full name'
                onChange={e => setValue(e.target.value)}
              />
            </div>
            <div className='input'>
              <p>Telefon nomer</p>
              <input
                type='number'
                placeholder='number'
                onChange={e => setNum(e.target.value)}
              />
            </div>
            <div className='input'>
              <p>Email pochta</p>
              <input placeholder='email' onChange={e => setmail(e.target.value)} />
            </div>
          </div>
          <div className='textarea'>
            <p>Qo'shimcha izoh</p>
            <textarea name='' id='input' cols='30' rows='10'></textarea>
            <button type='submit' onClick={notify}>
              Yuborish
            </button>
             
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
