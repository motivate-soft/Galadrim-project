import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 500px;
    margin-bottom: 24px;
    padding: 32px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(41,41,43,0.05), 0 20px 40px 0 rgba(41,41,43,0.05);
    & h2{
        width: 64px;
        font-size: 35px;
        font-family: "RobotoMono-Bold";
        color: ${props => props.color != undefined ? props.color : '#001A5C'}
    }
    & h3{
        margin-left: 8px;
        max-width: 100%;
        font-size: 26px;
        color: ${props => props.color != undefined ? props.color : '#001A5C'}
    }
    & p{
        max-width: 100%;
        margin-bottom: 0 !important;
        font-size: 14px;
        text-align: left !important;
        color: #001A5C !important;
    }
`

export default function ApproachCard(props) {
    const { color, step, title, text } = props
    return (
        <Wrapper color={color}>
            <div className='d-flex align-items-center mb-4'>
                <h2>0{step}•</h2>
                <h3>{title}</h3>
            </div>
            <p>{text}</p>
        </Wrapper>
    )
}
