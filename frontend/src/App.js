import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import RootRedirect from './components/RootRedirect/RootRedirect'
import Header from './components/Header/Header'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Main from './components/Main/Main'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <RootRedirect />
        </Route>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
