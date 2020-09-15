import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom';
import routes from './../../routes';

// const switchRoutes = (
//   <Switch>
//     {routes.map((prop, key) => (
//       <Route
//         key={key}
//         path={prop.path}
//         component={prop.component}
//       />
//     ))}
//   </Switch>
// );

export default function DefaultLayout(props) {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((route, key) => (
          <Route
            key={route}
            exact={true}
            path={route.path}
            name={route.name}
            component={route.component}
          />
        ))}
      </Switch>
      <Footer />
    </>
  )
}
