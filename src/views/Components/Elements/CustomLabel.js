import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    width: 100%;
    color: #6A6F85;
    font-family: Gilroy-Medium;
    font-size: 15px;
    letter-spacing: 0;
    line-height: 18px;
`

export default function CustomLabel(props) {
    return (
        <Label {...props}/>
    )
}
