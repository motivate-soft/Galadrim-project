import React from 'react'
import styled from 'styled-components'


export const SquareImage = styled.div`
    width: 100%;
    padding-top: 100%;
    border-radius: 0;
    background-image: url(${(props) => props.src});
    background-position: center center;
    background-size: cover;
`

export const RoundedImage = styled.div`
    width: 100%;
    padding-top: 100%;
    background-image: url(${(props) => props.src});
    border-top-left-radius: ${props => props.radius[0] + '%'};
    border-top-right-radius: ${props => props.radius[1] + '%'};
    border-bottom-right-radius: ${props => props.radius[2] + '%'};
    border-bottom-left-radius: ${props => props.radius[3] + '%'};
    background-position: center center;
    background-size: cover;
`

export const Image = styled.img`
    max-width: ${props => props.maxWidth !== undefined ? props.maxWidth + 'px' : 'none'};
    width: ${props => props.width !== undefined ? props.width + 'px' : 'none'};
    height: ${props => props.heigth !== undefined ? props.heigth + 'px' : 'none'};
`