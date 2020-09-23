import React from 'react'



export default function Follow(props) {
    return (
        <div className="section efilab-follow">
            <div className="container">
                <h4 className="text-orange">Suivez toute notre actualité #Efisenslife</h4>
                <div className="social-link-wrapper">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
