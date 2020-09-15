import React from 'react'
import styled from 'styled-components'

const defaultWidth = 60;
const defaultHeight = 120;
const defaultColor = '#00d2b5';


export const LeftRoundedSemiCircle = styled.div`
    width: ${props => props.width !== undefined ? props.width + 'px' : defaultWidth + 'px'};
    height: ${props => props.height !== undefined ? props.height + 'px' : defaultHeight + 'px'};
    border-radius: ${props => props.width !== undefined ? props.width + 'px' : defaultWidth + 'px'} 0 0 ${props => props.width !== undefined ? props.width + 'px' : defaultWidth + 'px'};
    background-color: ${props => props.color !== undefined ? props.color : defaultColor};
`

export const RightRoundedSemiCircle = styled.div`
    width: ${props => props.width !== undefined ? props.width + 'px' : defaultWidth + 'px'};
    height: ${props => props.height !== undefined ? props.height + 'px' : defaultHeight + 'px'};
    border-radius: 0 ${props => props.width !== undefined ? props.width + 'px' : defaultWidth + 'px'}  ${props => props.width !== undefined ? props.width + 'px' : defaultWidth + 'px'} 0;
    background-color: ${props => props.color !== undefined ? props.color : defaultColor};
    `

export const Circle = styled.div`
    width: ${props => props.width !== undefined ? props.width + 'px' : defaultWidth + 'px'};
    height: ${props => props.height !== undefined ? props.height + 'px' : defaultWidth + 'px'};
    border-radius: 100%;
    background-color: ${props => props.color !== undefined ? props.color : defaultColor};
`

export const Square = styled.div`
    width: ${props => props.width !== undefined ? props.width + 'px' : defaultWidth + 'px'};
    height: ${props => props.height !== undefined ? props.height + 'px' : defaultWidth + 'px'};
    background-color: ${props => props.color !== undefined ? props.color : defaultColor};
`

