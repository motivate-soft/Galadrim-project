import React from 'react'
import styled from 'styled-components'

export const Title = styled.h1`
    color: ${props => props.color !== undefined ? props.color : '#001b5d'};
    font-size: ${props => props.size !== undefined ? props.size + 'px' : '64px'};
`
export const Text = styled.p`
    color: ${props => props.color !== undefined ? props.color : '#001b5d'};
    font-size: ${props => props.size !== undefined ? props.size + 'px' : '64px'};
`
export const Underline = styled.div`
    width: 32px;
    height: 7px;
    margin-left: ${props => props.left !== undefined ? props.left + 'px' : '-32px'};;
    background-color: ${props => props.color !== undefined ? props.color : '#001b5d'};
`