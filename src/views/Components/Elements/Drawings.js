import React from 'react'
import styled from 'styled-components'

const defaultWidth = 60;
const defaultMobileWidth = 35;
const defaultHeight = 120;
const defaultMobileHeight = 70;
const colorGreen = '#00d2b5';
const colorOrange = '#ff5e4d';


export const LeftRoundedSemiCircle = styled.div`
    width: ${props => props.width ? props.width + 'px' : defaultWidth + 'px'};
    height: ${props => props.height ? props.height + 'px' : defaultHeight + 'px'};
    border-radius: ${props => props.width ? props.width + 'px' : defaultWidth + 'px'} 0 0 ${props => props.width ? props.width + 'px' : defaultWidth + 'px'};
    background-color: ${props => props.color ? props.color : colorGreen};
    @media (max-width: 768px){
        width: ${props => props.mobileWidth ? props.mobileWidth + 'px' : defaultMobileWidth + 'px'};
        height: ${props => props.mobileHeight ? props.mobileHeight + 'px' : defaultMobileHeight + 'px'};
        border-radius: ${props => props.mobileWidth ? props.mobileWidth + 'px' : defaultMobileWidth + 'px'} 0 0 ${props => props.mobileWidth ? props.mobileWidth + 'px' : defaultMobileWidth + 'px'};
        
    }
`

export const RightRoundedSemiCircle = styled.div`
    width: ${props => props.width ? props.width + 'px' : defaultWidth + 'px'};
    height: ${props => props.height ? props.height + 'px' : defaultHeight + 'px'};
    border-radius: 0 ${props => props.width ? props.width + 'px' : defaultWidth + 'px'}  ${props => props.width ? props.width + 'px' : defaultWidth + 'px'} 0;
    background-color: ${props => props.color ? props.color : colorGreen};
    @media (max-width: 768px){
        width: ${props => props.mobileWidth ? props.mobileWidth + 'px' : defaultMobileWidth + 'px'};
        height: ${props => props.mobileHeight ? props.mobileHeight + 'px' : defaultMobileHeight + 'px'};
        
        border-radius:  0 ${props => props.mobileWidth ? props.mobileWidth + 'px' : defaultMobileWidth + 'px'} ${props => props.mobileWidth ? props.mobileWidth + 'px' : defaultMobileWidth + 'px'} 0 ;
    }
`

export const Circle = styled.div`
    width: ${props => props.width ? props.width + 'px' : defaultWidth + 'px'};
    height: ${props => props.height ? props.height + 'px' : defaultWidth + 'px'};
    border-radius: 100%;
    background-color: ${props => props.color ? props.color : colorGreen};
`

export const Square = styled.div`
    width: ${props => props.width ? props.width + 'px' : defaultWidth + 'px'};
    height: ${props => props.height ? props.height + 'px' : defaultWidth + 'px'};
    background-color: ${props => props.color ? props.color : colorGreen};
`

export const TopFlag = styled.div`
    width: 0;
    height: 0;
    border-bottom: 18px solid ${props => props.color ? props.color : colorOrange};
    border-right: 18px solid transparent;
`
export const BottomFlag = styled.div`
    width: 0;
    height: 0;
    border-top: 18px solid ${props => props.color ? props.color : colorOrange};
    border-right: 18px solid transparent;
`
