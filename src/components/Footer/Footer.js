import React from 'react';
import './footer.css';
import { AiOutlineCopyrightCircle, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import {IoIosArrowDropup} from 'react-icons/io'

function Footer() {
  return ( 
    <>
      <div className="footer-container container-fluid">
        <div className="footer-1">
          <p className="footer-p"><AiOutlineCopyrightCircle/> 2022 Reclient.All Right Reserved</p>
        </div>

        <div className="footer-2">
          <p className="footer-p-1">Designed by <span className="footer-span">Gvimm Themes</span></p>
        </div>

        <div className="footer-3">
          <button className="footer-btn">Get Started</button>
          <div className="footer-main-list">
            <ul className='footer-list'>
            <li>
              <a className="twitter-icon footer-icon-1"><AiOutlineTwitter /></a>
            </li>
            <li>
              <a className="facebook-icon footer-icon-1"><FaFacebookF/></a>
            </li>
            <li>
              <a className="arrow-icon footer-icon-1"><IoIosArrowDropup /></a>
            </li>
          </ul>
          </div>
          
        </div>
      </div>
    </>
   );
}

export default Footer;