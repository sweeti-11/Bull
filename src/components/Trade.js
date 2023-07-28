import React from 'react'
import { MdExtension } from 'react-icons/md';
import './Home/Home.css'

const Trade = () => {
  return (
    <div>
         <section id="servies-section" className='servies-section'>
                <div className='container'>
                    <div className='row gy-4'>
                        <h2 className='text-center' style={{
                            color: "#059473", paddingTop: "46px", fontSize: "45px",
                            fontWeight: "500", paddingBottom: "30px"
                        }}>How To Trade With Us</h2>
                        <div className='col-lg-4'>
                        <div className='servv'>
                            <div >
                                <MdExtension style={{ margin: "auto", width: "60px", height: "60px" }} />
                            </div>
                            <div>
                                <h6 className='text-center' style={{ fontSize: "1.7rem", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Eius provident</h6>
                            </div>
                            <div style={{ paddingTop: "15px", fontSize: "19px" }}>
                                <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                            </div>
                            <div>
                                <button style={{border: "1px solid", padding:"10px"}}>Start Trading</button>
                            </div> 
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='servv'>
                            <div>
                                <MdExtension style={{ margin: "auto", width: "60px", height: "60px" }} />
                            </div>
                            <div>
                                <h6 className='text-center' style={{ fontSize: "1.7rem", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Eius provident</h6>
                            </div>
                            <div style={{ paddingTop: "15px", fontSize: "19px" }}>
                                <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                            </div>
                            <div>
                                <button style={{border: "1px solid", padding:"10px"}}>Start Trading</button>
                            </div> 

                        </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='servv'>
                            <div>
                                <MdExtension style={{ margin: "auto", width: "60px", height: "60px" }} />
                            </div>
                            <div>
                                <h6 className='text-center' style={{ fontSize: "1.7rem", paddingTop: "15px", color: "#059473", fontWeight: "bold" }}>Eius provident</h6>
                            </div>
                            <div style={{ paddingTop: "15px", fontSize: "19px" }}>
                                <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                            </div>
                            <div>
                                <button style={{border: "1px solid", padding:"10px"}}>Start Trading</button>
                            </div> 
                        </div>
                    </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Trade