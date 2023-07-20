import React from 'react'
import './testimonial.css'


const Testimonial = () => {
  return (
    <div>
<div id="carouselExampleControls" className="carousel slide text-center carousel-dark " data-mdb-ride="carousel">
<div className="carousel-indicators mb-0">
                <button data-mdb-target="#carouselExampleControls" data-mdb-slide-to="0" className="active"
                  aria-current="true" aria-label="Slide 1" ></button>
                <button data-mdb-target="#carouselExampleControls" data-mdb-slide-to="1"
                  aria-label="Slide 1"></button>
                <button data-mdb-target="#carouselExampleControls" data-mdb-slide-to="2"
                  aria-label="Slide 1"></button>
              </div>
  <div className="carousel-inner">
    <div className="carousel-item active" style={{backgroundColor: "transparent"}}>
      {/* <img className="rounded-circle shadow-1-strong mb-4"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
        style="width: 150px;" /> */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
          <h5 className="mb-3 text-dark">Maria Kate</h5>
          <p  className='text-dark'>Photographer</p>
          <p className="text-muted">
            {/* <i className="fas fa-quote-left pe-2"></i> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      {/* <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul> */}
    </div>
    <div className="carousel-item" style={{backgroundColor: "transparent"}}>
      {/* <img className="rounded-circle shadow-1-strong mb-4"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
        style="width: 150px;" /> */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
          <h5 className="mb-3 text-dark">John Doe</h5>
          <p  className='text-dark'>Web Developer</p>
          <p className="text-muted">
            {/* <i className="fas fa-quote-left pe-2"></i> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      {/* <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul> */}
    </div>
    <div className="carousel-item" style={{backgroundColor: "transparent"}}>
      {/* <img className="rounded-circle shadow-1-strong mb-4"
        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style="width: 150px;" /> */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6">
          <h5 className="mb-3 text-dark">Anna Deynah</h5>
          <p className='text-dark'>UX Designer</p>
          <p className="text-muted">
            {/* <i className="fas fa-quote-left pe-2"></i> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      {/* <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
    data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
    data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Testimonial




