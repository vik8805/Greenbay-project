import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilterToLoadItemsAction } from '../../actions/itemActions';

const HeaderDropdownButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const setFilterToFalse = () => {
    dispatch(setFilterToLoadItemsAction(false));
    history.push(`/main/marketplace`);
  };

  const setFilterToTrue = () => {
    dispatch(setFilterToLoadItemsAction(true));
    history.push(`/main/marketplace`);
  };

  return(
    <div id="filterBtnBox">
      <button id="filterBtn">Filter</button>
      <div id="dropdownList">
        <button className="filterOptionBtn" type="button" onClick={setFilterToFalse}>View all</button>
        <button className="filterOptionBtn" type="button" onClick={setFilterToTrue}>View unsold only</button>
      </div>
    </div>
  )
};

export default HeaderDropdownButton;







