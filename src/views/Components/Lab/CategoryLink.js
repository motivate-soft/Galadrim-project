import React from 'react'
import { useHistory } from 'react-router-dom'

export default function CategoryLink(props) {
    const { id, title, content, image } = props
    const history = useHistory()
    return (
        <div className="efilab-category-link" onClick={() => history.push(`/efilab/${title}`)}>
            <div className="link-image-wrapper">
                <img src={image} alt="efilab-category" />
            </div>
            <div className="link-text-wrapper">
                <p className="text-sm text-darkblue text-left m-0 pb-1">{title}</p>
                <p className="text-xxs text-left m-0 p-0">{content}</p>
            </div>
        </div>
    )
}
