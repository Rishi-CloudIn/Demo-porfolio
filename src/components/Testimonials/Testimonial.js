import React from 'react';
import './Testimonial.css'

function Testimonial() {
  return ( 
    <>
      <div className="testi-container container">
        <hr />
        <div className="title-wrapper">
          <h1 className="testi-title">Our Testimonial</h1>
          <div className="testi-line"></div> 
        </div>
        <p className="testi-p">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit met lorem ipsum dolor sit amet lorem </p>


        {/* content */}

        <div className="testi-content">

          <div className="testi-content-1">
            <div className="testi-content-card">
              <img src="./images/testi-img/testi-person-1.jpg" alt="photo" className="testi-img" />
              <p className="testi-content-p">lorem ipsum dolor sit lorem ipsum dolor sit lorem</p>
            </div>
            <h2 className='testi-content-h2'>Nick Black</h2>
            <p className="testi-content-p1">coder</p>
          </div>

          <div className="testi-content-2">
            <div className="testi-content-card">
              <img src="./images/testi-img/testi-person-2.jpg" alt="photo" className="testi-img" />
              <p className="testi-content-p">lorem ipsum dolor sit lorem ipsum dolor sit lorem</p>
            </div>
            <h2 className='testi-content-h2'>Rob Black</h2>
            <p className="testi-content-p1">designer</p>
          </div>

          <div className="testi-content-2">
            <div className="testi-content-card">
              <img src="./images/testi-img/testi-person-3.jpg" alt="photo" className="testi-img"/>
              <p className="testi-content-p">lorem ipsum dolor sit lorem ipsum dolor sit lorem</p>
            </div>
            <h2 className='testi-content-h2'>Liza Black</h2>
            <p className="testi-content-p1">seo</p>
          </div>


        </div>
      </div>
    </>
   );
}

export default Testimonial;