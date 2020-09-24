import React, { useState } from 'react'
import JobCard from './JobCard'
import { FaMapMarkerAlt } from 'react-icons/fa';


const jobsData = [
    {
        id: 1,
        title: 'Développeur front-end',
        category: 'Tech',
    },
    {
        id: 2,
        title: 'Développeur front-end',
        category: 'Tech',
    },
    {
        id: 3,
        title: 'Développeur front-end',
        category: 'Tech',
    },
    {
        id: 4,
        title: 'Chargé de marketing',
        category: 'Marketing',
    },
    {
        id: 5,
        title: 'Chargé de marketing',
        category: 'Marketing',
    },
    {
        id: 6,
        title: 'Chargé de marketing',
        category: 'Marketing',
    },
    {
        id: 7,
        title: 'Chargé de marketing',
        category: 'Marketing',
    },
    {
        id: 8,
        title: 'Bras droit',
        category: 'Administration',
    },
    {
        id: 9,
        title: 'Bras droit',
        category: 'Administration',
    },
    {
        id: 10,
        title: 'Bras droit',
        category: 'Administration',
    },
    {
        id: 11,
        title: 'Bras droit',
        category: 'Administration',
    },
    // {
    //     id: 12,
    //     title: 'Bras droit',
    //     category: 'Administration',
    // },
]

export default function CareerOffer() {
    const [jobs, setJobs] = useState(jobsData)
    return (
        <div className="section career-offer-block">
            <h1 className="block-title text-darkblue">Nos offres d’emplois</h1>
            <div className="container">
                <div className="row">
                    {
                        jobs.map((job, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                                <JobCard
                                    id={job.id}
                                    category={job.category}
                                    title={job.title} />
                            </div>
                        ))
                    }
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                        <div className={`career-job-card career-job-card-overlay`}>
                            <h4>Candidature spontannée</h4>
                            <p>Envoyez-nous vos candidatures !</p>
                            <div className="job-location">
                                <span className="job-location-badge"><FaMapMarkerAlt />Paris</span>
                                {/* <span className="job-location-badge"><FaRegClock />CDI</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
