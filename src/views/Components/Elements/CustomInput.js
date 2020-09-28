import styled from 'styled-components'

export const BaseInput = styled.input`
    &:hover{
        box-shadow: none;
        outline: none!important;
        box-shadow: none !important;
    }
`

export const CustomInput = styled(BaseInput)`
    width: 100%;
    padding: 0 16px;
    font-size: 14px;
    line-height: 50px;
    height: 50px;
    color: #caccd7;
    background-color: #f5f6fa;
    border-radius: 4px;
    border: 1px solid #ffffff;
    box-shadow: inset 0 1px 3px 0 rgba(235, 235, 235, 0.3);
    transition: border-color ease-in-out .5s, box-shadow ease-in-out .5s;
    &:focus{
        border: 1px solid #001A5C;
        color: #384b7f;
    }
`

export default CustomInput

