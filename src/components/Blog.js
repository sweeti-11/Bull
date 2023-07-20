import React from 'react'
import './Blog.css';
import btc from './assets/crypto-news.jpg';
import {FaRegCalendarAlt, FaRegUser, FaRegComments, FaArrowRight} from 'react-icons/fa';
import {SiBitcoinsv,SiEthereum,SiLitecoin,SiMonero,SiRipple,SiDogecoin,SiChainlink,SiBitcoincash,SiStellar} from 'react-icons/si';
import {TbCurrencyDollar} from 'react-icons/tb';
import {CgChevronDoubleRight} from 'react-icons/cg';
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';

const Blog = () => {
  return (
    <>
     <Helmet>
        <title>Bulleye | Blog </title>
      </Helmet>
    <section id='blog' className='blog'  style={{backgroundColor:"#cdd3e1"}}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <span>All Blog Posts</span>
                </div>
            </div>
        </div>
    </section>
    
    <section id='blog_img' className='blog_img' style={{backgroundColor:"#cdd3e1"}}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            <div className='d-flex'>

            <div>
              <img src={btc} alt='blog-img' className='img-fluid'></img>
            </div>  

            <div className='news-content'>
            <Nav.Link as={Link} to={"/single-blog"}><h1>What is Bitcoin Mining</h1></Nav.Link>
              <div className='d-flex blog_icons'>
               <FaRegCalendarAlt/>
               <span> January 3, 2023</span>
               <FaRegUser/>
               <span>Robert Downey</span>
               <FaRegComments/>
               <span>1</span>
              </div>  
              <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia. In scelerisque turpis vel bibendum</p>
              <button className='d-flex'>Continue Reading<FaArrowRight/>
              </button>
            </div> 
            </div>
            <div className='d-flex'>

<div>
  <img src={btc} alt='blog-img' className='img-fluid'></img>
</div>  

<div className='news-content'>
<Nav.Link as={Link} to={"/single-blog"}><h1>What is Bitcoin Mining</h1></Nav.Link>
  <div className='d-flex blog_icons'>
   <FaRegCalendarAlt/>
   <span> January 3, 2023</span>
   <FaRegUser/>
   <span>Robert Downey</span>
   <FaRegComments/>
   <span>1</span>
  </div>  
  <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia. In scelerisque turpis vel bibendum</p>
  <button className='d-flex'>Continue Reading<FaArrowRight/>
  </button>
</div> 
</div>
 <div className='d-flex'>

<div>
  <img src={btc} alt='blog-img' className='img-fluid'></img>
</div>  

<div className='news-content'>
<Nav.Link as={Link} to={"/single-blog"}><h1>What is Bitcoin Mining</h1></Nav.Link>
  <div className='d-flex blog_icons'>
   <FaRegCalendarAlt/>
   <span> January 3, 2023</span>
   <FaRegUser/>
   <span>Robert Downey</span>
   <FaRegComments/>
   <span>1</span>
  </div>  
  <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia. In scelerisque turpis vel bibendum</p>
  <button className='d-flex'>Continue Reading<FaArrowRight/>
  </button>
</div> 
</div>
 <div className='d-flex'>

<div>
  <img src={btc} alt='blog-img' className='img-fluid'></img>
</div>  

<div className='news-content'>
<Nav.Link as={Link} to={"/single-blog"}><h1>What is Bitcoin Mining</h1></Nav.Link>
  <div className='d-flex blog_icons'>
   <FaRegCalendarAlt/>
   <span> January 3, 2023</span>
   <FaRegUser/>
   <span>Robert Downey</span>
   <FaRegComments/>
   <span>1</span>
  </div>  
  <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia. In scelerisque turpis vel bibendum</p>
  <button className='d-flex'>Continue Reading<FaArrowRight/>
  </button>
</div> 
</div>
 <div className='d-flex'>

<div>
  <img src={btc} alt='blog-img' className='img-fluid'></img>
</div>  

<div className='news-content'>
<Nav.Link as={Link} to={"/single-blog"}><h1>What is Bitcoin Mining</h1></Nav.Link>
  <div className='d-flex blog_icons'>
   <FaRegCalendarAlt/>
   <span> January 3, 2023</span>
   <FaRegUser/>
   <span>Robert Downey</span>
   <FaRegComments/>
   <span>1</span>
  </div>  
  <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia. In scelerisque turpis vel bibendum</p>
  <button className='d-flex'>Continue Reading<FaArrowRight/>
  </button>
</div> 
</div>
            {/* <div className='d-flex'>
            <div>
              <img src={btc} alt='blog-img' className='img-fluid'></img>
            </div>   
            <div>
              <h1>What is Bitcoin Mining</h1>
              <div className='d-flex blog_icons'>
              <FaRegCalendarAlt/>
              <span> January 3, 2023</span>
              <FaRegUser/>
              <span>Robert Downey</span>
              <FaRegComments/>
              
              <span>1</span>
              </div>  
              <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia. In scelerisque turpis vel bibendum […]</p>
              <button className=' d-flex'>Continue Reading<FaArrowRight/>
              </button>
            </div> 
            <div>
            </div>         
           </div> */}
           <div className='paggination'>
<nav aria-label="Page navigation example">
  <ul class="pagination pg-blue">
    <li class="page-item">
      <a class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link">1</a></li>
    <li class="page-item"><a class="page-link">2</a></li>
    <li class="page-item"><a class="page-link">3</a></li>
    <li class="page-item">
      <a class="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
</div>
           </div>
           
          <div className='col-lg-3 blog-search'>
          <div class="input-group rounded" style={{marginTop:"30px"}}>
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
<div className='blog-category'> 
<h2 style={{color:"#059573", marginTop:"30px", fontSize:"30px", fontWeight:"400"}}>Categories</h2>
 <ul style={{padding:"0px"}}>
  <li>General <span className='px-2'>(25)</span></li>
  <li>LifeStyle <span className='px-2'>(2)</span></li>
  <li>Travel <span className='px-2'>(5)</span></li>
  <li>Design <span className='px-2'>(0)</span></li>
  <li>Creative <span className='px-2'>(20)</span></li>
  <li>Education <span className='px-2'>(12)</span></li>
 </ul> 
</div>
<div>
<h2 style={{color:"#059573", marginTop:"30px", fontSize:"30px", fontWeight:"400"}}>Recent Posts</h2>
 <div className='d-flex blog-sideimg'>
 
<div>
  <img src={btc} alt='img-blog' className='img-fluid'></img>
</div>  

<div className='blog-content'>
<Nav.Link as={Link} to={"/single-blog"}><h6>What is Bitcoin Mining and why use bitcoin</h6></Nav.Link>
  <div className='blog_icons'>
   <p> January 3, 2023</p>
  </div>    
</div> 
</div>
<div className='d-flex blog-sideimg'>
 
 <div>
   <img src={btc} alt='img-blog' className='img-fluid'></img>
 </div>  
 
 <div className='blog-content'>
 <Nav.Link as={Link} to={"/single-blog"}><h6>What is Bitcoin Mining and why use bitcoin</h6></Nav.Link>
   <div className='blog_icons'>
    <p> January 3, 2023</p>
   </div>    
 </div> 
 </div>
 <div className='d-flex blog-sideimg'>
 
<div>
  <img src={btc} alt='img-blog' className='img-fluid'></img>
</div>  

<div className='blog-content'>
<Nav.Link as={Link} to={"/single-blog"}><h6>What is Bitcoin Mining and why use bitcoin</h6></Nav.Link>
  <div className='blog_icons'>
   <p> January 3, 2023</p>
  </div>    
</div> 
</div>
<div className='d-flex blog-sideimg'>
 
 <div>
   <img src={btc} alt='img-blog' className='img-fluid'></img>
 </div>  
 
 <div className='blog-content'>
 <Nav.Link as={Link} to={"/single-blog"}><h6>What is Bitcoin Mining and why use bitcoin</h6></Nav.Link>
   <div className='blog_icons'>
    <p> January 3, 2023</p>
   </div>    
 </div> 
 </div>
 <div className='d-flex blog-sideimg'>
 
<div>
  <img src={btc} alt='img-blog' className='img-fluid'></img>
</div>  

<div className='blog-content'>
<Nav.Link as={Link} to={"/single-blog"}><h6>What is Bitcoin Mining and why use bitcoin</h6></Nav.Link>
  <div className='blog_icons'>
   <p> January 3, 2023</p>
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

export default Blog