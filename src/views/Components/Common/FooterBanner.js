import React from 'react'
import LeftBgImage from "../../../assets/Images/left_bg.png"
import RightBgImage from "../../../assets/Images/right_bg.png"
import styled from 'styled-components'

const defaultColor = '#FF5E4D'

const Section = styled.div`
    position: relative;
    display: flex;
    height: 25vw;
    .right-bg {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 90%;
    }
    .left-bg{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
    }

`

const Title = styled.h1`
    font-family: "Gilroy-Medium";
    font-size: 41px;
    color: ${props => props.color !== undefined ? props.color : defaultColor};
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 767px){
        font-size: 24px;
    }
`

const ContactButton = styled.button`
    display: inline-block;
    margin: 28px 0;
    padding: 5px 30px;
    color: #ffffff;
    background-color: ${props => props.color !== undefined ? props.color : defaultColor};
    border-radius: 0.25rem;
    border: 1px solid transparent;
    white-space: nowrap;
    vertical-align: middle;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
`

export default function FooterBanner(props) {
    const { color, title } = props;
    return (
        <Section>
            <img src={LeftBgImage} className="left-bg" alt="Left Image" />
            <img src={RightBgImage} className="right-bg" alt="Right Image" />
            <div className="w-50 text-center text-white mx-auto align-self-center">
                <Title color={color}>{title}</Title>
                <ContactButton color={color} >Contactez-nous</ContactButton>
            </div>
        </Section>
    )
}
