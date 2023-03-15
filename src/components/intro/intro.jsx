import React from 'react';
import './intro.scss';
import img1 from '../../assets/img1.png';

import { NavLink } from 'react-router-dom';

function Intro() {
  return (
    <div className='intro'>
      <div className='container'>
        <div className='intro__left'>
          <h1>Biz bilan birga o'rganing</h1>
          <p>O'zbekistondagi birinchi MyEdu.uz Ta'lim Platformasi</p>
          <NavLink to='/entering' className='header__button__link'>
            Sinf kodini kiriting
          </NavLink>
        </div>

        <div className='intro__right'>
          <img src={img1} alt='img1 logo' width='380' />
        </div>
      </div>
    </div>
  );
}

export default Intro;
