import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutImg from '../../assets/images/about/about.png';
import arrowBack from '../../assets/images/icons/arrow-back.svg';

import './about.scss';

export const About = () => {
  return (
    <div className="about">
      <NavLink to="/" className={'arrow-back'}>
        <img src={arrowBack} alt="go back" />
      </NavLink>

      <div className="about__content">
        <h2 className="about__title">About me</h2>
        <div className="about__img-container">
          <img src={aboutImg} alt="about" className='about__img'/>
        </div>
      </div>

      <NavLink to="/experience" className={'arrow-next'}>
        <img src={arrowBack} alt="go next" />
      </NavLink>
    </div>
  );
};
