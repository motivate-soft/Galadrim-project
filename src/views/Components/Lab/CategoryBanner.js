import React from 'react'

export default function CategoryBanner(props) {
    const { imgLg, imgSm } = props.titleImage
    return (
        <div className="section efilab-category-banner">
            <img src={imgLg} alt="Title large" className="efilab-lg-title" />
            <img src={imgSm} alt="Title small" className="efilab-sm-title" />
        </div>
    )
}
