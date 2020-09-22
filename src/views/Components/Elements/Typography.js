import React from 'react'
import styled, { extend } from 'styled-components'


export const Title = styled.h1`
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : ''};
    margin-top: ${props => props.top !== undefined ? `${props.top}px` : ''};
    margin-bottom: ${props => props.bottom !== undefined ? `${props.bottom}px` : ''};
    color: ${props => props.color ? props.color : '#001b5d'};
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : '54px'};
    font-family: ${props => props.fontFamily ? props.fontFamily : 'Gilroy-Bold'};
    line-height: normal;
    white-space: pre-line;
   
    @media only screen and (max-width: 768px){
        font-size: ${props => props.mobileFontSize ? `${props.mobileFontSize}px` : '36px'};
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        line-height: normal;
    }
`

export const BannerTitle = styled(Title)`
    @media only screen and (max-width: 768px){
        font-size: 36px;
        margin-left: 0;
        font-family: 'Gilroy-Bold';
    }
    @media only screen and (min-width: 768px){
        font-size: 45px;
    }
    @media only screen and (min-width: 992px){
        font-size: 52px;
    }
    @media only screen and (min-width: 1200px){
        font-size: 64px;
    }
`

export const BlockTitle = styled(Title)`
    display: block;
    font-size: 54px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
   
    @media only screen and (max-width: 768px){
        font-size: 36px;
    }
    @media only screen and (min-width: 768px){
        font-size: 40px;
    }
    @media only screen and (min-width: 992px){
        font-size: 48px;
    }
    @media only screen and (min-width: 1200px){
        font-size: 54px;
    }
`

export const Paragraph = styled.p`
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : ''};
    margin-top: ${props => props.top !== undefined ? `${props.top}px` : ''};
    margin-bottom: ${props => props.bottom !== undefined ? `${props.bottom}px` : ''};
    color: ${props => props.color ? props.color : '#001b5d'};
    font-size: ${props => props.size ? `${props.size}px` : '18px'};
    line-height: 21px;
    font-family: ${props => props.fontFamily ? props.fontFamily : 'Gilroy-Bold'};
    @media screen and (max-width: 768px){
        margin-left: auto;
        margin-right: auto;
    }
`

export const Subtitle = styled(Paragraph)`
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media screen and (max-width: 768px){
        margin-left: auto;
        margin-right: auto;
    }
`

export const GradientText = styled.h4`
    font-size: 21px;
    font-family: "Gilroy-Medium";
    text-transform: uppercase;
    margin: 0 auto 52px;
    background: -webkit-linear-gradient(left,#00d2b5, #ff5e4d, #001a5c);
    background: -o-linear-gradient(right, #00d2b5, #ff5e4d, #001a5c);
    background: -moz-linear-gradient(right, #00d2b5, #ff5e4d, #001a5c);
    background: linear-gradient(to right,#00d2b5, #ff5e4d, #001a5c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Underline = styled.div`
    width: ${props => props.width ? `${props.width}px` : '32px'};
    height: ${props => props.height ? `${props.height}px` : '7px'};
    margin-left: ${props => props.left ? `-${props.left}px` : '-32px'};
    background-color: ${props => props.color ? props.color : '#001b5d'};
    @media (max-width: 768px){
        /* display: none; */
        width: ${props => props.mobileWidth ? `${props.mobileWidth}px` : '22px'};
        height: ${props => props.mobileHeight ? `${props.mobileHeight}px` : '5px'};
        margin-left: auto;
        margin-right: auto;
    }
`
