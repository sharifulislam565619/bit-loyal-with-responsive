import React from 'react';
import './Token.css';

const Token = () => {
   return (
      <div id='token_section' className='token text-white'>
         <div className="container">
            <div className='token-title'>
               <p><small>$ROYAL</small></p>
               <h1 >Tokenomics</h1>
            </div>
            <div className='total-supply my-4'>
               <p className='mb-0'><small>Total Supply:</small></p>
               <h1 style={{ fontSize: '64px', fontWeight: '800' }}>100, 000, 000</h1>
            </div>
            <div className="row text-start">
               <div className="row g-3">
                  <div className="col-md-3 col-sm-6 col-xs-6">
                     <div className='percent'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                           <h1>1%</h1>
                           <small>1,000,000</small>
                        </div>
                        <small className='text-start'>Private Sale</small>
                     </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6 ">
                     <div className='percent'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                           <h1>3%</h1>
                           <small>3,000,000</small>
                        </div>
                        <small className='text-start'>IDO</small>
                     </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6 ">
                     <div className='percent'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                           <h1>6%</h1>
                           <small>6,000,000</small>
                        </div>
                        <small className='text-start'>Marketing</small>
                     </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6 ">
                     <div className='percent'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                           <h1>10%</h1>
                           <small>10,000,000</small>
                        </div>
                        <small className='text-start'>Liquidity</small>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row text-start">
               <div className="row g-3">
                  <div className="col-md-3 col-sm-6 col-xs-6">
                     <div className='percent'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                           <h1>10%</h1>
                           <small>10,000,000</small>
                        </div>
                        <small className='text-start'>Core Team</small>
                     </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6 ">
                     <div className='percent'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                           <h1>10%</h1>
                           <small>10,000,000</small>
                        </div>
                        <small className='text-start'>Development</small>
                     </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6 ">
                     <div className='percent'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                           <h1>10%</h1>
                           <small>10,000,000</small>
                        </div>
                        <small className='text-start'>Ecosystem</small>
                     </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-6 ">
                     <div className='percent'>
                        <div className='d-flex justify-content-between align-items-baseline'>
                           <h1>50%</h1>
                           <small>50,000,000</small>
                        </div>
                        <small className='text-start'>Play2Earn</small>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Token;