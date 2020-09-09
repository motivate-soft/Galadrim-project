import React from 'react';
import ArticleImage from '../../assets/home/images/article.jpg';
import LeftTipBg from '../../assets/home/images/saumon_2.png';
import LeftTipBg1 from '../../assets/home/images/orange@2x.png';



export default function ReadyForFuture() {
    return (
      <div id="ready_for_future" style={{'paddingTop': '129px','paddingBottom': '129px'}}>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 p-3">
                      <div className="card card-body text-center">
                          <img src={LeftTipBg} className="left-top-bg" alt="" style={{'top':'-32px','left':'-32px'}}/>
                          <h4 style={{'fontSize':'21px'}} className="text-blue mb-5 mt-3 text-uppercase vertical-gradient">Rejoignez l'aventure Efisens !</h4>
                          <h2 className="text-blue mt-5 mb-4">Êtes-vous prêt à construire l'avsenir?</h2>
                          <p className="text-blue mt-5">Si vous êtes passionnés par la technologie et que vous souhaitez intégrer un environnement de travail stimulant - Rejoignez-nous !</p>
                          <button className="btn btn-custom-info mt-5">
                              Accéder à nos offres d'emploi
                          </button>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="row">
                          <div className="col-6 p-3">
                              <div className="image-box">
                                  <img src={ArticleImage} alt=""/>
                              </div>
                          </div>
                          <div className="col-6 p-3">
                              <div className="image-box bottom-left-radius top-right-radius">
                                  <img src={ArticleImage} alt=""/>
                              </div>
                          </div>
                          <div className="col-6 p-3">
                              <img src={LeftTipBg1} className="left-top-bg" style={{'left':'15px','top':'15px','width':'40%'}} alt=""/>
                              <div className="image-box image-box-circle">
                                  <img src={ArticleImage} alt=""/>
                              </div>
                          </div>
                          <div className="col-6 p-3">
                              <div className="image-box bottom-left-radius">
                                  <img src={ArticleImage} alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}