import React from 'react'
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa'


const Tag = styled.p`
    width: 60px;
    height: 24px;
    font-family: 'RobotoMono-Bold';
    font-size: 12px !important;
    white-space: nowrap !important;
    color: #6a6f85 !important;
    margin: 0!important;
    span {
        margin-right: 8px;
        padding: 4px 8px;
        font-size: 12px;
        color: ${props => {
        switch (props.id % 4) {
            case 1:
                return '#ff5e4d';
            case 2:
                return '#00d2b5';
            case 3:
                return '#ff5e4d';
            default:
                return '#00d2b5';
        }
    }};
        background-color: ${props => {
        switch (props.id % 4) {
            case 1:
                return 'rgba(255, 94, 77, 0.1)';
            case 2:
                return 'rgba(0, 210, 181, 0.1)';
            case 3:
                return 'rgba(255, 94, 77, 0.1)';
            default:
                return 'rgba(0, 210, 181, 0.1)';
        }
    }};
    }
   
`

const ArticleLink = styled.p`
    margin-bottom: 28px;
    font-family: 'RobotoMono-Light';
    font-size: 14px;
    color: #6a6f85 !important;
    margin: 0 4px !important;
`

const ButtonWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 28px;
    color: #6A6F85;
`


export default function ArticleCard(props) {
    const { id, title, text, img, tag, time } = props;

    return (
        <div className="article-card">
            <img src={img} alt={title} />
            <div className="content">
                <div className="d-flex my-3">
                    <Tag id={id}><span>{tag}</span>• {time} minutes</Tag>
                </div>
                <h5 className="mt-0 mb-2">{title}</h5>
                <p>{text}</p>
                <ButtonWrapper>
                    <ArticleLink>Lire l’article</ArticleLink>
                    <FaArrowRight />
                </ButtonWrapper>
            </div>
        </div>
    )
}
