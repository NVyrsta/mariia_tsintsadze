import React from 'react';
import { NavLink } from 'react-router-dom';
import arrowBack from '../../assets/images/icons/arrow-back.svg';

export const Cases = () => {
  return (
        <div className="cases">
      <NavLink to="/experience" className={'arrow-back'}>
        <img src={arrowBack} alt="go experience" />
      </NavLink>
        <h2>MY CASES</h2>

      <NavLink to="/contacts" className={'arrow-next'}>
        <img src={arrowBack} alt="go contacts" />
      </NavLink>
    </div>
  );
};
