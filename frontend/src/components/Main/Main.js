import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './Main.css';
import CreateItem from '../CreateItem/CreateItem';
import Marketplace from '../Marketplace/Marketplace';
import ItemDetails from '../Marketplace/ItemDetails';

const Main = () => {
  const { currencyAccount } = useSelector(state => state.user);
  const { errorMessage } = useSelector(state => state.item);

  return (
    <div id="main">
      <div id="mainHeader">
        <h1 id="marketplace-header">greenBay</h1>
        {errorMessage && <p id="errorMessage">ERROR: {errorMessage}</p>}
        <p id="userCurrencyAccount">Balance: {currencyAccount.toLocaleString().split(',').join('.')} ,- HUF</p>
      </div>
      <Switch>
        <Route exact path="/main">
          <Marketplace />
        </Route>
        <Route path="/main/createitem">
          <CreateItem />
        </Route>
        <Route path="/main/marketplace">
          <Marketplace />
        </Route>
        <Route path="/main/itemdetails">
          <ItemDetails />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
