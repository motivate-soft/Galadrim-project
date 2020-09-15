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
                                {props.theme.ourApproach.title}
                            </h1>
                            <h5 style={{color: props.theme.mainColor}} className={'subtitle'}>
                                {props.theme.ourApproach.subtitle}
                            </h5>
                        </div>
                        <div className={'cart-area'}>
                            <div className={'row'}>
                                <div className={'col-md-6 text-left'}>
                                    <div className={'card text-card card1'}>
                                        <div className={"left-green-squre"} style={{backgroundColor: props.theme.mainColor}}/>
                                        <div className="media">
                                            <h1 className={'text-danger align-self-center'} style={{color: "#ff5e4d"}}>01•</h1>
                                            <div className="media-body" style={{maxWidth:props.theme.ourApproach.cards.card1.titleMaxWidth}}>
                                                <h5 className="mt-0 text-danger" style={{color: "#ff5e4d"}}>{props.theme.ourApproach.cards.card1.title} </h5>
                                            </div>
                                        </div>
                                        <p>{props.theme.ourApproach.cards.card1.description}</p>
                                    </div>
                                    <div className={"image-box image-hidden-able mt-4 mb-4"}>
                                        <img src={props.theme.ourApproach.image1} alt=""/>
                                    </div>

                                    <div className={'card text-card card3'}>
                                        <div className="media">
                                            <h1 className={'text-primary align-self-center'} >03•</h1>
                                            <div className="media-body" style={{maxWidth:props.theme.ourApproach.cards.card3.titleMaxWidth}}>
                                                <h5 className="mt-0 text-primary" >{props.theme.ourApproach.cards.card3.title} </h5>
                                            </div>
                                        </div>
                                        <p>{props.theme.ourApproach.cards.card3.description}</p>
                                    </div>
                                </div>
                                <div className={'col-md-6'}>
                                    <div className={"spacer-100 space-content mb-3"}/>
                                    <div className={'card text-card card2'}>
                                        <div className="media">
                                            <h1 className={'text-success align-self-center'} >02•</h1>
                                            <div className="media-body" style={{maxWidth:props.theme.ourApproach.cards.card2.titleMaxWidth}}>
                                                <h5 className="mt-0 text-success">{props.theme.ourApproach.cards.card2.title} </h5>
                                            </div>
                                        </div>
                                        <p>{props.theme.ourApproach.cards.card2.description}</p>
                                    </div>

                                    <div style={{position: "relative"}}>
                                        <div className={"image-box bottom-right-radius mt-4 mb-3"}>
                                            <img src={props.theme.ourApproach.image1} alt=""/>
                                        </div>
                                        <img src={props.theme.ourApproach.bottomImage} className={"right-bottom-image"} alt=""/>
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