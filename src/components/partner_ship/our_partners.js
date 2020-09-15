import React from 'react';

export default function OurPartners() {
    return (
      <div className={'our_partners'}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-12 text-center'}>
                    <h5>Ils avancent à nos côtés</h5>
                    <h1>Nos partenaires</h1>
                </div>
                <div className={'col-lg-12 brand-area'}>
                    <div className={'row'}>
                        <div className={'col-lg-3'}>
                            <div className={'image-area'}>

                            </div>
                            <div className={'navigation-area text-center'}>
                                <div className={'collapse-control'}>

                                </div>
                            </div>
                            <div className={'collapsed-area'}>
                                <div className={'text-center'}>
                                    <h3>Nous détenons plusieurs certifications Microsoft :</h3>
                                    <div className={'lists'}>
                                        <li>
                                            GOLD Cloud Platform
                                        </li>
                                        <li>
                                            GOLD Cloud Productivity
                                        </li>
                                        <li>
                                            GOLD Small and Midmarket CloudSolutions
                                        </li>
                                        <li>
                                            Silver Datacenter
                                        </li>
                                        <li>
                                            Silver Collaboration and Content
                                        </li>
                                    </div>
                                    <button className={'btn btn-custom'}>
                                        En savoir plus
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}