import React from 'react';
import './pricing.css';


function Pricing() {
  return ( 
    <>
      <div className="pricing-container container">
         <hr />
        <div className="title-wrapper">
          <h1 className="pricing-title">Our Pricings</h1>
          <div className="pricing-line"></div> 
        </div>
        <p className="pricing-p">lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem </p>
      

        <div className="row">
          <div className="card-group">
            {/* <div className="col">   */}
            <div className="col">
  <div className="card card-1">
                  <h4 className='pricing-plan-heading'>small plan</h4>
                  <h1 className='pricing-amount'>$14.90</h1>
                  <p className="card-text pricing-amount-subtext">billing per amount</p>
                  <hr />
                <div className="card-body">
                  <h5 className="card-title pricing-sites">10 Sites</h5>
                  <p className="card-text pricing-customer">Customer 24/7 support</p>
                  <p className="card-text pricing-updates">unlimited updates</p>
                  <p className="card-text pricing-users">unlimited users</p>
                  <button className="btn btn-primary">Coming soon</button>
                </div>
            {/* </div> */}
            </div>
            </div>
              
              {/* <div className="col">   */}
            <div className="col">
  <div className="card card-1">
                  <h4 className='pricing-plan-heading'>small plan</h4>
                  <h1 className='pricing-amount'>$14.90</h1>
                  <p className="card-text pricing-amount-subtext">billing per amount</p>
                  <hr />
                <div className="card-body">
                  <h5 className="card-title pricing-sites">10 Sites</h5>
                  <p className="card-text pricing-customer">Customer 24/7 support</p>
                  <p className="card-text pricing-updates">unlimited updates</p>
                  <p className="card-text pricing-users">unlimited users</p>
                  <button className="btn btn-primary">Coming soon</button>
                </div>
            {/* </div> */}
            </div>
            </div>  {/* <div className="col">   */}
            <div className="col">
  <div className="card card-1">
                  <h4 className='pricing-plan-heading'>small plan</h4>
                  <h1 className='pricing-amount'>$14.90</h1>
                  <p className="card-text pricing-amount-subtext">billing per amount</p>
                  <hr />
                <div className="card-body">
                  <h5 className="card-title pricing-sites">10 Sites</h5>
                  <p className="card-text pricing-customer">Customer 24/7 support</p>
                  <p className="card-text pricing-updates">unlimited updates</p>
                  <p className="card-text pricing-users">unlimited users</p>
                  <button className="btn btn-primary">Coming soon</button>
                </div>
            {/* </div> */}
            </div>
            </div>
            
           
            
  
          </div>
          
         
        </div>
        </div>

    </>
   );
}

export default Pricing;