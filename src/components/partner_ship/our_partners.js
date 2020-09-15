import React from 'react';
import { FaAngleDoubleDown } from '../../../node_modules/react-icons/fa';
import BrandImage from '../../assets/expertise/cloud1/1200-px-microsoft-azure-logo-svg.jpg';

const brands = [
    [
      {
          name: "Azure",
          image: BrandImage,
          actionUrl: "https://azure.microsoft.com/en-us/",
          title: "Nous détenons plusieurs certifications  Veeam  : ",
          content: Content()
      },
      {
          name: "Azure",
          image: BrandImage,
          actionUrl: "https://azure.microsoft.com/en-us/",
          title: "Nous détenons plusieurs certifications  Veeam  : ",
          content: Content()
      },
      {
          name: "Azure",
          image: BrandImage,
          actionUrl: "https://azure.microsoft.com/en-us/",
          title: "Nous détenons plusieurs certifications  Veeam  : ",
          content: Content()
      }
  ],
    [
        {
            name: "Azure",
            image: BrandImage,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "Azure",
            image: BrandImage,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "Azure",
            image: BrandImage,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        }
    ],
    [
        {
            name: "Azure",
            image: BrandImage,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "Azure",
            image: BrandImage,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "Azure",
            image: BrandImage,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        }
    ],
    [
        {
            name: "Azure",
            image: BrandImage,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "Azure",
            image: BrandImage,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        },
        {
            name: "Azure",
            image: BrandImage,
            actionUrl: "https://azure.microsoft.com/en-us/",
            title: "Nous détenons plusieurs certifications  Veeam  : ",
            content: Content()
        }
    ],
    [
        {
            name: "Azure",
            image: BrandImage,
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
        if (element.classList.contains('show')) {
            element.classList.remove('show');
            controller.classList.remove('rotated');
        } else {
            element.classList.add('show');
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