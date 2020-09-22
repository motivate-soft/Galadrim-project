import React from 'react';

import LeftTopImage from '../../../assets/Images/who-we-are/banner-left-background.svg';
import RightTopImage from '../../../assets/Images/who-we-are/banner-right-background.svg';
import { GrayButton } from '../Elements/Buttons';
import styled from 'styled-components';

const CustomGrayButton = styled(GrayButton)`
    display: flex;
    justify-content: center;
    max-width: 122px;
    width: 100%;
    padding-top: 4px;
    padding-bottom: 4px;
    /* padding: 4px 32px; */
`


export default function WhoBanner() {
    return (
        <div className="section who-banner">
            <img src={LeftTopImage} className='top-left' alt="Left Background" />
            <img src={RightTopImage} className='top-right' alt="Right Background" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-darkblue text-center">
                        <h2>
                            Nous agrégeons les meilleurs technologies IT
                            pour qu’elles puissent vous être bénéfiques
                            au quotidien.
                        </h2>
                        <h5>
                            Imaginez votre système d’information de demain :<br />
                            Nous vous proposons des technologies évolutives au fil du temps et des usages
                        </h5>
                        <div className="d-flex who-banner-button-container justify-content-center">
                            <div className="row who-banner-button-container">
                                <div className="col-6 col-sm-6 col-md-3">
                                    <CustomGrayButton>Histoire</CustomGrayButton>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <CustomGrayButton>Groupe</CustomGrayButton>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <CustomGrayButton>Approche</CustomGrayButton>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <CustomGrayButton>Talents</CustomGrayButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}