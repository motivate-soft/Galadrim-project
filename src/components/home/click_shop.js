import React from 'react';

import BookImage from '../../assets/home/images/group-3.png'
import BackImage from '../../assets/home/images/group-2.png'

export default function ClickShop () {
    return (
      <div id="click_shop">
          <div className="container">
              <div className="row top-layer">
                  <div className="col-lg-12 text-center">
                      <h1 className="text-blue">Efisens Clic & Shop</h1>
                      <p className="text-blue mb-5 mt-3">Vos achats informatiques d'entreprise en toute simplicité.</p>
                      <div className="mb-5">
                          <img src={BookImage} alt=""/>
                      </div>
                      <div className="mt-3 mb-3">
                          <button className="btn btn-danger btn-custom">
                              Découvrir notre boutique
                          </button>
                      </div>
                  </div>
              </div>
              <div className="row bottom-layer">
                  <div className="col-lg-12 text-center">
                      <img src={BackImage} alt="" style={{'width': '100%'}}/>
                  </div>
              </div>
          </div>
      </div>
    );
}