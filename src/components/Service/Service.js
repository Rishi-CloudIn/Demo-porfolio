import React from 'react';
import { RiLayout3Line } from 'react-icons/ri'
import { FiSettings, FiUserPlus } from 'react-icons/fi'
import { ImStatsDots } from 'react-icons/im';
import { BsDot } from 'react-icons/bs';
import { MdSupportAgent, MdOutlineTabletMac } from 'react-icons/md';
import './service.css'


function Service() {
  return ( 
    <>
      <div className="service-container container">
        <div className="title-wrapper">
          <h1 className="service-title">Our Services</h1>
          <div className="service-line"></div> 
        </div>
        <p className="service-p">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem </p>

        <div className="service-content-row-1 row">
          <div className="service-1 col-lg-4 col-sm-6 col-12">
            <i><MdOutlineTabletMac /></i>
            <h2 className="service-content-h2">Fully responsive</h2>
            <BsDot/>
            <p className="service-content-p px-2">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lore</p>
          </div>

          <div className="service-1 col-lg-4 col-sm-6 col-12">
            <i><RiLayout3Line /></i>
            <h2 className="service-content-h2">Clean layout</h2>
            <div className="service-dot">
            <BsDot/>
            <BsDot/>
            </div>
            <p className="service-content-p px-2">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lore</p>
          </div>

          <div className="service-1 col-lg-4 col-sm-12">
            <i><FiSettings /></i>
            <h2 className="service-content-h2">Unical components</h2>
            <div className="service-dot">
            <BsDot/>
            <BsDot/>
            <BsDot/>
            </div>
            <p className="service-content-p  service-content-p-1 px-2">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lore</p>
          </div>
        </div>

        {/* row 2 */}

        <div className="service-content-row-2 row">
          <div className="service-1 col-lg-4 col-sm-6 col-12">
            <i><FiUserPlus /></i>
            <h2 className="service-content-h2">User Friendly</h2>
            <BsDot/>
            <p className="service-content-p px-2">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lore</p>
          </div>

          <div className="service-1 col-lg-4 col-sm-6 col-12">
            <i><ImStatsDots /></i>
            <h2 className="service-content-h2">Daily Statistics</h2>
            <div className="service-dot">
            <BsDot/>
            <BsDot/>
            </div>
            <p className="service-content-p px-2">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lore</p>
          </div>

          <div className="service-1 col-lg-4 col-sm-12 ">
            <i><MdSupportAgent /></i>
            <h2 className="service-content-h2">Realtime support</h2>
            <div className="service-dot">
            <BsDot/>
            <BsDot/>
            <BsDot/>
            </div>
            <p className="service-content-p service-content-p-1 px-2">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lore</p>
          </div>
        </div>
      </div>
    </>
   );
}

export default Service;