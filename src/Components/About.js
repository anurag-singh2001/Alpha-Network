import React from 'react'
import { Link } from 'react-router-dom'
import pic7 from '../img/7.png'
export const About = () => {
  return (
    <section id="header" className='d-flex align-items-center'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-center flex-column">
              <h1>
                Welcome To About Page
                <strong className="brand-name"> Alpha Network </strong>
              </h1>
              <h2 className="my-3">We are the team of talented software developer</h2>
              <div className="mt-3">
                <Link to='/contact' className="btn btn-outline-primary btn-get-started">Contact Us</Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img ">
              <img src={pic7} className="img-fluid animated" alt="" />

            </div>
            </div>
          </div>
          </div>
      </div>

    </section>
  )
}

