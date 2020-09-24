import React from 'react'
import { useHistory } from 'react-router-dom';

export default function ExpertiseFixedNavbar(props) {
    const { title, image } = props
    const history = useHistory()
    return (
        <div className="section expertise-fixed-nav">
            <div className="expertise-nav-link" onClick={() => history.push(`/expertise/${title}`)}>
                <div className="link-image-wrapper">
                    <img src={image} alt="efilab-category" />
                </div>
                <div className="link-text-wrapper">
                    <p className="text-sm text-darkblue text-left m-0 pb-1">{title}</p>
                </div>
            </div>
        </div>
    )
}
