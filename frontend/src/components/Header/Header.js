import React from 'react';
import { useSelector } from 'react-redux';
import HeaderWhenNotLoggedIn from './HeaderWhenNotLoggedIn';
import HeaderWhenLoggedIn from './HeaderWhenLoggedIn';

import './Header.css';

const Header = () => {
  const { accessToken } = useSelector(state => state.user);

  return accessToken ? <HeaderWhenLoggedIn /> : <HeaderWhenNotLoggedIn />;
};

export default Header;
