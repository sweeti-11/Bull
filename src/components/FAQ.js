import React from 'react'
import './FAQ.css'
import {MdOutlineLogin, MdArrowForwardIos, MdOutlineLogout,MdOutlineSecurity, MdOutlineLock, MdOutlineSettings, MdOutlineVerifiedUser} from 'react-icons/md'
import {BsBank2, BsArrowLeftRight, BsCodeSlash,BsExclamationTriangle} from 'react-icons/bs'
import {CiMobile2, CiCircleQuestion} from 'react-icons/ci'
import {TbFriends, TbArrowFork} from 'react-icons/tb'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet'
const FAQ = () => {
  return (
    <>
     <Helmet>
        <title>Bulleye | Frequently Asked Question</title>
      </Helmet>
    <section id='faq_hero' className='faq_hero'>
      <div className='container'>
        <div className='row'>
        <span className='text-center'>Contact Bulleye Support</span>
        <div className='d-flex'>
        <div className='col-lg-2'></div>
        <div className='col-lg-8'>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/token-deposite"}><MdOutlineLogin/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/token-deposite"}><h3>Token Deposits</h3></Nav.Link>
        <Nav.Link as={Link} to={"/token-deposite"}><h6>Delays, incorrect Tag/Memos/Payment IDs</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/token-deposite"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/token-withdrawals"}><MdOutlineLogout/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/token-withdrawals"}><h3>Token Withdrawals</h3></Nav.Link>
        <Nav.Link as={Link} to={"/token-withdrawals"}><h6>Delays, cancellations, confirmation email missing</h6>
</Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/token-withdrawals"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/bank-wires"}><BsBank2/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/bank-wires"}><h3>Bank Wires</h3></Nav.Link>
        <Nav.Link as={Link} to={"/bank-wires"}><h6>Delayed wires, withdrawal fees, wire cancellations</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/bank-wires"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/account-access"}> <MdOutlineLock/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/account-access"}><h3>Account Access</h3></Nav.Link>
        <Nav.Link as={Link} to={"/account-access"}><h6>Holds, 2FA, Google Authenticator, U2F, Passwords</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/account-acces"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/account-setting"}><MdOutlineSettings/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/account-setting"}><h3>Account Settings</h3></Nav.Link>
        <Nav.Link as={Link} to={"/account-setting"}><h6>Corporate accounts, account closures, email changes</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/account-setting"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
       <Nav.Link as={Link} to={"/verification"}><MdOutlineVerifiedUser/> </Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/verification"}><h3>Verification</h3></Nav.Link>
        <Nav.Link as={Link} to={"/verification"}><h6>Verification status, cancellations</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/verification"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/trading-and-funding"}><BsArrowLeftRight/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/trading-and-funding"}><h3>Trading and Funding</h3></Nav.Link>
        <Nav.Link as={Link} to={"/trading-and-funding"}><h6>Order issues, trading fees, funding payments</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/trading-and-funding"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/application-programming-interface"}><BsCodeSlash/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/application-programming-interface"}><h3>Application programming interface</h3></Nav.Link>
        <Nav.Link as={Link} to={"/application-programming-interface"}><h6>API, WS, documentation, API Key</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/application-programming-interface"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/mobile-application"}><CiMobile2/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/mobile-application"}><h3>Mobile Application</h3></Nav.Link>
        <Nav.Link as={Link} to={"/mobile-application"}><h6>Login, API Key, bug reporting</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/mobile-application"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/bug-reporting"}><BsExclamationTriangle/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/bug-reporting"}><h3>Bug Reporting</h3></Nav.Link>
        <Nav.Link as={Link} to={"/bug-reporting"}> <h6>Charts, balances or orders not loading, error messages</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/bug-reporting"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/security-concern"}><MdOutlineSecurity/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/security-concern"}><h3>Security Concern</h3></Nav.Link>
        <Nav.Link as={Link} to={"/security-concern"}><h6>Compromised account, stolen funds, impersonation</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/security-concern"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/partnership"}><TbFriends/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/partnership"}> <h3>Partnership</h3></Nav.Link>
        <Nav.Link as={Link} to={"/partnership"}> <h6>Listings, product or service introductions</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/partnership"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/forks-and-airdrops"}><TbArrowFork/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/forks-and-airdrops"}><h3>Forks & Airdrops</h3></Nav.Link>
        <Nav.Link as={Link} to={"/forks-and-airdrops"}><h6>Forks, Airdrops, Snapshots, Chain Splits</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/forks-and-airdrops"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        <div className='faq_box d-flex mb-5'>
        <div className='left-icons'>
        <Nav.Link as={Link} to={"/other-issues"}><CiCircleQuestion/></Nav.Link>
        </div>
        <div className='middle-text'>
        <Nav.Link as={Link} to={"/other-issues"}> <h3>Other Issues</h3></Nav.Link>
        <Nav.Link as={Link} to={"/other-issues"}> <h6>General Inquires, Terms of Service, other issues</h6></Nav.Link>
        </div>
        <div className='right-icons'>
        <Nav.Link as={Link} to={"/other-issues"}><MdArrowForwardIos/></Nav.Link>
        </div>
        </div>
        </div>
        <div className='col-lg-2'></div>
        </div>
      </div>
      </div>
    </section>
      
    </>
  )
}

export default FAQ
