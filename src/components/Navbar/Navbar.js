import React, {useState} from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import {BsDot} from 'react-icons/bs'
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

  const [ showMediaIcon, setShowMediaIcon ] = useState( false );
  return ( 
    <>
      <nav className="main-nav">
        {/* log part */}
        <div className="logo">
          <h1>Reclient</h1>
        </div>

        {/* 2nd part */}
        <div className={ showMediaIcon ? 'menu-link mobile-menu-link' : 'menu-link' }>
          <ul>
            <li>
              <a href="#" className="home">home</a>
            </li>
            <BsDot className='link__dot'/>
             <li>
              <a href="#" className="home">service</a>
            </li>
            <BsDot className='link__dot'/>
             <li>
              <a href="#" className="home">prices</a>
            </li>
            <BsDot className='link__dot'/>
             <li>
              <a href="#" className="home">testimonials</a>
            </li>
            <BsDot className='link__dot'/>
             <li>
              <a href="#" className="home">contact</a>
            </li>
          </ul>
        </div>

        {/* 3rd part */}

        <div className="profile">
          <h1 className='setting__icon'><AiOutlineSetting /></h1>
          <img src="./images/person.jpg" alt="person" />
          
          {/* hamburger start menu */} 
          
            <div className='hamburger-menu'>
              <a href="#" onClick={() => setShowMediaIcon( !showMediaIcon )}>
                <GiHamburgerMenu />
              </a>
              </div>
          
        </div>
      </nav>
    </>
   );
}

export default Navbar;