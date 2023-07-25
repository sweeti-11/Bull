import React from 'react'
import './news.css'
import { motion, AnimatePresence } from 'framer-motion'
import AffiliateImg from './assets/home-banner-bg.png'
import news from './assets/news.jpg'
import AboutMainSection from './assets/about-us.png'
import { FaRegUser, FaRegFolder,FaArrowRight } from 'react-icons/fa';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';



const News = () => {
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
    
        <section id="news" className="news mt-5" >
      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 posts-list">

          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">

              <div className="post-img position-relative overflow-hidden">
                <img src={news} className="img-fluid" alt=""/>
                <span className="post-date">December 12</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <FaRegUser/><span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <FaRegFolder/><span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr/>

                <a href="/single-news" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i><FaArrowRight/></a>

              </div>

            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">

              <div className="post-img position-relative overflow-hidden">
                <img src={news} className="img-fluid" alt=""/>
                <span className="post-date">December 12</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <FaRegUser/><span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <FaRegFolder/><span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr/>

                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i><FaArrowRight/></a>

              </div>

            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">

              <div className="post-img position-relative overflow-hidden">
                <img src={news} className="img-fluid" alt=""/>
                <span className="post-date">December 12</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <FaRegUser/><span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <FaRegFolder/><span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr/>

                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i><FaArrowRight/></a>

              </div>

            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">

              <div className="post-img position-relative overflow-hidden">
                <img src={news} className="img-fluid" alt=""/>
                <span className="post-date">December 12</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <FaRegUser/><span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <FaRegFolder/><span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr/>

                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i><FaArrowRight/></a>

              </div>

            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">

              <div className="post-img position-relative overflow-hidden">
                <img src={news} className="img-fluid" alt=""/>
                <span className="post-date">December 12</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <FaRegUser/><span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <FaRegFolder/><span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr/>

                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i><FaArrowRight/></a>

              </div>

            </div>
          </div>

          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">

              <div className="post-img position-relative overflow-hidden">
                <img src={news} className="img-fluid" alt=""/>
                <span className="post-date">December 12</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <FaRegUser/><span className="ps-2">John Doe</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <FaRegFolder/><span className="ps-2">Politics</span>
                  </div>
                </div>

                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                </p>

                <hr/>

                <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i><FaArrowRight/></a>

              </div>

            </div>
          </div>

        </div>

        <div className="news-pagination mb-5">
          <ul className="justify-content-center">
          <li class="page-item">
      <a class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
            <li className="active"><a href="#">1</a></li>
            <li ><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li class="page-item">
      <a class="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
          </ul>
        </div>

      </div>
    </section>
    </div>
  )
}

export default News