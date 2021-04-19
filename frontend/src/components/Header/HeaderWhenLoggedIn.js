import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeTokenAction } from '../../actions/userActions';
import { unloadActualItemAction } from '../../actions/itemActions';
import HeaderButton from './HeaderButton';
import HeaderDropdownButton from './HeaderDropdownButton';

const HeaderWhenLoggedIn = () => {
  const { userName } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogOut = () => {
    dispatch(removeTokenAction());
  }

  const unloadActualItem = () => {
    dispatch(unloadActualItemAction());
  }
  
  return(
    <div id='header'>
      <p>Hi <strong>{userName}</strong>!</p>
      <div id='header-logged-in-button-box'>
        { location.pathname === '/main/marketplace' || location.pathname === '/main'
        ?
        <div id='leftButtonBox'>
          <HeaderButton path="/main/createitem" innerText="Create item!"/>
          <HeaderDropdownButton />
        </div>
        :
        <HeaderButton path="/main/marketplace" innerText="Marketplace!" onClickEvent={unloadActualItem}/>
        }
        <HeaderButton path="/login" innerText="Log out!" onClickEvent={handleLogOut}/>
      </div>
    </div>
  )
};

export default HeaderWhenLoggedIn;