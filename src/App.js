import React from 'react';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import './App.scss';
import Home from './pages/Home';

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
