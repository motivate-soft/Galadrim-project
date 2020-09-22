import React from 'react'
import styled from 'styled-components'

const VGradientCard = styled.div`
    z-index: 1;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    max-width: ${props => props.maxWidth !== undefined ? `${props.maxWidth}px` : ''};
    min-height: ${props => props.minHeight !== undefined ? `${props.minHeight}px` : '412px'};
    margin-left: auto;
    margin-right: auto;
    position: relative;
    box-sizing: border-box;
    color: #001b5d;
    background: white;
    background-clip: padding-box;
    border-radius: 1em;
    box-shadow: 0 20px 40px 0 rgba(41, 41, 43, 0.05), 0 2px 4px 0 rgba(41, 41, 43, 0.05);
    transition: margin ease 300ms, box-shadow ease 300ms;

    &:hover {
        /* border: solid 3px transparent; */
        cursor: pointer;
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
        z-index: 0;
        margin: -3px;

        /* !importanté */
        border-radius: inherit;
        /* !importanté */
        background: -webkit-gradient(to top, #00d5b4, #ff5c4d, #001b5d);
        background: linear-gradient(to top, #00d5b4, #ff5c4d, #001b5d);
    }
    @media screen and (max-width: 991px){
        &:hover {
            cursor: pointer;
            margin-top: 0;
            margin-bottom: 0;
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
        }
    }
`

export default VGradientCard;