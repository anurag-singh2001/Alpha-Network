import React from 'react'
import { Link } from 'react-router-dom'
import pic8 from '../img/8.png'

export const Home = () => {
  return (
    <section id="header" className='d-flex align-items-center'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-center flex-column">
              <h1>
                Grow Your Business with
                <strong className="brand-name"> Alpha Network </strong>
              </h1>
              <h2 className="my-3">We are the team of talented software developer</h2>
              <div className="mt-3">
                <Link to='/services' className="btn btn-outline-primary btn-get-started">Get Started</Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img ">
              <img src={pic8} className="img-fluid animated" alt="" />

            </div>
            </div>
          </div>
          </div>
      </div>

    </section>
  )
}

