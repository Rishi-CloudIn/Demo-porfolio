import React from 'react';
import './Process.css';
import { TiPencil } from 'react-icons/ti';
import { BiCustomize } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


function Process ()
{

  return ( 
    <>
      <div className="process-container container">
        <div className="title-wrapper">
          <h1 className="process-title">Our Process</h1>
          <div className="process-line"></div> 
        </div>
        <p className="process-p">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit met lorem ipsum dolor sit amet lorem </p>


        <div className="process-content">
          <div className="process-content-1">
            <i className="process-icon"><TiPencil /></i>
            <h2 className="process-content-h2">get start</h2>
            <p className='process-content-p'>lorem ipsum dolor sit</p>
          </div>

          <div class="skill-bar">
            <div class="skill-progress"></div>
            <i className='process-icon-1'><BsFillArrowRightCircleFill/></i>
          </div>

          <div className="process-content-1">
            <i><BiCustomize /></i>
            <h2 className="process-content-h2">get start</h2>
            <p className='process-content-p'>lorem ipsum dolor sit</p>
          </div>

           <div class="skill-bar">
            <div class="skill-progress"></div>
            <i className='process-icon-1'><BsFillArrowRightCircleFill/></i>
          </div>

          <div className="process-content-1">
            <i><AiOutlineUsergroupAdd /></i>
            <h2 className="process-content-h2">get start</h2>
            <p className='process-content-p'>lorem ipsum dolor sit</p>
          </div>
          
        </div>
          <button className="process-btn">Get Started</button>
      </div>
    </>
   );
}

export default Process;
