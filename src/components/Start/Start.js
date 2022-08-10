import React from 'react';
import './start.css';
import { FaWordpressSimple } from 'react-icons/fa';
import { SiGoogleanalytics, SiWoo, SiMagento } from 'react-icons/si';
import { AiOutlineHtml5 } from 'react-icons/ai';


function Start() {
  return (
    <>
      
      <div className="start-container container-fluid">
        <div className="title-wrapper">
          <h1 className="start-title">Let's Get Started</h1>
          <div className="start-line"></div> 
        </div>
        <p className="start-p">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit met lorem ipsum dolor sit amet lorem </p>
        <button className="start-btn">Get Started</button>
        
         
        <div className="start-content">
          <i className="wordpress start-icon"><FaWordpressSimple /></i>

          <i className="google-analytics start-icon"><SiGoogleanalytics /> Google Analytics</i>

          <i className='Woocommerce start-icon'><SiWoo /> Commerce</i>

          <i className='magento start-icon'><SiMagento /> Magento</i>
          
          <i className='html start-icon'><AiOutlineHtml5 /></i>
        </div>
      </div>
    </>
  );
}

export default Start;