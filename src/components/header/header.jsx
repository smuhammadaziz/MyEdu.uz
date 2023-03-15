import React from 'react';
import './header.scss';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo__wrapper'>
          <NavLink to='/' className='header__logo__wrapper__link'>
            <p>MyEdu.uz</p>
          </NavLink>
        </div>

        <nav className='header__navbar'>
          <ul className='header__list'>
            <li className='header__list__item'>
              <NavLink to='/' className='header__list__item__link'>
                Bosh sahifa
              </NavLink>
            </li>
            <li className='header__list__item'>
              <NavLink to='/' className='header__list__item__link'>
                Statistika
              </NavLink>
            </li>
            <li className='header__list__item'>
              <NavLink to='/' className='header__list__item__link'>
                Bog'lanish
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className='header__createbutton'>
          <NavLink to='/create' className='header__button__link'>
            Sinf yaratish
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
