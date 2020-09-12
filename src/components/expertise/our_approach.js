import React from 'react';
//assets
import Cart1Image from '../../assets/home/images/article.jpg';
import GreenFormesImage from '../../assets/expertise/cloud/vert-mini@3x.png'

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
                                    <div className={'card text-card card1'}>
                                        <div className={"left-green-squre"} style={{backgroundColor: props.theme.mainColor}}/>
                                        <div className="media">
                                            <h1 className={'text-danger align-self-center'} style={{color: "#ff5e4d"}}>01•</h1>
                                            <div className="media-body" style={{maxWidth:'200px'}}>
                                                <h5 className="mt-0 text-danger" style={{color: "#ff5e4d"}}>Conception & architecture </h5>
                                            </div>
                                        </div>
                                        <p>Analyse et audit de l'existant et propositions de nouvelles architectures.</p>
                                    </div>
                                    <div className={"image-box image-hidden-able mt-4 mb-4"}>
                                        <img src={Cart1Image} alt=""/>
                                    </div>

                                    <div className={'card text-card card2'}>
                                        <div className="media">
                                            <h1 className={'text-success align-self-center'} >02•</h1>
                                            <div className="media-body" style={{maxWidth:'200px'}}>
                                                <h5 className="mt-0 text-success">Conception & architecture </h5>
                                            </div>
                                        </div>
                                        <p>Analyse et audit de l'existant et propositions de nouvelles architectures.</p>
                                    </div>
                                </div>
                                <div className={'col-md-6'}>
                                    <div className={"spacer-100 space-content mb-3"}/>
                                    <div className={'card text-card card3'}>
                                        <div className="media">
                                            <h1 className={'text-primary align-self-center'} >03•</h1>
                                            <div className="media-body" style={{maxWidth:'200px'}}>
                                                <h5 className="mt-0 text-primary" >Conception & architecture </h5>
                                            </div>
                                        </div>
                                        <p>Analyse et audit de l'existant et propositions de nouvelles architectures.</p>
                                    </div>
                                    <div style={{position: "relative"}}>
                                        <div className={"image-box bottom-right-radius mt-4 mb-3"}>
                                            <img src={Cart1Image} alt=""/>
                                        </div>
                                        <img src={GreenFormesImage} className={"right-bottom-image"} alt=""/>
                                    </div>
                                    <div className={"circle"} style={{backgroundColor: props.theme.secondaryColor}}/>
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