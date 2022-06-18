import React from 'react'
import pic1 from '../img/1.jpg'
import pic2 from '../img/2.png'
import pic3 from '../img/3.jpg'
import pic4 from '../img/4.jpg'
import pic5 from '../img/5.png'
import pic6 from '../img/6.png'
export const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={pic1} className="card-img-top" width="50" height="200" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Web Designing</h5>
                    
                    <a href="#" className="btn btn-outline-primary">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={pic6} className="card-img-top" width="50" height="200"/>
                  <div className="card-body text-center">
                    <h5 className="card-title">Web Development</h5>
                    
                   <a href="#" className="btn btn-outline-primary">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={pic5} className="card-img-top" width="50" height="200" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Graphic Designing</h5>
                    
                   <a href="#" className="btn btn-outline-primary">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={pic3} className="card-img-top" width="50" height="200" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Mobile APP Development</h5>
                    
                   <a href="#" className="btn btn-outline-primary">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={pic2} className="card-img-top" width="50" height="200" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Digital Marketing</h5>
                    
                   <a href="#" className="btn btn-outline-primary">Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={pic4} className="card-img-top" width="50" height="200" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Business Incorporation</h5>
                    
                   <a href="#" className="btn btn-outline-primary">Read More</a>
                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

