import React from 'react'
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa'

const Tag = styled.div`
    width: 60px;
    height: 24px;
    font-size: 14px;
    margin-right: 8px;
    padding: 0 8px;
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
`
const TimeBadge = styled.p`
    font-family: 'RobotoMono-Medium';
    font-weight: 500;
    font-size: 12px;
    color: #6a6f85;
    margin: 0;
`

const CardImage = styled.img`
    border-radius: 13px 13px 0 0;
    margin: auto;
    width: 100%;
    height: 180px;
`
const ArticleLink = styled.p`
    font-family: 'RobotoMono-Light';
    font-size: 14px;
    color: #6a6f85 !important;
    margin: 0 4px !important;
`

const P = styled.p`
    color: #001b5d !important;
`

export default function ArticleCard(props) {
    const { id, title, text, img, tag, time } = props;

    return (
        <div>
            <div className="mx-auto d-flex flex-column">
                <CardImage src={img} alt={title} />
                <div className="px-4">
                    <div className="d-flex my-3">
                        <Tag id={id}>{tag}</Tag>
                        <TimeBadge> • {time} minutes</TimeBadge>
                    </div>
                    <h5>{title}</h5>
                    <P className="text-sm">{text}</P>
                    <div className="d-flex align-items-center">
                        <ArticleLink>Lire l’article</ArticleLink>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div >
    )
}
