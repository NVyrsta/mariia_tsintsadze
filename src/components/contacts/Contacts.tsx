import React from 'react';
import { NavLink } from 'react-router-dom';
import arrowBack from '../../assets/images/icons/arrow-back.svg';

export const Contacts = () => {
  return (
    <div className="cases">
      <NavLink to="/cases" className={'arrow-back'}>
        <img src={arrowBack} alt="go to my cases" />
      </NavLink>
      <h2>MY contacts</h2>

      <NavLink to="/" className={'arrow-next'}>
        Main page
      </NavLink>
    </div>
  );
};
