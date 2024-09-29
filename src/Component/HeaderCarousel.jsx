// import  { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import carousel1 from "../assets/img/carousel-1.jpg";
import carousel2 from "../assets/img/carousel-2.jpg";

const HeaderCarousel = () => {
  const options = {
    animateOut: "slideOutDown",
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  };

  return (
    <OwlCarousel className="header-carousel" {...options}>
      <div className="header-carousel-item">
        <img src={carousel1} className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5
              className="text-white text-uppercase fw-bold mb-4"
              style={{ letterSpacing: 3 }}
            >
              Physiotherapy Center
            </h5>
            <h1 className="display-1 text-capitalize text-white mb-4">
              Best Solution For Painful Life
            </h1>
            <p className="mb-5 fs-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              text ever since the 1500s.
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="#"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      <div className="header-carousel-item">
        <img src={carousel2} className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5
              className="text-white text-uppercase fw-bold mb-4"
              style={{ letterSpacing: 3 }}
            >
              Physiotherapy Center
            </h5>
            <h1 className="display-1 text-capitalize text-white mb-4">
              Best Solution For Painful Life
            </h1>
            <p className="mb-5 fs-5 animated slideInDown">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              text ever since the 1500s.
            </p>
            <a
              className="btn btn-primary rounded-pill text-white py-3 px-5"
              href="#"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default HeaderCarousel;