import React from 'react'
import LeftTopImage from '../../../assets/Images/charts/modern-workplace.svg';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa'

const category = 'Développeur front-end';

export default function CareerDetailBanner() {
    return (
        <div className="section career-detail-banner">
            <img src={LeftTopImage} alt="Left Top Background" className="top-left" />
            <div className="container">
                <div className="career-container d-flex flex-column">
                    <h2>{category}</h2>
                    <div className="job-location">
                        <span className="job-location-badge"><FaMapMarkerAlt />Remote</span>
                        <span className="job-location-badge"><FaRegClock />CDI</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
