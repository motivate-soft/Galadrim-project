import React from 'react'
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

// style
import "./App.scss"

// Layout
import DefaultLayout from './views/Layout/DefaultLayout';


export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={props => <DefaultLayout {...props} />} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}
