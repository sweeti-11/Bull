import React from 'react'
import './Blog.css';
import btc from './assets/crypto-news.jpg';
import {FaRegCalendarAlt, FaRegUser, FaRegComments} from 'react-icons/fa';
import {AiFillTag} from 'react-icons/ai';
import AffiliateImg from './assets/home-banner-bg.png'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';



const SingleNewsPage = () => {
  return (
    <div>
      <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height: "400px"}}
        itemId={1}
        src={AffiliateImg}
        alt='...'
      >
        <h3 style={{marginBottom:"10px"}}>First slide label</h3>
        <p style={{marginBottom:"120px"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height: "400px"}}
        itemId={2}
        src={AffiliateImg}
        alt='...'
      >
        <h3 style={{marginBottom:"10px"}}>First slide label</h3>
        <p style={{marginBottom:"120px"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem> 
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height: "400px"}}
        itemId={3}
        src={AffiliateImg}
        alt='...'
      >
        <h3 style={{marginBottom:"10px"}}>First slide label</h3>
        <p style={{marginBottom:"120px"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem> 
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height: "400px"}}
        itemId={4}
        src={AffiliateImg}
        alt='...'
      >
        <h3 style={{marginBottom:"10px"}}>First slide label</h3>
        <p style={{marginBottom:"120px"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        style={{height: "400px"}}
        itemId={5}
        src={AffiliateImg}
        alt='...'
      >
        <h3 style={{marginBottom:"10px"}}>Second slide label</h3>
        <p style={{marginBottom:"120px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        style={{height: "400px"}}
        itemId={6}
        src={AffiliateImg}
        alt='...'
      >
        <h3 style={{marginBottom:"10px"}}>Third slide label</h3>
        <p style={{marginBottom:"120px"}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
    
      <section id='SingleBlogPage' className='SingleBlogPage'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8'>
                   <div>
                     <img src={btc} alt='blog-img' className='img-fluid'></img>
                   </div>  
                   <div id='news-content'className='news-content'>
                      <h1>Affiliate program</h1>
                        <div className='d-flex blog_icons' id='blog_icons'>
                            <FaRegCalendarAlt/>
                            <span> January 3, 2023</span>
                            <AiFillTag/>
                            <span>Crypto</span>
                            <FaRegUser/>
                            <span>Robert Downey</span>
                            <FaRegComments/>
                            <span>1</span>
                        </div> 
                        <p>Nemo enim ipsam voluptatem quia volup tas sit aspernatur aut odit aut fu sed quia conse quun tur magni dolor quia. In scelerisque turpis vel bibendum sodales. Nunc consectetur nec mi eu vehicula.<br/><br/>
                           Praesent et tincidunt magna, eget consectetur nunc. Ut vestibulum cursus eros eu pulvinar. Maecenas sagittis odio sit amet lorem pharetra, quis iaculis diam molestie. Sed eros felis, consectetur quis tellus quis, molestie fringilla nunc. Cras volutpat, dolor sodales tincidunt finibus, purus magna lacinia lorem, ullamcorper hendrerit urna tellus at lorem
                        </p>
                      
                        <p>Aenean imperdiet velit quis nulla commodo, ac ornare nibh posuere. Nunc sed sagittis justo, a ultrices magna. Aliquam at pellentesque eros. Aliquam vel suscipit arcu. Nullam malesuada sed ex sit amet consectetur. Suspendisse dui nisi, auctor a lacus finibus, efficitur vehicula lorem. Sed consequat, tortor eget varius semper, mi risus ultrices nulla, placerat ultrices metus nibh sed felis. Aenean pharetra lorem nec vehicula pellentesque. Vestibulum faucibus malesuada justo nec egestas. Maecenas porttitor nisl id massa hendrerit, sed suscipit diam fermentum. Duis pellentesque purus ac nulla rutrum, vitae interdum lorem rutrum. Cras eget arcu scelerisque, auctor mauris convallis, tincidunt justo. Maecenas dictum euismod vestibulum. Vestibulum sed elementum risus. In vitae velit nunc. Fusce ornare odio quis nulla molestie aliquam.</p>
                    </div>   
                    {/* <div id='comments'>
                        <h3>Leave a comment</h3>
                        <form>
                        <textarea placeholder='Your comment'>     
                        </textarea>
                        <div className='col-lg-3'>
                        <input type="text" name="name" placeholder='Your name'/>
                        <input type="text" name="name"  placeholder='Your email'/>
                        <input type="text" name="name" placeholder='Your website'/>
                        </div>
                        <button className='main-btn'>Add Comment</button>
                        </form>
                    </div>  */}
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
   <p style={{marginLeft:"12px"}}> January 3, 2023</p>
  </div>    
</div> 
</div>
</div>
          </div>
            </div>

        </div>

    </section>
      

    </div>
  )
}

export default SingleNewsPage