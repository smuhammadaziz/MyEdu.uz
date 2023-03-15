import React from 'react';
import './create.scss';

import { NavLink } from 'react-router-dom';

function Create() {
  return (
    <div className='create'>
      <div className='container'>
        <form className='create__form'>
          <p>
            <NavLink to='/'>Ortga qaytish</NavLink>
          </p>
          <h2 className='text-center mb-5'>Ro'yhatdan o'tish</h2>
          <div class='row'>
            <div class='col'>
              <input type='text' class='form-control' placeholder='Ismingiz' />
            </div>
            <div class='col'>
              <input type='text' class='form-control' placeholder='Familiyangiz' />
            </div>
          </div>
          <div class='row my-3'>
            <div class='col'>
              <input type='text' class='form-control' placeholder='Yashash joyingiz' />
            </div>
            <div class='col'>
              <input type='text' class='form-control' placeholder='Telefon raqamingiz' />
            </div>
          </div>
          <div class='row my-3'>
            <div class='col'>
              <input
                type='text'
                class='form-control'
                placeholder='Sinfingiz nomini yozing'
              />
            </div>
            <div class='col'>
              <input type='text' class='form-control' placeholder='Parolingiz' />
            </div>
          </div>
          <h4 className='text-center my-3'>Sinfga mos fanlarni tanglang: </h4>
          <div className='mx-auto '>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox1'
                value='option1'
              />
              <label class='form-check-label' for='inlineCheckbox1'>
                Algebra
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Geometriya
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Fizika
              </label>
            </div>
          </div>
          <div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox1'
                value='option1'
              />
              <label class='form-check-label' for='inlineCheckbox1'>
                Ingliz tili
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Kompyuter tarmoqlari
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Web dasturlash
              </label>
            </div>
          </div>
          <div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox1'
                value='option1'
              />
              <label class='form-check-label' for='inlineCheckbox1'>
                Grafika
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Mobil dasturlash
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Tarix
              </label>
            </div>
          </div>
          <div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox1'
                value='option1'
              />
              <label class='form-check-label' for='inlineCheckbox1'>
                Ona tili
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Adabiyot
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Kimyo
              </label>
            </div>
          </div>
          <div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox1'
                value='option1'
              />
              <label class='form-check-label' for='inlineCheckbox1'>
                O'zbekiston tarixi
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Jahon tarixi
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Chizmachilik
              </label>
            </div>
          </div>
          <div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox1'
                value='option1'
              />
              <label class='form-check-label' for='inlineCheckbox1'>
                Fransuz tili
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Rus tili
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Nemis tili
              </label>
            </div>
          </div>
          <div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox1'
                value='option1'
              />
              <label class='form-check-label' for='inlineCheckbox1'>
                Tarbiya
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                Musiqa
              </label>
            </div>
            <div class='form-check form-check-inline'>
              <input
                class='form-check-input'
                type='checkbox'
                id='inlineCheckbox2'
                value='option2'
              />
              <label class='form-check-label' for='inlineCheckbox2'>
                O'qish
              </label>
            </div>
          </div>

          <button className='btn btn-primary mx-auto d-block my-3'>
            <a
              href='https://hackaton-dashboard-students.netlify.app'
              className='text-white text-decoration-none'
              target='_blank'
            >
              Sinf yaratish
            </a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
