import React from 'react'
import {Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './Footer.css';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { FaTelegram } from 'react-icons/fa';
import { BsReddit } from 'react-icons/bs';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


const Footer = () => {
    return (
        
        <>
        

            <footer id="foot" class="foot">

    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center">
            <span>Impact</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          {/* <div class="social-links d-flex mt-4">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div> */}
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>
            A108 Adam Street <br/>
            New York, NY 535022<br/>
            United States <br/><br/>
            <strong>Phone:</strong> +1 5589 55488 55<br/>
            <strong>Email:</strong> info@example.com<br/>
          </p>

        </div>

      </div>
    </div>
<hr></hr>
    <div class="container mt-4">
      <div class="copyright">
        © Copyright <strong><span>Impact</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

        </>


    )
}

export default Footer;