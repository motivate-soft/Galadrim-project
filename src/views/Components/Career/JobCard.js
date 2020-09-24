import React from 'react'
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'


export default function JobCard(props) {
    const { id, title, category } = props
    const history = useHistory()

    function getJobBadge(category) {
        switch (category) {
            case 'Tech':
                return 'badge-green';
            case 'Marketing':
                return 'badge-orange';
            case 'Administration':
                return 'badge-blue';
            default:
                return 'badge-green';
        }
    }
    return (
        <div className="career-job-card" onClick={() => history.push(`/career/${id}`)}>
            <span className={category ? `job-badge ${getJobBadge(category)}` : `job-badge badge-green`}>{category}</span>
            <h4>{title}</h4>
            <div className="job-location">
                <span className="job-location-badge"><FaMapMarkerAlt />Paris</span>
                <span className="job-location-badge"><FaRegClock />CDI</span>
            </div>
        </div >
    )
}
