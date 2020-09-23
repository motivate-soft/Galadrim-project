import React from 'react'
import { renderToStaticMarkup } from "react-dom/server";
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const InputWithBackground = styled.input`
    background-image: url('data:image/svg+xml;utf8, ${props => props.svgString ? props.svgString : ''}');
    background-repeat: no-repeat;
    background-position: 18px center;
    display: block;
    margin: 0 auto 29px;
    max-width: 376px;
    padding: 8px 18px;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    border: solid 1px #ebebeb;
    background-color: #ffffff;
    transition: border ease 300ms;
    &:focus{
        background: none;
        outline: none !important;
        border: 1px solid #001f5f;
    }
    ::placeholder {
        padding: 30px;
        color: #6a6f85;
        font-size: 16px;
        font-family: Gilroy-SemiBold;
        opacity: 1;     
    }
    :-moz-placeholder {
        padding: 30px;
        color: #6a6f85;
        font-size: 16px;
        font-family: Gilroy-SemiBold;
        opacity: 1;
    }
    ::-moz-placeholder { 
        padding: 30px;
        color: #6a6f85;
        font-size: 16px;
        font-family: Gilroy-SemiBold;
        opacity: 1;
    }
    :-ms-input-placeholder {
        padding: 30px; 
        color: #6a6f85;
        font-size: 16px;
        font-family: Gilroy-SemiBold;
    }

    ::-ms-input-placeholder {   
        padding: 30px;
        color: #6a6f85;
        font-family: Gilroy-SemiBold;
    }
`

export default function SearchInput() {
    const svgString = encodeURIComponent(renderToStaticMarkup(<FaSearch fill="#caccd8" />));
    return (
        <InputWithBackground svgString={svgString} placeholder="Rechercher un article" />
    )
}