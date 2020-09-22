import React from 'react'
import LeftBgImage from "../../../assets/Images/left_bg.png"
import RightBgImage from "../../../assets/Images/right_bg.png"
import styled from 'styled-components'
import { CustomButton } from '../Elements/Buttons';

const defaultColor = '#ff5e4d'

const Section = styled.div`
    position: relative;
    display: flex;
    @media (max-width: 767px){
        height: auto;
        img {
            height: 148px !important;
        }
    }
    @media (min-width: 767px){
        height: 200px;
        img.bottom-right {
            height: 90%;
        }
        img.bottom-left{
            height: 100%;
        }
    }
    @media (min-width: 992px){
        height: 300px;
        img.bottom-right {
            height: 90%;
        }
        img.bottom-left{
            height: 100%;
        }
    }
    @media (min-width: 1200px){
        img.bottom-right {
            width: 324px;
            height: auto;
        }
        img.bottom-left{
            height: 100%;
        }
        height: 441px;
    }

`

const FooterTitle = styled.h1`
    font-family: "Gilroy-Bold";
    font-size: 41px;
    color: ${props => props.color !== undefined ? props.color : defaultColor};
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media (max-width: 767px){
        margin: 26px auto 22px;
        font-size: 23px;
    }
    @media (min-width: 767px){
        font-size: 30px;
    }
    @media (min-width: 992px){
        font-size: 41px;
    }
`

const ContactButton = styled(CustomButton)`
    display: block;
    margin: 28px 0;
    padding: 5px 59px;
    max-width: 255px;
    white-space: nowrap;
    @media (max-width: 767px){
        margin-bottom: 150px;
    }
`

export default function FooterBanner(props) {
    const { color, title } = props;
    return (
        <div className="section ">
            <Section>
                <div className="container">
                    <FooterTitle color={color} maxWidth={650} top={26} bottom={22}>{title}</FooterTitle>
                    <ContactButton backgroundColor={color ? color : defaultColor} className="mx-auto text-white" >Contactez-nous</ContactButton>
                </div>
                <img src={LeftBgImage} className="bottom-left" alt="Left Image" />
                <img src={RightBgImage} className="bottom-right" alt="Right Image" />
            </Section>
        </div>
    )
}
