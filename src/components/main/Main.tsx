import React from 'react';
import { NavLink } from 'react-router-dom';
import './main.scss';
import heroImg from '../../assets/images/main/hero.png';

export const Main = () => {
  return (
    <div className="intro">
      <div className="intro__content">
        <div className="intro__img-container">

        <img src={heroImg} alt="hero"className='intro__img'/>
        </div>
        <h1 className="intro__title">
          Hello!
          <br />
          My name is Mariia Tsintsadze.
          <br />I am a <span>UI/UX</span> and
          <br />
          <span>graphic designer</span>
        </h1>
      </div>
      <p className="intro__subtitle">more about me</p>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/about" className={'navbar__link'}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={'navbar__link'}>
              My Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/cases" className={'navbar__link'}>
              MY CASES
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={'navbar__link'}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
