import React from 'react'
import './Contact.css';
import { MdLocationPin, MdEmail, MdCall } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import {FaMapMarkerAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion'
import AffiliateImg from '../assets/home-banner-bg.png'
import AboutMainSection from '../assets/about-us.png'

const ContactUs = () => {
  return (
   <>
   <Helmet>
        <title>Bulleye | Contact Us </title>
      </Helmet>

  <section id='about_hero' className='about_hero' style={{ backgroundImage: `url(${AffiliateImg})` }}>
                <div className='container'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-white text-[40px] pt-3 md:text-[60px] lg:text-[60px] xl:text-[60px] 2xltext-[60px] font-bold'>Contact-Us</h1>

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
  <section id="contact" class="contact" style={{backgroundColor:"#cdd3e1"}}>
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title text-center">
          <h2 style={{paddingTop:"46px", color: "#059473", fontSize:"45px", fontWeight:"500"}}>Contact</h2>
          <p style={{paddingBottom: "30px"}}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="infoo">
              <div class="address">
                <MdLocationPin/>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div class="email">
              <MdEmail/>            
                  <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
              <MdCall/>
                              <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47969423.5528496!2d33.825476660327894!3d42.7921283335593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd17a4db1f47%3A0x9233987981cbf1e3!2sChetak%20Center%2C%20RNT%20Marg%2C%20Near%20Hotel%20Shreemaya%2C%20South%20Tukoganj%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1689671366579!5m2!1sen!2sin" frameborder="0"  style={{border:"0", width:"100%", height:"290px"}} allowfullscreen=""></iframe>
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form   role="form" class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" required=""/>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" required=""/>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" required=""/>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" required=""></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
   
   </>
  )
}

export default ContactUs