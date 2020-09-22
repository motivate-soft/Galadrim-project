import React from 'react'
import styled from 'styled-components'

export const BaseButton = styled.button`
    display: inline-block;
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : ''};
    margin-top: ${props => props.top ? `${props.top}px` : ''};
    margin-bottom: ${props => props.bottom ? `${props.bottom}px` : ''};
    color: ${props => props.color ? props.color : '#212529'};
    font-weight: 400;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
        box-shadow: none !important;
        outline: none !important;
    }
    &::-moz-focus-inner {
        border: 0;
    }
`

export const CustomButton = styled(BaseButton)`
    padding: 4px 12px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 6px;
    font-family: "Gilroy-Bold";
`

export const IconButton = styled(CustomButton)`
    display: flex;
    align-items: center;
    & svg{
        width: 12px;
        height: 14px;
        margin-right: 9px;
        align-self: center;
    }
`
export const ResponsiveButton = styled(CustomButton)`
    @media only screen and (max-width: 768px){
        margin-left: auto;
        margin-right: auto;
    }
    @media only screen and (min-width: 768px){
        margin-left: 0;
    }
`

// Primary Buttons

export const OrangeButton = styled(CustomButton)`
    /* max-width: 240px; */
    color: #ffffff;
    background-color: #ff5e4d;
    padding: 4px 12px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 6px;
`

export const GrayButton = styled(CustomButton)`
    color: #001F5F;
    background-color: #ffffff;
    padding: 14px 30px;
    border: 2px solid #A5ABB7;
    &:hover{
        background: #a4abb8;
        color: white;
    }
`