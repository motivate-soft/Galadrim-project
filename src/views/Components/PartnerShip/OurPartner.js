import React from 'react'
import { useState } from 'react';

import MicroSoftLogo from '../../../assets/Images/Partnership/logo-microSoft@3x.png';
import NutanixLogo from '../../../assets/Images/Partnership/logo-nutanix@3x.png';
import PurePlayerLogo from '../../../assets/Images/Partnership/logo-pureplayer@3x.png';
import VeeamLogo from '../../../assets/Images/Partnership/logo-veeam@3x.png';
import VMwareLogo from '../../../assets/Images/Partnership/logo-vmware@3x.png';
import HewlettLogo from '../../../assets/Images/Partnership/logo-hewlett@3x.png';
import SentinelLogo from '../../../assets/Images/Partnership/logo-sentinel@3x.png';
import SonicLogo from '../../../assets/Images/Partnership/logo-sonic@3x.png';
import FortinetLogo from '../../../assets/Images/Partnership/logo-fortinet@3x.png';
import RuckusLogo from '../../../assets/Images/Partnership/logo-ruckus@3x.png';
import PolyLogo from '../../../assets/Images/Partnership/logo-poly@3x.png';
import ThreeCxLogo from '../../../assets/Images/Partnership/logo-3cx@3x.png';
import DellLogo from '../../../assets/Images/Partnership/logo-dell@3x.png';

import PartnerDropDownCard from './PartnerDropDownCard';
import { OrangeButton } from '../Elements/Buttons';

const color = "#FF5E4D"

const brands = [

    {
        id: 1,
        name: "MicroSoft",
        image: MicroSoftLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons plusieurs certifications Microsoft :",
        features: [
            "GOLD Cloud Platform",
            "GOLD Cloud Productivity",
            "GOLD Small and Midmarket CloudSolutions",
            "Silver Datacenter",
            "Silver Collaboration and Content"
        ],
    },
    {
        id: 2,
        name: "Nutanix",
        image: NutanixLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons la certification Scaler partner chez Nutanix ",
        features: [
            "En tant que MSP (Managed service provider) et agrégateur de solutions, nous travaillons avec la société AISI, expert infrastructure & cybersécurité, pour garantir un haut niveau de sécurité à nos clients. "
        ],
    },
    {
        id: 3,
        name: "PurePlayer",
        image: PurePlayerLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons plusieurs certifications  Veeam  : ",
        features: [
            "GOLD Cloud Platform",
            "GOLD Cloud Productivity",
            "GOLD Small and Midmarket CloudSolutions",
            "Silver Datacenter",
            "Silver Collaboration and Content"
        ],
    },
    {
        id: 4,
        name: "Veeam",
        image: VeeamLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons plusieurs certifications  Veeam  : ",
        features: [
            "Silver Reseller",
            "Silver Solution Provider",
        ],
    },
    {
        id: 5,
        name: "VMware",
        image: VMwareLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons plusieurs certifications  VMware  :",
        features: [
            "Solution Provider",
            "Cloud Air Network Partner",
        ],
    },
    {
        id: 6,
        name: "Hewlett",
        image: HewlettLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons la certification HPE Silver Partner. ",
        features: [
            "GOLD Cloud Platform",
            "GOLD Cloud Productivity",
            "GOLD Small and Midmarket CloudSolutions",
            "Silver Datacenter",
            "Silver Collaboration and Content"
        ],
    },
    {
        id: 7,
        name: "Sentinel",
        image: SentinelLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons plusieurs certifications  Veeam  : ",
        features: [
            "GOLD Cloud Platform",
            "GOLD Cloud Productivity",
            "GOLD Small and Midmarket CloudSolutions",
            "Silver Datacenter",
            "Silver Collaboration and Content"
        ],
    },
    {
        id: 8,
        name: "Sonic",
        image: SonicLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons la certification Silver Partner chez Sonicwall.",
        features: [
            "GOLD Cloud Platform",
            "GOLD Cloud Productivity",
            "GOLD Small and Midmarket CloudSolutions",
            "Silver Datacenter",
            "Silver Collaboration and Content"
        ],
    },
    {
        id: 9,
        name: "Fortinet",
        image: FortinetLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons la certification Authorized partner chez Fortinet.",
        features: [
            "GOLD Cloud Platform",
            "GOLD Cloud Productivity",
            "GOLD Small and Midmarket CloudSolutions",
            "Silver Datacenter",
            "Silver Collaboration and Content"
        ],
    },
    {
        id: 10,
        name: "Ruckus",
        image: RuckusLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons la certification Bigdog Partner chez Ruckus.",
        features: [
            "GOLD Cloud Platform",
            "GOLD Cloud Productivity",
            "GOLD Small and Midmarket CloudSolutions",
            "Silver Datacenter",
            "Silver Collaboration and Content"
        ],
    },
    {
        id: 11,
        name: "Poly",
        image: PolyLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons plusieurs certifications  Veeam  : ",
        features: [
            "GOLD Cloud Platform",
            "GOLD Cloud Productivity",
            "GOLD Small and Midmarket CloudSolutions",
            "Silver Datacenter",
            "Silver Collaboration and Content"
        ],
    },
    {
        id: 12,
        name: "ThreeCx",
        image: ThreeCxLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons la certification Platinium Partner chez 3CX. ",
        features: [
            "GOLD Cloud Platform",
            "GOLD Cloud Productivity",
            "GOLD Small and Midmarket CloudSolutions",
            "Silver Datacenter",
            "Silver Collaboration and Content"
        ],
    },

    {
        id: 13,
        name: "Dell",
        image: DellLogo,
        actionUrl: "https://azure.microsoft.com/en-us/",
        title: "Nous détenons la certification Gold Partner : Server & Storage chez DELL.",
        features: [
            "GOLD Cloud Platform",
            "GOLD Cloud Productivity",
            "GOLD Small and Midmarket CloudSolutions",
            "Silver Datacenter",
            "Silver Collaboration and Content"
        ],
    }
];


export default function OurPartner(props) {
    const [items, setItems] = useState(brands);

    const handleClick = id => {
        let array = [...items];
        let itemIndex = array.findIndex((item, index) => id === item.id)
        if (array[itemIndex].active !== true) {
            array[itemIndex].active = true
        } else {
            array[itemIndex].active = false
        }
        setItems(array)
    };

    return (
        <div className="section partner-details-block">
            <div className="container text-darkblue text-center">
                <div className="text-darkblue text-center">
                    <h5>Ils avancent à nos côtés</h5>
                    <h1>Nos partenaires</h1>
                </div>
                <div className="row d-flex">
                    {
                        items.map((item, index) => (
                            <div key={index} className="col-12 col-lg-4 d-flex justify-content-center align-self-start mb-5">
                                <PartnerDropDownCard
                                    item={item}
                                    onClick={handleClick} />
                            </div>
                        ))
                    }
                </div>
                <OrangeButton className="d-block px-4 mx-auto" top={85} bottom={145}>Contactez-nous</OrangeButton>
            </div>
        </div>
    )
}
