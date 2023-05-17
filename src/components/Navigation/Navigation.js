import './Navigation.css';
import { NavLink } from 'react-router-dom';
// import React, { useState } from 'react';


function Navigation() {

  //---РАЗМЕТКА JSX---
  return (
    <nav className='menu'>


          <div className='menu__box'>
            <NavLink to='/' activeclassname ='menu__film-link_active' className='menu__film-link app__link'>
              Главная
            </NavLink>
          </div>

    </nav>
  );
};

export default Navigation;
