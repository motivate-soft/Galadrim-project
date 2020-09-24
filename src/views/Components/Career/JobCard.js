import React from 'react'
import { FaMapMarker, FaClock, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa'


export default function JobCard(props) {
    const { id, title, category } = props
    function getJobBadge(category) {
        console.log(category)
        if (category === 'Tech') {
            console.log('Tech', category)
            return 'badge-green'
        } else if (category === 'Marketing') {
            console.log('market', category)
            return 'badge-orange'
        } else {
            console.log(category)
            return 'badge-blue'
        }
        // switch (category) {
        //     case 'Tech':
        //         return 'badge-green';
        //     case 'Marketing':
        //         return 'badge-orange';
        //     case 'Administration':
        //         return 'badge-blue';
        //     default:
        //         return 'badge-green';
        // }
    }
    return (
        <div id={id} className={`career-job-card ${getJobBadge(category)}`}>
            <span className="job-badge badge-green">{category}</span>
            <h4>{title}</h4>
            <div className="job-location">
                <span className="job-location-badge"><FaMapMarkerAlt />Paris</span>
                <span className="job-location-badge"><FaRegClock />CDI</span>
            </div>
        </div>
    )
}
