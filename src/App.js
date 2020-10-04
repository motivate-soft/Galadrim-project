import React from 'react'
import { Switch, BrowserRouter } from 'react-router-dom';

// style
import "./App.scss"

// Layout
import DefaultLayout from './views/Layout/DefaultLayout';


export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <DefaultLayout />
        {/* <Route path="/" render={props => <DefaultLayout {...props} />} /> */}
      </BrowserRouter>
    </React.Fragment>
  )
}
