import React from 'react'
import styled from 'styled-components'

const GradientContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    min-height: 412px;
    position: relative;
    box-sizing: border-box;
    color: #001b5d;
    max-width: ${props => props.maxWidth};
    margin: 0 auto;
    background: white;
    background-clip: border-box;
    background-clip: padding-box;
    border-radius: 1em;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1) !important;
    transition: margin ease 300ms, box-shadow ease 300ms;

    &:hover {
        border: solid 3px transparent;
        margin-top: -20px;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
    }

    &:hover:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -3px;

        /* !importanté */
        border-radius: inherit;
        /* !importanté */
        background: -webkit-gradient(to top right, #00d5b4, #ff5c4d, #001b5d);
        background: linear-gradient(to top right, #00d5b4, #ff5c4d, #001b5d);
    }
    @media screen and (max-width:767px){
        &:hover {
        cursor: pointer;
        margin-top: -20px;
        margin-bottom: 20px;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
    }
`

export default function VGradientCard(props) {
    let maxWidth = 'none';
    if (props.maxWidth !== undefined) {
        maxWidth = props.maxWidth;
        maxWidth += 'px';
    }
    return (
        <GradientContainer maxWidth={maxWidth}>
            {props.children}
        </GradientContainer>
    )
}
