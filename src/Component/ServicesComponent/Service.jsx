import './Service.css';
import service1 from "../../assets/img/service-1.jpg";
import service2 from "../../assets/img/service-2.jpg";
import service3 from "../../assets/img/service-3.jpg";
import service4 from "../../assets/img/service-4.jpg";
import service5 from "../../assets/img/service-5.jpg";
import service6 from "../../assets/img/service-6.jpg";
import service7 from "../../assets/img/service-7.jpg";
import service8 from "../../assets/img/service-8.jpg";



import WOW from "wowjs";
import { useEffect } from 'react';
const Service = () => {

  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <>
      {/* Services Start */}
      <div className="container-fluid service py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title mb-5 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="sub-style">
              <h4 className="sub-title px-3 mb-0">What We Do</h4>
            </div>
            <h1 className="display-3 mb-4">
              Our Service Given Physio Therapy By Expert.
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              deleniti amet at atque sequi quibusdam cumque itaque repudiandae
              temporibus, eius nam mollitia voluptas maxime veniam
              necessitatibus saepe in ab? Repellat!
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img
                    src={service1}
                    className="img-fluid rounded-top w-100"
                    alt
                  />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Message Therapy</h5>
                    <p className="mb-4">
                      Dolor, sit amet consectetur adipisicing elit. Soluta
                      inventore cum accusamus, dolor qui ullam
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img
                    src={service2}
                    className="img-fluid rounded-top w-100"
                    alt
                  />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Physiotherapy</h5>
                    <p className="mb-4">
                      Dolor, sit amet consectetur adipisicing elit. Soluta
                      inventore cum accusamus, dolor qui ullam
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img
                    src={service3}
                    className="img-fluid rounded-top w-100"
                    alt
                  />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Heat &amp; Cold Therapy</h5>
                    <p className="mb-4">
                      Dolor, sit amet consectetur adipisicing elit. Soluta
                      inventore cum accusamus, dolor qui ullam
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img
                    src={service4}
                    className="img-fluid rounded-top w-100"
                    alt
                  />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Chiropatic Therapy</h5>
                    <p className="mb-4">
                      Dolor, sit amet consectetur adipisicing elit. Soluta
                      inventore cum accusamus, dolor qui ullam
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img
                    src={service5}
                    className="img-fluid rounded-top w-100"
                    alt
                  />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Work Injuries</h5>
                    <p className="mb-4">
                      Dolor, sit amet consectetur adipisicing elit. Soluta
                      inventore cum accusamus, dolor qui ullam
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img
                    src={service6}
                    className="img-fluid rounded-top w-100"
                    alt
                  />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Spot Injuries</h5>
                    <p className="mb-4">
                      Dolor, sit amet consectetur adipisicing elit. Soluta
                      inventore cum accusamus, dolor qui ullam
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img
                    src={service7}
                    className="img-fluid rounded-top w-100"
                    alt
                  />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Regular Therapy</h5>
                    <p className="mb-4">
                      Dolor, sit amet consectetur adipisicing elit. Soluta
                      inventore cum accusamus, dolor qui ullam
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded">
                <div className="service-img rounded-top">
                  <img
                    src={service8}
                    className="img-fluid rounded-top w-100"
                    alt
                  />
                </div>
                <div className="service-content rounded-bottom bg-light p-4">
                  <div className="service-content-inner">
                    <h5 className="mb-4">Back Pain</h5>
                    <p className="mb-4">
                      Dolor, sit amet consectetur adipisicing elit. Soluta
                      inventore cum accusamus, dolor qui ullam
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 text-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <a
                className="btn btn-primary rounded-pill text-white py-3 px-5"
                href="#"
              >
                Services More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
    </>
  );
}

export default Service