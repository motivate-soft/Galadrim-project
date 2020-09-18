import React from 'react';

import DiscussImage from '../../assets/who_we_are/discuss1.jpg';
import RightBottomImage from '../../assets/formes/charts/s-curit.svg'

export default function RightImage() {
    return (
      <div className={'right_image_section'}>
          <div className={'container'}>
              <div className={'row'}>
                  <div className={'col-lg-6'}>
                      <img src={RightBottomImage} className={'right-bottom-image'} alt=""/>
                  </div>
                  <div className={'col-lg-6'}>
                      <div className={'action_content'}>
                          <p>Notre ambition est très claire :  Décomplexer l'IT,  en proposant des solutions standardisées ou sur mesure et en co-construisant les futurs projets (cloud, infrastructure, sécurité et modern workplace) avec nos clients.</p>
                          <p>Nous combinons notre capacité d'innovation et nos expertises avec celles des plus gros  partenaires de notre écosystème, comme Microsoft et Nutanix, pour aller plus loin que la simple conception d'architectures et de services.</p>
                          <button className={'btn btn-danger'}>
                              Voir nos partenaires technologiques
                          </button>
                      </div>
                  </div>
              </div>
          </div>
          <div className={'container-fluid'}>
              <div className={'row'}>
                  <div className={'col-lg-6'}>
                      <div className={'row'}>
                          <div>
                              <img src={DiscussImage} alt=""/>
                          </div>
                      </div>
                  </div>
                  <div className={'col-lg-6'}/>
              </div>
          </div>
      </div>
    );
}