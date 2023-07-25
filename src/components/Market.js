import React from 'react'
import './commodity.css'
import { GiGoldNuggets } from 'react-icons/gi';
import { BsArrowUpSquare } from 'react-icons/bs';

const Market = () => {
  return (
    <div>
     <section id='market' className='market'>
      <div className='container'>
      <div className='row'>
      <h3>India Market</h3>
      <div className='col-lg-5 coin-data'>
      <div className='d-flex'>
      <GiGoldNuggets/>
      <h6>Gold</h6>
      </div>
      <div className='d-flex'>
      <BsArrowUpSquare/>
      <h6>59,091.00</h6>
      </div>
      <div>
      <p style={{color:"green", paddingTop:"10px"}}>15.00 (0.03%)</p>
      </div>
      <div>
        <p style={{color:"black", fontWeight:"bold"}}>25-Jul-2023</p>
        <p style={{color:"black", fontWeight:"bold"}}>11:02 AM</p>
      </div>

      </div>
      <div className='col-lg-5 coin-data'>
      <div className='d-flex'>
      <GiGoldNuggets/>
      <h6>Gold</h6>
      </div>
      <div className='d-flex'>
      <BsArrowUpSquare/>
      <h6>59,091.00</h6>
      </div>
      <div>
      <p style={{color:"green", paddingTop:"10px"}}>15.00 (0.03%)</p>
      </div>
      <div>
        <p style={{color:"black", fontWeight:"bold"}}>25-Jul-2023</p>
        <p style={{color:"black", fontWeight:"bold"}}>11:02 AM</p>
      </div>

      </div>
      <div className='col-lg-5 coin-data'>
      <div className='d-flex'>
      <GiGoldNuggets/>
      <h6>Gold</h6>
      </div>
      <div className='d-flex'>
      <BsArrowUpSquare/>
      <h6>59,091.00</h6>
      </div>
      <div>
      <p style={{color:"green", paddingTop:"10px"}}>15.00 (0.03%)</p>
      </div>
      <div>
        <p style={{color:"black", fontWeight:"bold"}}>25-Jul-2023</p>
        <p style={{color:"black", fontWeight:"bold"}}>11:02 AM</p>
      </div>

      </div>
      <div className='col-lg-5 coin-data'>
      <div className='d-flex'>
      <GiGoldNuggets/>
      <h6>Gold</h6>
      </div>
      <div className='d-flex'>
      <BsArrowUpSquare/>
      <h6>59,091.00</h6>
      </div>
      <div>
      <p style={{color:"green", paddingTop:"10px"}}>15.00 (0.03%)</p>
      </div>
      <div>
        <p style={{color:"black", fontWeight:"bold"}}>25-Jul-2023</p>
        <p style={{color:"black", fontWeight:"bold"}}>11:02 AM</p>
      </div>
         
      </div>

      </div>

      </div>
     </section>
    </div>
  )
}
 
export default Market