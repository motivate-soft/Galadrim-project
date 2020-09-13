import React from 'react';
import FormCard from "./form_card";
import '../../styles/component.scss';

export default function ExpertiseCloudBanner(props) {
    return (
      <>
        <div className="expertise_banner" style={{backgroundColor: props.theme.mainColor}}>
            <img src={props.theme.banner.bannerImage0} className={"banner0image"} alt=""/>
            <img src={props.theme.banner.bannerImage1} className={"banner1image"} alt=""/>
            <img src={props.theme.banner.bannerImage2} className={"banner2image"} alt=""/>
            <div className="container">
                <div className="text-center">
                    <img src={props.theme.banner.logo} alt="" className={'banner-logo'}/>
                    <img src={props.theme.banner.logoMobile} alt="" className={'banner-logo-mobile'} width={props.theme.banner.logoMobileWidth}/>
                </div>
               <div className="row">
                   <div className="col-lg-6">
                       <div className="media">
                           <img className="mr-4" src={props.theme.banner.titleImage} alt="" width="76"/>
                           <div className="media-body">
                               <h1 className="image_title" style={{fontSize: props.theme.banner.titleFontSize, lineHeight: props.theme.banner.titleFontSize}}>{props.theme.banner.titleFirst}</h1>
                               <h1 className="image_title" style={{fontSize: props.theme.banner.titleFontSize, lineHeight: props.theme.banner.titleFontSize}}>{props.theme.banner.titleSecond}</h1>
                           </div>
                       </div>
                       <div className="description">
                           {props.theme.banner.bannerContent}
                       </div>
                   </div>
                   <div className="col-lg-6">
                       <FormCard theme={props.theme}/>
                   </div>
               </div>
            </div>
        </div>
      </>
    );
}