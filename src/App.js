import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Home from './pages/home';
import WhoWeAre from "./pages/who_we_are";
import PartnerShip from "./pages/partner_ship";
import ClickShopping from "./pages/click_shopping";
import Laboratory from "./pages/laboratory";
import Career from "./pages/career";
import Contact from "./pages/contact";
import ExpertiseCloud from "./pages/expertise_cloud";
import ExpertiseSecurity from "./pages/expertise_security";
import ExpertiseModernWorkplace from "./pages/expertise_modern_workplace";
import ExpertiseServiceManager from "./pages/expertise_service_manager";

function App() {
  return (
      <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/qui-sommes-nous" component={WhoWeAre}/>
                    <Route exact path="/expertises/cloud" component={ExpertiseCloud}/>
                    <Route exact path="/expertises/modern-workplace" component={ExpertiseModernWorkplace}/>
                    <Route exact path="/expertises/securite" component={ExpertiseSecurity}/>
                    <Route exact path="/expertises/services-manages" component={ExpertiseServiceManager}/>
                    <Route exact path="/partenariats" component={PartnerShip}/>
                    <Route exact path="/clic-shop" component={ClickShopping}/>
                    <Route exact path="/lab" component={Laboratory}/>
                    <Route exact path="/carrieres" component={Career}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
            </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
