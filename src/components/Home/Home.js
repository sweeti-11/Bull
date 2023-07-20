import React, { useEffect, useState } from "react";
import "./Home.css";
import AffiliateImg from '../assets/slider1.jpg';
import { BiDollar} from "react-icons/bi";
import {BsAward } from "react-icons/bs";
import Swipper from "./Swipper";
import Maingraph from "../assets/main-graph.png";
import Video from "../assets/Header_Video.mp4";
import green1 from "../assets/green1.png";
import newImg from "../assets/new.jpg";
import analysisImg from "../assets/green2.png";
import p2pImg from "../assets/green3.png";
import EasyToInvest from "../assets/green4.png";
import Mobile from "../assets/mobile.png";
import h1 from "../assets/home.png";
import AppStore from "../assets/app-store-btn.png";
import GoogleStore from "../assets/google-store-btn.png";
import { BsPlusCircleDotted } from "react-icons/bs";
import { MdOutlineInsights } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiOutlineSmile, AiOutlineProject, AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";
import NavbarCoins from "./NavbarCoins";
import { Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import { FaBloggerB } from "react-icons/fa";
import Coins from "./Coins";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";
import Testimonial from "./Testimonial";

const Home = () => {
  const Data = useContext(AppContext);
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Bulleye | Home</title>
      </Helmet>
      <section className="hero">
        <div className="container">
          <div className="row flex justify-start items-center top-main-content gy-4 ">
            <div className="col-lg-6 mt-5">
              <div className="discover text-black">
                <div className="doller">
                  <BiDollar />{" "}
                </div>
                <h6 className="discover-text">
                  {" "}
                  Discover a new ways to enjoy world{" "}
                </h6>
              </div>
              <div className="trade-wrape-div">
                <h3 className="Trade-text-main">
                  Trade like a legend on the legendary crypto exchange
                </h3>
                <p className="trade-para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error quasi esse fugit modi hic quae, reprehenderit ipsam?
                  Fugit aut eos rerum suscipit labore at necessitatibus
                  dignissimos, sit officia error assumenda.
                </p>
              </div>
              <div className="front-btn flex justify-start gap-4 ">
                <button className="main-btn"> Get Started</button>
                {/* <button className="main-btn"> Get Started</button> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="outervideo">
                <video autoPlay loop muted className="videostyle">
                  <source src={Video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-home" class="about-home">
      <div class="section-header text-center">
          <h2 style={{paddingTop:"46px", color: "#059473", fontSize:"45px", fontWeight:"500"}}>About Us</h2>
          <p>Learn More <span>About Us</span></p>
        </div>
      <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-xl-center gy-5">

          <div class="col-xl-5 content">
            <h2>Ducimus rerum libero reprehenderit cumque</h2>
            <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
          </div>

          <div class="col-xl-7" style={{marginTop:"100px", marginBottom:"60px"}}>
            <div class="row gy-4 icon-boxes">

              <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box">
                  <AiFillInstagram/>
                  <h3>Eius provident</h3>
                  <p>Magni repellendus vel 
                  ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                </div>
              </div> 

              <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box">
                 <AiFillInstagram/>
                  <h3>Rerum aperiam</h3>
                  <p>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</p>
                </div>
              </div> 

              <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box">
                 <AiFillInstagram/>
                  <h3>Veniam omnis</h3>
                  <p>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
                </div>
              </div> 

              <div class="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                <div class="icon-box">
                  <AiFillInstagram/>
                  <h3>Delares sapiente</h3>
                  <p>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
                </div>
              </div> 

            </div>
          </div>

        </div>
      </div>

    </section>
    <section id="slider-img" className="slider-img" style={{backgroundColor:"#cdd3e1"}}>
    <div className="container">
    <div className="row">
    <h2 className="text-center" style={{paddingBottom:"30px", color: "#059473", fontSize:"45px", fontWeight:"500"}}>Lorem</h2>
      <div className="col-lg-6">
      <img className="img-fluid" src={AffiliateImg}>
      </img>
      </div>
     <div className="col-lg-6" style={{marginTop:"40px"}}>
    <Testimonial/>
     </div>
     </div>
    </div>

    </section>
      <section className="slider__section__main">
        <div className="container">
          <div className="row flex justify-center items-center text-center ">
            <h3 className="text-black" style={{fontSize:"40px"}}>We are Trusted</h3>
            <div className="col flex justify-center items-center text-center flex-row gap-1">
              <div className="color1"></div> <div className="color2"></div>{" "}
              <div className="color3"></div> <div className="color4"></div>{" "}
              <div className="color5"></div> <div className="color6"></div>
            </div>
            <div className="slider-here pt-5">
              <Swipper />
            </div>
            <div className="row mt-5">
              <NavbarCoins />
              <Routes>
                <Route path="/" element={<Coins coins={coins} />} />
                <Route path="/coin" element={<Coin />}>
                  <Route path=":coinId" element={<Coin />} />
                </Route>
              </Routes>
            </div>
          </div>

          <div className="row flex justify-center items-center pt-5">
            <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
             
              <h3 className="main__common__heading text-black pb-1 pt-4">
                Trade
              </h3>
              <div className="col flex justify-start items-center text-center flex-row gap-1">
                <div className="color1"></div> <div className="color2"></div>{" "}
                <div className="color3"></div> <div className="color4"></div>{" "}
                <div className="color5"></div> <div className="color6"></div>
              </div>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Bulleye or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Bulleye or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <button className="main-btn">Read more</button>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="main__image__common">
                <img src={green1} alt="" className="img-fluid"></img>
              </div>
            </div>
          </div>

          <div className="row flex justify-center items-center pt-2">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="main__image__common">
                <img src={analysisImg} alt="" className="img-fluid"></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
              <h3 className="main__common__heading text-black pb-1 pt-4">
                Analytics
              </h3>
              <div className="col flex justify-start items-center text-center flex-row gap-1">
                <div className="color1"></div> <div className="color2"></div>{" "}
                <div className="color3"></div> <div className="color4"></div>{" "}
                <div className="color5"></div> <div className="color6"></div>
              </div>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Bulleye or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Bulleye or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <button className="main-btn">Read more</button>
            </div>
          </div>
          <div className="row flex justify-center items-center pt-2">
            <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
              <h3 className="main__common__heading text-black pb-1 pt-4">
                Peer-To-Peer
              </h3>
              <div className="col flex justify-start items-center text-center flex-row gap-1">
                <div className="color1"></div> <div className="color2"></div>{" "}
                <div className="color3"></div> <div className="color4"></div>{" "}
                <div className="color5"></div> <div className="color6"></div>
              </div>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Bulleye or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Bulleye or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <button className="main-btn">Read more</button>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="main__image__common">
                <img src={p2pImg} alt="" className="img-fluid"></img>
              </div>
            </div>
          </div>

          <div className="row flex justify-center items-center pt-2">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="main__image__common">
                <img src={EasyToInvest} alt="" className="img-fluid"></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 home-content-wrapper">
             
              <h3 className="main__common__heading text-black pb-1 pt-4">
                Easy To Invest
              </h3>
              <div className="col flex justify-start items-center text-center flex-row gap-1">
                <div className="color1"></div> <div className="color2"></div>{" "}
                <div className="color3"></div> <div className="color4"></div>{" "}
                <div className="color5"></div> <div className="color6"></div>
              </div>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Bulleye or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <p className="main__common__para text-black pt-3">
                An intuitive interface for trading all your assets. Trade any of
                the currencies supported by Bulleye or over 100 other IOUs on
                the XRP Ledger decentralized exchange. Explore and analyze the
                markets.The new Trade page works for you whether you're a
                beginner or a seasoned trader.
              </p>
              <button className="main-btn">Read more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="word__trading__section">
        <div className="container">
          <div className="row justify-center">
           
            <h2 className="wordCLass__heading text-black pt-3">
              World Class Trading Platform
            </h2>
            <div className="col flex justify-start items-center text-center flex-row gap-1">
              <div className="color1"></div> <div className="color2"></div>{" "}
              <div className="color3"></div> <div className="color4"></div>{" "}
              <div className="color5"></div> <div className="color6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              <div className="Outer__wordclass">
                <div className="wordClass__image">
                  <img src={p2pImg} alt="test" />
                </div>
                <div className="inner__worldClass__content">
                  <h3 className="inner__wordclass__heading">Exchange</h3>
                  <p className="inner__worldClass__para">
                    Bulleye offers order books with top tier liquidity, allowing
                    users to easily exchange Bitcoin, Ethereum, EOS, Litecoin,
                    Ripple, NEO and many other digital assets with minimal
                    slippage. Bulleye also boasts a suite of order types to help
                    traders take advantage of every situation
                  </p>
                </div>
              </div>
              <div className=" Outer__wordclass">
                <div className="wordClass__image ">
                  <img src={p2pImg} alt="test" />
                </div>
                <div className="inner__worldClass__content ">
                  <h3 className="inner__wordclass__heading">Margin trading</h3>
                  <p className="inner__worldClass__para">
                    Bulleye offers order books with top tier liquidity, allowing
                    users to easily exchange Bitcoin, Ethereum, EOS, Litecoin,
                    Ripple, NEO and many other digital assets with minimal
                    slippage. Bulleye also boasts a suite of order types to help
                    traders take advantage of every situation
                  </p>
                </div>
              </div>
              <div className=" Outer__wordclass">
                <div className="wordClass__image">
                  <img src={p2pImg} alt="test" />
                </div>
                <div className="inner__worldClass__content">
                  <h3 className="inner__wordclass__heading">Margin funding</h3>
                  <p className="inner__worldClass__para">
                    Bulleye offers order books with top tier liquidity, allowing
                    users to easily exchange Bitcoin, Ethereum, EOS, Litecoin,
                    Ripple, NEO and many other digital assets with minimal
                    slippage. Bulleye also boasts a suite of order types to help
                    traders take advantage of every situation
                  </p>
                </div>
              </div>

              <div className=" Outer__wordclass">
                <div className="wordClass__image">
                  <img src={p2pImg} alt="test" />
                </div>
                <div className="inner__worldClass__content">
                  <h3 className="inner__wordclass__heading">Security</h3>
                  <p className="inner__worldClass__para">
                    Bulleye offers order books with top tier liquidity, allowing
                    users to easily exchange Bitcoin, Ethereum, EOS, Litecoin,
                    Ripple, NEO and many other digital assets with minimal
                    slippage. Bulleye also boasts a suite of order types to help
                    traders take advantage of every situation
                  </p>
                </div>
              </div>
              <div className=" Outer__wordclass">
                <div className="wordClass__image">
                  <img src={p2pImg} alt="test" />
                </div>
                <div className="inner__worldClass__content">
                  <h3 className="inner__wordclass__heading">Order Type</h3>
                  <p className="inner__worldClass__para">
                    Bulleye offers order books with top tier liquidity, allowing
                    users to easily exchange Bitcoin, Ethereum, EOS, Litecoin,
                    Ripple, NEO and many other digital assets with minimal
                    slippage. Bulleye also boasts a suite of order types to help
                    traders take advantage of every situation
                  </p>
                </div>
              </div>
              <div className=" Outer__wordclass">
                <div className="wordClass__image">
                  <img src={p2pImg} alt="test" />
                </div>
                <div className="inner__worldClass__content">
                  <h3 className="inner__wordclass__heading">
                    Customizable Interface
                  </h3>
                  <p className="inner__worldClass__para">
                    Bulleye offers order books with top tier liquidity, allowing
                    users to easily exchange Bitcoin, Ethereum, EOS, Litecoin,
                    Ripple, NEO and many other digital assets with minimal
                    slippage. Bulleye also boasts a suite of order types to help
                    traders take advantage of every situation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-platform__section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4 pt-4 trusted-platform">
            <div className="col">
              <div className="mobile_circule_outer"></div>
              <div className="mobile-image">
                <img src={Mobile} alt="mobile" />
              </div>
            </div>
            <div className="col">
              <div className="mobile__content ">
               
                <h2 className="mobile__heading text-black pt-3">
                  Trusted Platform Anytime & Anywhere
                </h2>
                <div className="col flex justify-start items-center text-center flex-row gap-1">
                  <div className="color1"></div> <div className="color2"></div>{" "}
                  <div className="color3"></div> <div className="color4"></div>{" "}
                  <div className="color5"></div> <div className="color6"></div>
                </div>
                <p className="mobile__para text-black">
                  The Bulleye mobile app adapts the full functionality of the
                  Bulleye platform for seamless ‘on-the-go’ trading.
                  <br />
                  The Bulleye Mobile application allows you to connect to your
                  Bulleye trading account and provide live information about
                  your open orders as well as the status of your account.
                  Wherever you are, you can easily make changes to your trades
                  and never have to miss an opportunity again.
                </p>
                <p className="mobile__para text-black">
                  The dawn of a better world that is freer. Send or receive any
                  amount of money from anywhere on the planet!
                </p>
                <div className="row flex justify-start gap-4 pt-3 appStoreBtn">
                  {/* <div className="col ">
                    <img src={AppStore} alt="mobile" />
                  </div> */}
                  <div className="col">
                    <img src={GoogleStore} alt="mobile" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-invest">
        <div className="container">
          <div className="row">
            <div className="col flex justify-center items-center flex-column mb-5">
              <h2 className="invest__heading text-black">
                Get started in a few minutes
              </h2>
              <p className="invest__sub-heading text-black">
                Start your crypto investment with Bulleye now !
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col ">
              <div className="invest__outer ">
                <div className="flex justify-center items-center pt-5">
                  <div className="invest__circle flex justify-center items-center">
                    <BsPlusCircleDotted className="icons" size="4rem" />
                  </div>
                </div>
                <div className="invest__content flex justify-center items-center flex-column">
                  <h2 className="invest__account-heading">Create an account</h2>
                  <p className="invest__account-para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur, iste?
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="invest__outer">
                <div className="flex justify-center items-center pt-5">
                  <div className="invest__circle flex justify-center items-center">
                    <AiOutlineBank className="icons" size="4rem" />
                  </div>
                </div>
                <div className="invest__content flex justify-center items-center flex-column">
                  <h2 className="invest__account-heading">
                    Link your bank account
                  </h2>
                  <p className="invest__account-para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur, iste?
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="invest__outer">
                <div className="flex justify-center items-center pt-5">
                  <div className="invest__circle flex justify-center items-center">
                    <MdOutlineInsights className="icons" size="4rem" />
                  </div>
                </div>
                <div className="invest__content flex justify-center items-center flex-column">
                  <h2 className="invest__account-heading">
                    Start buying & selling
                  </h2>
                  <p className="invest__account-para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur, iste?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="counts" class="counts bg-[#cdd3e1]" style={{paddingBottom: "30px"}}>
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row no-gutters">
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate" data-aos="fade-right" data-aos-delay="100"></div>
          <div class="col-xl-7 ps-4 ps-lg-5 pe-4 pe-lg-1 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <div class="content d-flex flex-column justify-content-center">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
              <div class="row">
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                  <AiOutlineSmile/>
                                      <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="0" class="purecounter">65</span>
                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <AiOutlineProject/>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="0" class="purecounter">85</span>
                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <AiOutlineClockCircle/>
                    <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="0" class="purecounter">35</span>
                    <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <BsAward/>
                    <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="0" class="purecounter">20</span>
                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

      {/* <section id="features" class="features">

      <div class="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div class="container">

        <div class="row gy-4 align-items-center features-item">
          <div class="col-lg-5 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <h3>Corporis temporibus maiores provident</h3>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <a href="#" class="btn btn-get-started">Get Started</a>
          </div>
          <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
            <div class="image-stack">
              <img src={h1} alt="" class="stack-front"/>
              <img src={Maingraph} alt="" class="stack-back"/>
            </div>
          </div>
        </div>
      </div>

    </section> */}
  
    </>
  );
};

export default Home;
