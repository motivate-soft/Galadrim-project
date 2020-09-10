import React from 'react';

export default function OurApproach(props) {
    return (
      <>
        <div className="our_approach">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className={'title-area'}>
                            <h1 style={{color: props.theme.mainColor}}>
                                Notre démarche
                            </h1>
                            <h5 style={{color: props.theme.mainColor}} className={'subtitle'}>
                                En fonction de vos challenges technologiques et usages, nous pouvons créer, déployer et maintenir des solutions cloud sur mesure, afin de vous permettre de vous concentrer sur vos métiers
                            </h5>
                        </div>
                        <div className={'cart-area'}>
                            <div className={'row'}>
                                <div className={'col-md-6 text-left'}>
                                    <div className={'card text-card'}>
                                        <div/>
                                        <div className="media">
                                            <h1 className={'text-danger align-self-center'}>01•</h1>
                                            <div className="media-body" style={{maxWidth:'200px'}}>
                                                <h5 className="mt-0 text-danger">Conception & architecture </h5>
                                            </div>
                                        </div>
                                        <p>Analyse et audit de l'existant et propositions de nouvelles architectures.</p>
                                    </div>
                                </div>
                                <div className={'col-md-6'}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}