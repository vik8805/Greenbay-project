import React from 'react';
import HeaderButton from './HeaderButton';

const HeaderWhenNotLoggedIn = () => {
  
  return(
    <div id='header'>
      <p>Hi!</p>
      <div id='header-logged-out-button-box'>
        <HeaderButton path="/login" innerText="Log in!"/>
        <HeaderButton path="/register" innerText="Sign up!"/>
      </div>
    </div>
  )
};

export default HeaderWhenNotLoggedIn;