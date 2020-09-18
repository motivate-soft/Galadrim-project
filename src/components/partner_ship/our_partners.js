import React from 'react';
import { FaAngleDoubleDown } from '../../../node_modules/react-icons/fa';
import BrandImage from '../../assets/expertise/cloud1/1200-px-microsoft-azure-logo-svg.jpg';
import MicroSoftImage from '../../assets/partner-ship/pngegg.png';
import NutanixImage from '../../assets/partner-ship/nutanix.png';
import PurePlayer from '../../assets/partner-ship/picture.png';
import Veeam from '../../assets/partner-ship/veeam-logo-peridot-500-png-web-1280-1280.png';
import VMware from '../../assets/partner-ship/1024-px-vmware-svg.png';
import Hewlett from '../../assets/partner-ship/langfr-560-px-hewlett-packard-enterprise-logo-svg.png';
import Sentinel from '../../assets/partner-ship/logo-sentinel-one.png';
import Sonic from '../../assets/partner-ship/secure-first-logo-final-outlines-01-1030-x-437.png';
import Fortinet from '../../assets/partner-ship/kisspng-fortinet-fortigate-100-d-fortinet-fg-30-d-bdl-950-12-firewall-transparent-icon-5-b-5-e-9-bf-38-acd-57-9724893115329269635686.png';
import Ruckus from '../../assets/partner-ship/ruckus-logo-768-x-378.png';
import Poly from '../../assets/partner-ship/poly.png';
import ThreeCx from '../../assets/partner-ship/3-cx-logo-svg.png';
import Dell from '../../assets/partner-ship/dell-logo-2016-svg.png';

const brands = [
    [
      {
          name: "MicroSoft",
          image: MicroSoftImage,
          actionUrl: "https://azure.microsoft.com/en-us/",
          title: "Nous détenons plusieurs certifications  Veeam  : ",
          content: Content()
      },
      {
          name: "Nutanix",
          image: NutanixImage,
          actionUrl: "https://azure.microsoft.com/en-us/",
          title: "Nous détenons plusieurs certifications  Veeam  : ",
          content: Content()
      },
      {
          name: "PurePlayer",
          image: PurePlayer,
          actionUrl: "https://azure.microsoft.com/en-us/",
          title: "Nous détenons plusieurs certifications  Veeam  : ",
          content: Content()
      }
  ],
    [
        {
            name: "Veeam",
            image: Veeam,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "VMware",
            image: VMware,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "Hewlett",
            image: Hewlett,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        }
    ],
    [
        {
            name: "Sentinel",
            image: Sentinel,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "Sonic",
            image: Sonic,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "Fortinet",
            image: Fortinet,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        }
    ],
    [
        {
            name: "Ruckus",
            image: Ruckus,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "Poly",
            image: Poly,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "ThreeCx",
            image: ThreeCx,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        }
    ],
    [
        {
            name: "Dell",
            image: Dell,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        }
    ]
];

function Content() {
    return (
      <>
          <li>
              GOLD Cloud Platform
          </li>
          <li>
              GOLD Cloud Productivity
          </li>
          <li>
              GOLD Small and Midmarket CloudSolutions
          </li>
          <li>
              Silver Datacenter
          </li>
          <li>
              Silver Collaboration and Content
          </li>
      </>
    );
}

class OurPartners extends React.Component{
    state = {
        items: brands,
    };

    collapseHandler = (id, controller_id) => {
        console.log(id);
        const element = document.getElementById(id);
        const controller = document.getElementById(controller_id);
        if (element.classList.contains('pre-show')) {
            element.classList.remove('pre-show');
            controller.classList.remove('rotated');
        } else {
            element.classList.add('pre-show');
            controller.classList.add('rotated');
        }
    };

    render(){
        return (
            <div className={'our_partners'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-12 text-center'}>
                            <h5>Ils avancent à nos côtés</h5>
                            <h1>Nos partenaires</h1>
                        </div>
                        <div className={'col-lg-12 brand-area'}>
                            {
                                this.state.items.map((brand, index)=>(
                                    <div className={'row'} key={index}>
                                        {
                                            brand.map((item, index1)=>(
                                                <div className={'col-lg-3'} key={index1}>
                                                    <div className={'image-area'}>
                                                        <img src={item.image} alt=""/>
                                                    </div>
                                                    <div className={'navigation-area text-center'}>
                                                        <div className={'collapse-control'} id={`controller_${index}_${index1}`} onClick={() => this.collapseHandler(`collapse_${index}_${index1}`, `controller_${index}_${index1}`)}>
                                                            <FaAngleDoubleDown/>
                                                        </div>
                                                    </div>
                                                    <div className={'collapsed-area'} id={`collapse_${index}_${index1}`}>
                                                        <div className={'text-center'}>
                                                            <h3>Nous détenons plusieurs certifications Microsoft :</h3>
                                                            <div className={'lists'}>
                                                                <li>
                                                                    GOLD Cloud Platform
                                                                </li>
                                                                <li>
                                                                    GOLD Cloud Productivity
                                                                </li>
                                                                <li>
                                                                    GOLD Small and Midmarket CloudSolutions
                                                                </li>
                                                                <li>
                                                                    Silver Datacenter
                                                                </li>
                                                                <li>
                                                                    Silver Collaboration and Content
                                                                </li>
                                                            </div>
                                                            <button className={'btn btn-custom'}>
                                                                En savoir plus
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className={'col-lg-12 text-center action-area'}>
                            <button className={'btn btn-custom'}>
                                Contactez-nous
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default OurPartners