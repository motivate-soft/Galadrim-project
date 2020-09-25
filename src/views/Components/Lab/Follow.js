import React from 'react'
import { ReactComponent as InstagramIcon } from "../../../assets/Icons/instagram.svg"
import { ReactComponent as LinkedinIcon } from "../../../assets/Icons/linkedin.svg"
import { ReactComponent as YoutubeIcon } from "../../../assets/Icons/youtube.svg"


export default function Follow(props) {
    return (
        <div className="section efilab-follow">
            <div className="container">
                <h4 className="text-orange">Suivez toute notre actualité #Efisenslife</h4>
                <div className="social-link-wrapper">
                    <InstagramIcon />
                    <LinkedinIcon />
                    <YoutubeIcon />
                </div>
            </div>
        </div>
    )
}
