import React from 'react';

import MicrosoftImage from '../../assets/expertise/cloud/ld-0005692867-1.png';
import AzureImage from '../../assets/expertise/cloud/1200-px-microsoft-azure-logo-svg.png';
import NutanixImage from '../../assets/expertise/cloud/nutanix.png';
import AwsImage from '../../assets/expertise/cloud/1200-px-amazon-web-services-logo-svg.png';
import VmwareImage from '../../assets/expertise/cloud/v-mware-logo.png';
import EquinixImage from '../../assets/expertise/cloud/equinix-logo-1200-x-627.png';

export default function OurTechnique(props) {
    return (
      <div className={'our_technique'}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-12 text-center'}>
                    <h1 style={{color: props.theme.mainColor}}>Nos choix technologiques</h1>
                </div>
                <div className={'col-lg-12 brand-area'}>
                    <div className={'row'}>
                        <div className={'col-lg-4 col-6 text-center logo-item'}>
                            <img src={MicrosoftImage} alt=""/>
                        </div>
                        <div className={'col-lg-4 col-6 text-center logo-item'}>
                            <img src={AzureImage} alt=""/>
                        </div>
                        <div className={'col-lg-4 col-6 text-center logo-item'}>
                            <img src={NutanixImage} alt=""/>
                        </div>
                        <div className={'col-lg-4 col-6 text-center logo-item'}>
                            <img src={AwsImage} alt=""/>
                        </div>
                        <div className={'col-lg-4 col-6 text-center logo-item'}>
                            <img src={VmwareImage} alt=""/>
                        </div>
                        <div className={'col-lg-4 col-6 text-center logo-item'}>
                            <img src={EquinixImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}