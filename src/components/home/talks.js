import React from 'react';
import { Send } from '@material-ui/icons';
import BgImageBlueHalf from '../../assets/home/images/bg4.png';
import ImageSquare from '../../assets/home/images/saumon.png';
import ImageTriangle from '../../assets/home/images/2.png';

export default function Talk () {
    return (
      <div className="position-relative talk-section">
          <img src={BgImageBlueHalf} alt="background" className="bg-blue-half-rotate"/>
          <div className= 'position-absolute red-right-top-semi-circle' style={{'bottom': '-60px'}}/>
          <div className="container">
              <div className="card card-body bg-white">
                  <img src={ImageTriangle} alt="Triangle" className="image-triangle"/>
                  <img src={ImageSquare} alt="ImageSquare" className="image-square"/>
                  <div className="row">
                      <div className="col-lg-1"/>
                      <div className="col-lg-5">
                          <h3 className="text-blue">
                              Efisens Talks
                          </h3>
                          <div className="pick-item mb-1">
                              <div className="bg-blue" style={{'marginLeft': '-42px'}}/>
                          </div>
                          <p className="text-blue mb-0 roboto-font">
                              Nos experts partagent régulièrement leur savoir faire et leur expérience. Apprenez, lisez et servez -vous !
                          </p>
                      </div>
                      <div className="col-lg-1"/>
                      <div className="col-lg-4">
                          <h5 className="text-green text-uppercase">
                              S’inscrire à notre newsletter
                          </h5>
                          <div className="news-letter">
                              <form>
                                  <div className="form-group position-relative">
                                      <input type="text" className="form-control news-letter-input" placeholder="Votre email"/>
                                      <button type="submit" className="submit news-letter-submit">
                                          <Send/>
                                      </button>
                                  </div>
                              </form>
                          </div>
                          <h6 className="text-green roboto-regular">
                              En renseignant votre adresse email, vous accepter de recevoir nos derniers articles de blog par courrier électronique et vous prenez connaissances de notre politique de protection des données personnelles. Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en nous contactant ici.
                          </h6>
                      </div>
                      <div className="col-lg-1"/>
                  </div>
              </div>
          </div>
      </div>
    );
}