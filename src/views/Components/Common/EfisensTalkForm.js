import React from 'react'
import styled from 'styled-components'
import { BaseInput } from './../Elements/CustomInput';


const CustomInput = styled(BaseInput)`
    font-size: 16px;
    font-family: "Gilroy-Medium";
    color: #001a5c !important;
    width: calc(100% - 50px);
    height: 50px;
    margin-bottom: 8px;
    padding-left: 16px;
    border: 2px solid #ebebeb;
    border-right: 0;
    border-radius: 4px 0 0 4px;
    transition: border ease 300ms;
    &:focus{
        border: 1px solid #00d5b4;
        border-right: 0;
    }
    &::placeholder{
        color: #caccd7;
    }
`

const InputAppend = styled.div`
    /* background-image: url("../../../assets/Icons/send@3x.png"); */
    display: flex;
    background-color: #00d5b4;
    width: 50px;
    height: 50px;
    border-radius: 0 4px 4px 0;
    & {
        svg {
            width: 24px;
            height: 24px;
            fill: white;
            margin: auto;
        }
    }
`

export default function EfisensTalkForm() {
    return (
        <>
            <div className="efisens-talk-form-container">
                <div className="efisens-talk-form">
                    <div className="row text-darkblue">
                        <div className="col-12 col-md-12 col-lg-6 col-12">
                            <h2 className>Efisens Talks</h2>
                            <Underline mobileWidth={15} mobileHeight={3} />
                            <p className="text-primary">Nos experts partagent régulièrement leur savoir faire et leur expérience. Apprenez, lisez et servez -vous !</p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-5 offset-lg-1">
                            <h6 className="text-green mt-0 mb-2 heading-sm text-uppercase">S’inscrire à notre newsletter</h6>
                            <div className="d-flex">
                                <CustomInput placeholder="votre email" />
                                <InputAppend ><MdSend /></InputAppend>
                            </div>
                            <p className="text-xxs text-lightgray my-0">En renseignant votre adresse email, vous accepter de recevoir nos derniers articles de blog par courrier électronique et vous prenez connaissances de notre politique de protection des données personnelles. Vous pouvez vous désinscrire à tout moment à l'aide des liens de désinscription ou en nous contactant ici.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
