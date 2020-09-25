import React, { useState, useEffect } from 'react'
import CloudTitleImage from '../../../assets/Images/expertise/cloud/cloud-banner-logo.svg'
import SecurityTitleImage from '../../../assets/Images/expertise/security/security-banner-logo.svg'
import ServiceTitleImage from '../../../assets/Images/expertise/managed-services/managed-services-banner-logo.svg'
import ServiceTitleMobileImage from '../../../assets/Images/expertise/managed-services/managed-services-banner-logo-mobile.svg'
import WorkplaceTitleImage from '../../../assets/Images/expertise/modern-workplace/modern-workplace-banner-logo.svg'
import WorkplaceTitleMobileImage from '../../../assets/Images/expertise/modern-workplace/modern-workplace-banner-logo-mobile.svg'
import { useLocation } from 'react-router-dom';

const bannerData = [
    {
        title: 'cloud',
        imgLg: CloudTitleImage,
        imgSm: CloudTitleImage,
        darkColor: '#00d2b5',
        lightColor: '#00efce'
    },
    {
        title: 'workplace',
        imgLg: WorkplaceTitleImage,
        imgSm: WorkplaceTitleMobileImage,
        darkColor: '#001a5c',
        lightColor: '#001f5f'
    },
    {
        title: 'security',
        imgLg: SecurityTitleImage,
        imgSm: SecurityTitleImage,
        darkColor: '#00d2b5',
        lightColor: '#00efce'
    },
    {
        title: 'service',
        imgLg: ServiceTitleImage,
        imgSm: ServiceTitleMobileImage,
        darkColor: '#ff3900',
        lightColor: '#ff5e4d'
    },
]

const makeStyle = (lightColor, darkColor) => {
    // console.log({ backgroundImage: `linear-gradient(264deg, ${lightColor}, ${darkColor})` })
    return {
        backgroundImage: `linear-gradient(264deg, ${lightColor}, ${darkColor})`
    }
}

export default function CategoryBanner(props) {
    const location = useLocation()

    const [lightColor, setLightColor] = useState(null)
    const [darkColor, setDarkColor] = useState(null)
    const [lgTitle, setLgTitle] = useState(null)
    const [smTitle, setsmTitle] = useState(null)
    useEffect(() => {
        const currentPath = location.pathname
        const subUrl = currentPath.split('/')[2]
        console.log(subUrl)
        switch (subUrl) {
            case 'cloud':
                setLightColor(bannerData[0].lightColor)
                setDarkColor(bannerData[0].darkColor)
                setLgTitle(bannerData[0].imgLg)
                setsmTitle(bannerData[0].imgSm)
                break;
            case 'workplace':
                setLightColor(bannerData[1].lightColor)
                setDarkColor(bannerData[1].darkColor)
                setLgTitle(bannerData[1].imgLg)
                setsmTitle(bannerData[1].imgSm)
                break;
            case 'security':
                setLightColor(bannerData[2].lightColor)
                setDarkColor(bannerData[2].darkColor)
                setLgTitle(bannerData[2].imgLg)
                setsmTitle(bannerData[2].imgSm)
                break;
            case 'service':
                setLightColor(bannerData[3].lightColor)
                setDarkColor(bannerData[3].darkColor)
                setLgTitle(bannerData[3].imgLg)
                setsmTitle(bannerData[3].imgSm)
                break;
            default:
                break;
        }
        return () => {
            // cleanup
        }
    }, [location])

    return (
        <div className="section efilab-category-banner" style={makeStyle(lightColor, darkColor)}>
            <div className="container">
                <img src={lgTitle} alt="Title large" className="efilab-lg-title" />
                <img src={smTitle} alt="Title small" className="efilab-sm-title" />
            </div>
        </div>
    )
}
