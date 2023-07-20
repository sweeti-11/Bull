import React from 'react';
import Container from 'react-bootstrap/Container';
import FutureImg from "../assets/FutureImg.png";
import './Future.css';
import AffiliateImg from '../assets/home-banner-bg.png';
import lavragImg from "../assets/lavrage.png";
import risk from "../assets/risk-m.png";
import currency from "../assets/currency-pair.png";
import { Helmet } from 'react-helmet';
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Future = () => {
  return (
    <>
     <Helmet>
        <title>Bulleye | Future</title>
      </Helmet>
      <section id='future' className='future' style={{ backgroundImage: `url(${AffiliateImg})` }}>
        <Container>
          <div className='row'>
            <div className='col-lg-6'>
              <h1>Trade In Crypto Future Today</h1>
              <p>Maximise your trading potential with leverage up to 15X with crypto futures</p>
              <div>
              <Link to={"/sign-in"}> <button className="main-btn">Sign In</button></Link>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={FutureImg} alt='phone' className='img-fluid future_img'></img>
            </div>
          </div>
        </Container>
      </section>
      
      <section id="services" class="services" style={{backgroundColor:"#cdd3e1"}}>
      <div class="container">

        <div class="section-title text-center">
          <h2 style={{paddingTop:"46px", color: "#059473", fontSize:"45px", fontWeight:"500"}}>Services</h2>
          <p style={{paddingBottom: "30px"}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon" style={{color:"#ff689b"}}><BsFillCalendar2EventFill/></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon" style={{color:"#e9bf06"}}><BsFillCalendar2EventFill/></div>
              <h4 class="title"><a href="">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div class="icon-box">
              <div class="icon" style={{color:"#3fcdc7"}}><BsFillCalendar2EventFill/></div>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Duis aute irure dolor</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-wow-delay="0.1s">
            <div class="icon-box">
              <div class="icon" style={{color:"#41cf2e"}}><BsFillCalendar2EventFill/></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Duis aute irure dolor</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div class="icon-box">
              <div class="icon"  style={{color:"#d6ff22"}}><BsFillCalendar2EventFill/></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6" data-wow-delay="0.2s">
            <div class="icon-box">
              <div class="icon" style={{color:"#4680ff"}}><BsFillCalendar2EventFill/></div>
              <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi Duis aute irure dolor</p>
            </div>
          </div>
        </div>

      </div>
    </section>
      <section id='leverage' className='leverage  bg-[#cdd3e1] pt-[30px]'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 order-lg-1 order-2'>
              <img src={lavragImg} alt='phone' className='img-fluid icons_img'></img>
            </div>
            <div className='col-lg-6 future-levrage mt-5 mb-5 order-lg-2 order-1'>
              <h2>Futures trading with leverage</h2>
              <p>Bulleye Futures offers leverage, allowing you to amplify your buying or selling power.
                Thus you could buy/sell a lot more shares of futures than equity with a certain amount of money. For example, if the margin is fixed at 20% for futures in a stock, one could buy/sell 5x times more shares in futures than in equity. This ratio is called leverage. Thus, with 20% margin, the leverage is 5.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='flexibility' className='flexibility  bg-[#cdd3e1] pt-[30px] '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 future-levrage mt-5 mb-5'>
              <h2>Flexibility in risk management</h2>
              <p>Bulleye Futures offers leverage, allowing you to amplify your buying or selling power.
                Risk management is a vital element of success for any trader in any market. No matter the size of the capital you're trading with or investing in, losses are going to be inevitable, particularly in highly volatile markets like cryptocurrency
              </p>
            </div>
            <div className='col-lg-6 icon_img'>
              <img src={risk} alt='phone' className='img-fluid'></img>
            </div>
          </div>
        </div>
      </section>
      <section id='currency' className='leverage  bg-[#cdd3e1] pt-[30px]'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 order-lg-1 order-2'>
              <img src={currency} alt='phone' className='img-fluid icons_img'></img>
            </div>
            <div className='col-lg-6  future-levrage mt-5 mb-5 order-lg-2 order-1'>
              <h2>Trade a range of currency pairs</h2>
              <p>Gain exposure to a variety of pairs using your multi-collateral futures wallet with 10 different collateral options.
                The most versatile cryptocurrency pairs to trade are usually BTC and ETH, as they're offered by most exchanges. Many crypto exchanges offer pairings for cryptocurrencies and fiat currencies like the U.S. dollar (USD), while some do not.
              </p>
        </div>
        </div>
        </div>
      </section>
      <section id="features-future" class="features-future bg-[#cdd3e1] pb-5" >
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row">
          <div class="image col-lg-6 aos-init aos-animate img-fluid" style={{ backgroundImage: `url(${AffiliateImg})` }} data-aos="fade-right"></div>
          <div class="col-lg-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <div class="icon-box mt-5 mt-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
              {/* <i class="bx bx-receipt"></i> */}<BsFillCalendar2EventFill/>
              <h4>Est labore ad</h4>
              <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>
            <div class="icon-box mt-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
              {/* <i class="bx bx-cube-alt"></i> */}<BsFillCalendar2EventFill/>
              <h4>Harum esse qui</h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>
            <div class="icon-box mt-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
              {/* <i class="bx bx-images"></i> */}<BsFillCalendar2EventFill/>
              <h4>Aut occaecati</h4>
              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
            <div class="icon-box mt-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
              {/* <i class="bx bx-shield"></i> */}<BsFillCalendar2EventFill/>
              <h4>Beatae veritatis</h4>
              <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    </>
  )
}

export default Future
