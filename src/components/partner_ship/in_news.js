import React from 'react';
import RightImage from '../../assets/home/images/article.jpg';
import RightBottomImage from '../../assets/formes/charts/s-curit.svg'

export default function InNews() {
    return (
        <div className={'in_news'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-8 ml-auto mr-auto text-center'}>
                        <div className={'title-area'}>
                            <h1>C'est au contact d'experts techniques, de leaders technologiques et de partenaires stratégiques que nous innovons ! </h1>
                        </div>
                    </div>
                    <div className={'col-lg-10 ml-auto mr-auto card-area'}>
                        <div className={'wide-card'}>
                            <div className={'row justify-center'}>
                                <div className={'col-lg-5'}>
                                    <div className={'image-part'}>
                                        <div className={'image-case'}>
                                            <img src={RightImage} alt=""/>
                                        </div>
                                    </div>
                                    <img src="" alt=""/>
                                </div>
                                <div className={'col-lg-5'}>
                                    <div className={''}>
                                        <div className={'text-part'}>
                                            <div>
                                                <p>
                                                    Afin d’apporter le meilleur service à nos clients, nous travaillons en étroite collaboration avec un écosystème de plus d’une dizaine de partenaires qui  nous accompagne et renforce notre offre d'expertises et de solutions technologiques.
                                                </p>
                                            </div>
                                            <img src={RightBottomImage} className={'right-bottom-image'} alt=""/>
                                        </div>
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