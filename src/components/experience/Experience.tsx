import React from 'react';
import { NavLink } from 'react-router-dom';
import arrowBack from '../../assets/images/icons/arrow-back.svg';

export const Experience = () => {
  return (
    <div className="cases">
      <NavLink to="/about" className={'arrow-back'}>
        <img src={arrowBack} alt="go to about" />
      </NavLink>
      <h2>MY EXPERIENCE</h2>

      <NavLink to="/cases" className={'arrow-next'}>
        <img src={arrowBack} alt="go to my cases" />
      </NavLink>
    </div>
  );
};
