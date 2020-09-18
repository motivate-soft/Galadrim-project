import React from 'react';

import LeftTopImage from '../../assets/who_we_are/group-3.svg';
import RightTopImage from '../../assets/who_we_are/group-2.svg';

export default function WhoBanner() {
    return (
      <div className={'who_banner'}>
          <img src={LeftTopImage} className={'left-top-image'} alt=""/>
          <img src={RightTopImage} className={'right-top-image'} alt=""/>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-8'}>
                    <h1>
                        Nous agrégeons les meilleurs technologies IT
                        pour qu’elles puissent vous être bénéfiques
                        au quotidien.
                    </h1>
                    <p>
                        Imaginez votre système d’information de demain :<br/>
                        Nous vous proposons des technologies évolutives au fil du temps et des usages
                    </p>
                    <div className={'buttons-area'}>
                        <button>
                            Histoire
                        </button>
                        <button>
                            Groupe
                        </button>
                        <button>
                            Approche
                        </button>
                        <button>
                            Talents
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}