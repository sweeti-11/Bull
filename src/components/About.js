import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import AffiliateImg from './assets/home-banner-bg.png'
import AboutMainSection from './assets/about-us.png'
import AboutPlatform from './assets/about.png'
import BoxImg1 from './assets/img_blog2.png'
import  BoxImg2 from './assets/img_blog3.png'
import  OurValue from './assets/our-value.png'
import { NavLink } from 'react-router-dom';
import {Link} from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineCursorArrowRipple } from 'react-icons/hi2';
import {BsCheck2All} from 'react-icons/bs'
import './About.css';
import { Helmet } from 'react-helmet';
const About = () => {
    return (
        <>
        <Helmet>
        <title>Bulleye | About Us</title>
      </Helmet>
            <section id='about_hero' className='about_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
                <div className='container'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-white text-[40px] pt-3 md:text-[60px] lg:text-[60px] xl:text-[60px] 2xltext-[60px] font-bold'>About-US</h1>

                        </div>
                        <div className='  flex justify-center items-center'>
                        <AnimatePresence>
                        <motion.div
                            initial={{ x: -50 }}
                            animate={{ x: 10 }}
                            exit={{ x: 100 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", type: "tween", bounce: 0.25 }}
                            className="two p-50px">
                            <img src={AboutMainSection} alt='About.png' className='img-fluid'></img>
                            </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about-sec" class="about-sec" style={{backgroundColor:"#cdd3e1"}}>
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-header text-center">
          <h2 style={{paddingTop:"46px", color: "#059473", fontSize:"45px", fontWeight:"500"}}>About Us</h2>
          <p style={{paddingBottom: "30px"}}>Learn More <span>About Us</span></p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-7 position-relative about-img aos-init aos-animate" style={{ backgroundImage: `url(${AffiliateImg})` }} data-aos="fade-up" data-aos-delay="150">
            {/* <div class="call-us position-absolute">
              <h4>Book Your Appoinment</h4>
              <p>+1 5589 55488 55</p>
            </div> */}
          </div>
          <div class="col-lg-5 d-flex align-items-end aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div class="content ps-0 ps-lg-5">
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><BsCheck2All/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><BsCheck2All/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><BsCheck2All/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>

              <div class="position-relative mt-4">
                <img src={AffiliateImg} class="img-fluid" alt=""/>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
            <section className="crypto-platform bg-[#cdd3e1] pt-[60px]">
                <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                    <div className="  flex justify-center items-center">
                        <img src={AboutPlatform} alt='About.png' className='img-fluid'></img>
                    </div>
                    <div className="flex justify-center items-start flex-column">
                        <h4 className='text-[#000000] '>About Bulleye?</h4>
                        <h2 className='text-black pt-4'>We Built a Crypto Platform</h2>
                        <h2 className='text-black'>To Buy & Sell Shares</h2>
                        <p className='text-black text-[20px] pt-2'>Progressively predominate performance based internal or "orga sources before high standards in architectures. Interactively ini transparent functionalities via efficient ROI.</p>

                    </div>
                </div>
                </div>
            </section>

            <section id='about_product' className='about_product bg-[#cdd3e1] pt-[60px]'>
                <div className='container'>
                    <div className='text-center'>
                        <h1 className='font-bold text-black'> Bulleye Products</h1>
                    </div>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 px-3  content-justify-center'>
                        <div className=' '>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                    <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem"/></div>
                                    <h3>Bulleye</h3>
                                </div>
                                <p>Bulleye seeks to provide deep and reliable liquidity in the cryptocurrency ecosystem. We deliver a variety of
                                    products and services, including margin trading, derivatives and institutional-grade connectivity
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                  <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem"/></div>
                                    <h3>Bulleye Pay</h3>
                                </div>

                                <p>Accept cryptocurrency payments for your goods or services, seamlessly. Access the
                                    world of cryptocurrency and explore its endless possibilities with a simple and easy setup
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                  <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem"/></div>
                                    <h3>Bulleye Borrow</h3>
                                </div>

                                <p>Set your own payment terms on our peer-to-peer platform using a number of different cryptocurrencies as collateral. You can use funds on
                                    Bulleye or withdraw and spend as you choose.
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                  <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem"/></div>
                                    <h3>UNUS SED LEO</h3>
                                </div>

                                <p>Bulleye native utility token, UNUS SED LEO, provides holders with a variety of benefits, including discounts
                                    on trading fees and P2P lending fees.
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                  <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem"/></div>
                                    <h3>Bulleye payment</h3>
                                </div>

                                <p>Accept cryptocurrency payments for your goods or services, seamlessly. Access the
                                    world of cryptocurrency and explore its endless possibilities with a simple and easy setup
                                </p>
                            </div>
                        </div>
                        <div className=''>

                            <div className='product'>
                                <div className="circle-wrapper flex justify-center items-start gap-2 flex-column">
                                  <div className="circle-product flex justify-center items-center"><HiOutlineCursorArrowRipple className='text-yellow' size="2rem"/></div>
                                    <h3>Affiliate Program</h3>
                                </div>

                                <p>Set your own payment terms on our peer-to-peer platform using a number of different cryptocurrencies as collateral. You can use funds on
                                    Bulleye or withdraw and spend as you choose
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='about_value' className='about_value bg-[#cdd3e1] pt-[60px]'>
                <div className='container'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 justify-center items-center'>
                        <div className="">
                            <div className="row flex jutify-center items-center ">
                                <h1 className='text-black font-bold text-[36px]'>Our Values</h1>
                                <Accordion defaultActiveKey="0">
                                    <div className='col'>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header> <h3>Think Clearly</h3></Accordion.Header>
                                            <Accordion.Body>
                                                <p>  We consider clarity of thought to be the single most important trait we look for in our colleagues
                                                    We think about the message we want to deliver before we speak, and know what is important and what is not We are concise and articulate, putting effort into making things simple and easy to understand
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header><h3>Dream Big</h3> </Accordion.Header>
                                            <Accordion.Body>
                                                <p>   We think big, take smart risks, and do things that have never been done before We are not afraid to make tough choices that align with our long-term objectives
                                                    We know that it always seems impossible until it’s done</p>
                                            </Accordion.Body>

                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header> <h3>Be Resourceful</h3></Accordion.Header>
                                            <Accordion.Body>
                                                <p>We go beyond the surface to gain a deep understanding of every issue We always find a way to get things done with what’s available, but we are not shy about asking for help when it’s needed
                                                    We believe that great ideas can come from anywhere, regardless of seniority and experience
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </div>

                                    <div className='col'>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header> <h3> Take Ownership and Be Decisive </h3> </Accordion.Header>
                                            <Accordion.Body>
                                                <p>We are all empowered to take initiative, make the right decisions, and act as owners We are committed to protecting our company culture and seek to bring in the best people we’ve ever worked with
                                                    We aim to surprise and inspire with the quality and speed of our decision-making
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>  <h3>Stay Determined</h3>  </Accordion.Header>
                                            <Accordion.Body>
                                                <p>We never give up, carry each other through hard times, and recognise grit in our colleagues
                                                    We understand that building a world-changing company is a monumental task, but we love every minute of it
                                                    We celebrate milestones together, recharge, and get back to work</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col'>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>  <h3>Remain Humble</h3>  </Accordion.Header>
                                            <Accordion.Body>
                                                <p>We don’t seek the limelight and focus on doing what is best for the company and the users
                                                    We leave our egos at the door and learn from our mistakes, knowing that we are always stronger as a team
                                                    We think twice before spending, but are aggressive when it comes to investing in what matters
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Accordion>
                            </div>

                        </div>
                        <div className=" flex justify-end items-end ">
                        <AnimatePresence>
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 20 }}
                            exit={{ y: 100 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", type: "tween", bounce: 0.25 }}>
                            <img src={OurValue} alt='About.png' className='img-fluid'/>
                        
                            </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news__blog bg-[#cdd3e1] pt-[100px]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                        <div className="">
                            <h4 className='text-[#000000] '>News</h4>
                            <h2 className='text-black pt-4'>From the blog</h2>
                            <p className='text-black pt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                            <button className=' view-btn text-white bg-[#ff5e14]' >View More</button>
                        </div>
                        <div className="">
                            <div className=" grid grid-cols-2 gap-4">
                                <div className="">
                                    <div className="main-card mb-5">
                                        <div className="img-w-img">
                                            <img src={BoxImg1} alt='About.png' className='img-fluid rounded-t-xl'></img>
                                        </div>
                                        <div className="card-content">
                                            <h5 className='text-white font-bold pt-1  text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]'>From the blog</h5>
                                            <p className='text-white pt-1  text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]'>It is a long established fact that a reader will be distracted </p>
                                            <NavLink className='anchor-text text-white font-bold pt-2  text-[10px] md:text-[12px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]' as={Link} to={"/"}><h5 > Read More</h5></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                <div className="main-card mb-4">
                                        <div className="img-w-img">
                                            <img src={BoxImg2} alt='About.png' className='img-fluid rounded-t-xl  '></img>
                                        </div>
                                        <div className="card-content">
                                            <h5 className='text-white font-bold pt-1 text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] '>From the blog</h5>
                                            <p className='text-white pt-1 text-[15px] md:text-[15px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]'>It is a long established fact that a reader will be distracted</p>
                                    
                                            <NavLink className='anchor-text text-white font-bold pt-2  text-[10px] md:text-[12px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px]' as={Link} to={"/"}><h5 > Read More</h5></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About