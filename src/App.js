import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Home from './pages/home';
import DenseAppBar from "./components/global/appbar";
import Header from "./components/header";
import Footer from "./components/footer";
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
import FullScreenNav from "./components/global/full_skin";

function App() {
  return (
      <React.Fragment>
          {/*<DenseAppBar/>*/}
          <FullScreenNav/>
          <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/who_we_are" component={WhoWeAre}/>
                    <Route exact path="/expertise/cloud" component={ExpertiseCloud}/>
                    <Route exact path="/expertise/modern_workplace" component={ExpertiseModernWorkplace}/>
                    <Route exact path="/expertise/security" component={ExpertiseSecurity}/>
                    <Route exact path="/expertise/service_manager" component={ExpertiseServiceManager}/>
                    <Route exact path="/partner_ship" component={PartnerShip}/>
                    <Route exact path="/click_shopping" component={ClickShopping}/>
                    <Route exact path="/laboratory" component={Laboratory}/>
                    <Route exact path="/career" component={Career}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
            </BrowserRouter>
          <Footer/>
      </React.Fragment>
  );
}

export default App;
