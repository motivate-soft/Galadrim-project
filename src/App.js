import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Cloud from './pages/cloud';

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cloud" component={Cloud}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
