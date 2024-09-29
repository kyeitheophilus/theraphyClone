import  { useState } from "react";

import "./App.css";

import { useEffect } from "react";
import HeaderCarousel from "./Component/HeaderCarousel";
import Service from "./Component/ServicesComponent/Service";

function App() {
  // State to hold form values and errors
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    gender: "",
    date: "",
    department: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validation on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate first name (required)
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    // Validate email (required and correct format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Validate phone (required and length)
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    // Validate gender (required)
    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }

    // Validate date (required)
    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    // Validate department (required)
    if (!formData.department) {
      newErrors.department = "Please select a department";
    }

    // Validate comments (optional but if entered must be > 10 characters)
    if (formData.comments && formData.comments.length < 10) {
      newErrors.comments = "Comments should be at least 10 characters";
    }

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
    } else {
      setErrors(newErrors);
    }
  };

  // Spinner functionality
  useEffect(() => {
    const spinnerElement = document.getElementById("spinner");
    const removeSpinner = () => {
      if (spinnerElement) {
        spinnerElement.classList.remove("show");
      }
    };
    setTimeout(removeSpinner, 1000);
  }, []); // This runs once when the component mounts

  return (
    <>
      {/* Spinner Start  */}
      <div>
        {
          <div
            id="spinner"
            className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          >
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
        {/* Spinner End */}
        {/* Topbar Start */}
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-light me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2" />
                  Find A Location
                </a>
                <a href="#" className="text-light me-4">
                  <i className="fas fa-phone-alt text-primary me-2" />
                  +01234567890
                </a>
                <a href="#" className="text-light me-0">
                  <i className="fas fa-envelope text-primary me-2" />
                  Example@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="#"
                  className="btn btn-light btn-square border rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="#"
                  className="btn btn-light btn-square border rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  href="#"
                  className="btn btn-light btn-square border rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="#"
                  className="btn btn-light btn-square border rounded-circle nav-fill me-0"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
            <a href="index.html" className="navbar-brand p-0">
              <h1 className="text-primary m-0">
                <i className="fas fa-star-of-life me-3" />
                Terapia
              </h1>
              {/* <img src="img/logo.png" alt="Logo"> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Services
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="appointment.html" className="dropdown-item">
                      Appointment
                    </a>
                    <a href="feature.html" className="dropdown-item">
                      Features
                    </a>
                    <a href="blog.html" className="dropdown-item">
                      Our Blog
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact Us
                </a>
              </div>
              <a
                href="#"
                className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
              >
                Book Appointment
              </a>
            </div>
          </nav>
          <HeaderCarousel />
        </div>
        {/* Navbar & Hero End */}
        {/* Services Start */}
        {/* <div className="container-fluid service py-5">
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
        </div> */}
        <Service />
        {/* Services End */}
        {/* About Start */}
        <div className="container-fluid about bg-light py-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="about-img pb-5 ps-5">
                  <img
                    src="img/about-1.jpg"
                    className="img-fluid rounded w-100"
                    style={{ objectFit: "cover" }}
                    alt="Image"
                  />
                  <div className="about-img-inner">
                    <img
                      src="img/about-2.jpg"
                      className="img-fluid rounded-circle w-100 h-100"
                      alt="Image"
                    />
                  </div>
                  <div className="about-experience">15 years experience</div>
                </div>
              </div>
              <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
                <div className="section-title text-start mb-5">
                  <h4 className="sub-title pe-3 mb-0">About Us</h4>
                  <h1 className="display-3 mb-4">
                    We are Ready to Help Improve Your Treatment.
                  </h1>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat deleniti amet at atque sequi quibusdam cumque itaque
                    repudiandae temporibus, eius nam mollitia voluptas maxime
                    veniam necessitatibus saepe in ab? Repellat!
                  </p>
                  <div className="mb-4">
                    <p className="text-secondary">
                      <i className="fa fa-check text-primary me-2" /> Refresing
                      to get such a personal touch.
                    </p>
                    <p className="text-secondary">
                      <i className="fa fa-check text-primary me-2" /> Duis aute
                      irure dolor in reprehenderit in voluptate.
                    </p>
                    <p className="text-secondary">
                      <i className="fa fa-check text-primary me-2" /> Velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill text-white py-3 px-5"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Feature Start */}
        <div className="container-fluid feature py-5">
          <div className="container py-5">
            <div
              className="section-title mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="sub-style">
                <h4 className="sub-title px-3 mb-0">Why Choose Us</h4>
              </div>
              <h1 className="display-3 mb-4">
                Why Choose Us? Get Your Life Style Back
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
                <div className="row-cols-1 feature-item p-4">
                  <div className="col-12">
                    <div className="feature-icon mb-4">
                      <div className="p-3 d-inline-flex bg-white rounded">
                        <i className="fas fa-diagnoses fa-4x text-primary" />
                      </div>
                    </div>
                    <div className="feature-content d-flex flex-column">
                      <h5 className="mb-4">Licensed Therapist</h5>
                      <p className="mb-0">
                        Dolor, sit amet consectetur adipisicing elit. Soluta
                        inventore cum accusamus,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="row-cols-1 feature-item p-4">
                  <div className="col-12">
                    <div className="feature-icon mb-4">
                      <div className="p-3 d-inline-flex bg-white rounded">
                        <i className="fas fa-briefcase-medical fa-4x text-primary" />
                      </div>
                    </div>
                    <div className="feature-content d-flex flex-column">
                      <h5 className="mb-4">Personalized Treatment</h5>
                      <p className="mb-0">
                        Dolor, sit amet consectetur adipisicing elit. Soluta
                        inventore cum accusamus,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="row-cols-1 feature-item p-4">
                  <div className="col-12">
                    <div className="feature-icon mb-4">
                      <div className="p-3 d-inline-flex bg-white rounded">
                        <i className="fas fa-hospital-user fa-4x text-primary" />
                      </div>
                    </div>
                    <div className="feature-content d-flex flex-column">
                      <h5 className="mb-4">Therapy Goals</h5>
                      <p className="mb-0">
                        Dolor, sit amet consectetur adipisicing elit. Soluta
                        inventore cum accusamus,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="row-cols-1 feature-item p-4">
                  <div className="col-12">
                    <div className="feature-icon mb-4">
                      <div className="p-3 d-inline-flex bg-white rounded">
                        <i className="fas fa-users fa-4x text-primary" />
                      </div>
                    </div>
                    <div className="feature-content d-flex flex-column">
                      <h5 className="mb-4">Practitioners Network</h5>
                      <p className="mb-0">
                        Dolor, sit amet consectetur adipisicing elit. Soluta
                        inventore cum accusamus,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="row-cols-1 feature-item p-4">
                  <div className="col-12">
                    <div className="feature-icon mb-4">
                      <div className="p-3 d-inline-flex bg-white rounded">
                        <i className="fas fa-spa fa-4x text-primary" />
                      </div>
                    </div>
                    <div className="feature-content d-flex flex-column">
                      <h5 className="mb-4">Comfortable Center</h5>
                      <p className="mb-0">
                        Dolor, sit amet consectetur adipisicing elit. Soluta
                        inventore cum accusamus,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="row-cols-1 feature-item p-4">
                  <div className="col-12">
                    <div className="feature-icon mb-4">
                      <div className="p-3 d-inline-flex bg-white rounded">
                        <i className="fas fa-heart fa-4x text-primary" />
                      </div>
                    </div>
                    <div className="feature-content d-flex flex-column">
                      <h5 className="mb-4">Experienced Stuff</h5>
                      <p className="mb-0">
                        Dolor, sit amet consectetur adipisicing elit. Soluta
                        inventore cum accusamus,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="row-cols-1 feature-item p-4">
                  <div className="col-12">
                    <div className="feature-icon mb-4">
                      <div className="p-3 d-inline-flex bg-white rounded">
                        <i className="fab fa-pied-piper fa-4x text-primary" />
                      </div>
                    </div>
                    <div className="feature-content d-flex flex-column">
                      <h5 className="mb-4">Therapy Goals</h5>
                      <p className="mb-0">
                        Dolor, sit amet consectetur adipisicing elit. Soluta
                        inventore cum accusamus,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="row-cols-1 feature-item p-4">
                  <div className="col-12">
                    <div className="feature-icon mb-4">
                      <div className="p-3 d-inline-flex bg-white rounded">
                        <i className="fas fa-user-md fa-4x text-primary" />
                      </div>
                    </div>
                    <div className="feature-content d-flex flex-column">
                      <h5 className="mb-4">Licensed Therapist</h5>
                      <p className="mb-0">
                        Dolor, sit amet consectetur adipisicing elit. Soluta
                        inventore cum accusamus,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 text-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <a
                  href="#"
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Book Appointment Start */}
        <div className="container-fluid appointment py-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2">
                <div className="section-title text-start">
                  <h4 className="sub-title pe-3 mb-0">
                    Solutions To Your Pain
                  </h4>
                  <h1 className="display-4 mb-4">
                    Best Quality Services With Minimal Pain Rate
                  </h1>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat deleniti amet at atque sequi quibusdam cumque itaque
                    repudiandae temporibus, eius nam mollitia voluptas maxime
                    veniam necessitatibus saepe in ab? Repellat!
                  </p>
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <div className="d-flex flex-column h-100">
                        <div className="mb-4">
                          <h5 className="mb-3">
                            <i className="fa fa-check text-primary me-2" /> Body
                            Relaxation
                          </h5>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Et deserunt qui cupiditate veritatis enim
                            ducimus.
                          </p>
                        </div>
                        <div className="mb-4">
                          <h5 className="mb-3">
                            <i className="fa fa-check text-primary me-2" /> Body
                            Relaxation
                          </h5>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Et deserunt qui cupiditate veritatis enim
                            ducimus.
                          </p>
                        </div>
                        <div className="text-start mb-4">
                          <a
                            href="#"
                            className="btn btn-primary rounded-pill text-white py-3 px-5"
                          >
                            More Details
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="video h-100">
                        <img
                          src="img/video-img.jpg"
                          className="img-fluid rounded w-100 h-100"
                          style={{ objectFit: "cover" }}
                          alt
                        />
                        <button
                          type="button"
                          className="btn btn-play"
                          data-bs-toggle="modal"
                          data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                          data-bs-target="#videoModal"
                        >
                          <span />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                <div className="appointment-form rounded p-5">
                  <p className="fs-4 text-uppercase text-primary">
                    Get In Touch
                  </p>
                  <h1 className="display-5 mb-4">Get Appointment</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 gx-4">
                      {/* First Name */}
                      <div className="col-xl-6">
                        <input
                          type="text"
                          className="form-control py-3 border-primary bg-transparent text-white"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                        {errors.firstName && (
                          <small className="text-danger">
                            {errors.firstName}
                          </small>
                        )}
                      </div>

                      {/* Email */}
                      <div className="col-xl-6">
                        <input
                          type="email"
                          className="form-control py-3 border-primary bg-transparent text-white"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="col-xl-6">
                        <input
                          type="text"
                          className="form-control py-3 border-primary bg-transparent"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <small className="text-danger">{errors.phone}</small>
                        )}
                      </div>

                      {/* Gender */}
                      <div className="col-xl-6">
                        <select
                          className="form-select py-3 border-primary bg-transparent"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                        >
                          <option value="">Your Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                        {errors.gender && (
                          <small className="text-danger">{errors.gender}</small>
                        )}
                      </div>

                      {/* Date */}
                      <div className="col-xl-6">
                        <input
                          type="date"
                          className="form-control py-3 border-primary bg-transparent"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                        />
                        {errors.date && (
                          <small className="text-danger">{errors.date}</small>
                        )}
                      </div>

                      {/* Department */}
                      <div className="col-xl-6">
                        <select
                          className="form-select py-3 border-primary bg-transparent"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                        >
                          <option value="">Department</option>
                          <option value="Physiotherapy">Physiotherapy</option>
                          <option value="Physical Health">
                            Physical Health
                          </option>
                          <option value="Treatments">Treatments</option>
                        </select>
                        {errors.department && (
                          <small className="text-danger">
                            {errors.department}
                          </small>
                        )}
                      </div>

                      {/* Comments */}
                      <div className="col-12">
                        <textarea
                          className="form-control border-primary bg-transparent text-white"
                          name="comments"
                          id="area-text"
                          cols={30}
                          rows={5}
                          placeholder="Write Comments"
                          value={formData.comments}
                          onChange={handleChange}
                        />
                        {errors.comments && (
                          <small className="text-danger">
                            {errors.comments}
                          </small>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary text-white w-100 py-3 px-5"
                        >
                          SUBMIT NOW
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Video */}
        <div
          className="modal fade"
          id="videoModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* 16:9 aspect ratio */}
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src
                    id="video"
                    allowFullScreen
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Book Appointment End */}
        {/* Team Start */}
        <div className="container-fluid team py-5">
          <div className="container py-5">
            <div
              className="section-title mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="sub-style">
                <h4 className="sub-title px-3 mb-0">Meet our team</h4>
              </div>
              <h1 className="display-3 mb-4">
                Physiotherapy Services from Professional Therapist
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
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item rounded">
                  <div className="team-img rounded-top h-100">
                    <img
                      src="img/team-1.jpg"
                      className="img-fluid rounded-top w-100"
                      alt
                    />
                    <div className="team-icon d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                    <h5>Full Name</h5>
                    <p className="mb-0">Message Physio Therapist</p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item rounded">
                  <div className="team-img rounded-top h-100">
                    <img
                      src="img/team-2.jpg"
                      className="img-fluid rounded-top w-100"
                      alt
                    />
                    <div className="team-icon d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                    <h5>Full Name</h5>
                    <p className="mb-0">Rehabilitation Therapist</p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item rounded">
                  <div className="team-img rounded-top h-100">
                    <img
                      src="img/team-3.jpg"
                      className="img-fluid rounded-top w-100"
                      alt
                    />
                    <div className="team-icon d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                    <h5>Full Name</h5>
                    <p className="mb-0">Doctor of Physical therapy</p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item rounded">
                  <div className="team-img rounded-top h-100">
                    <img
                      src="img/team-4.jpg"
                      className="img-fluid rounded-top w-100"
                      alt
                    />
                    <div className="team-icon d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-primary text-white rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                  <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                    <h5>Full Name</h5>
                    <p className="mb-0">Doctor of Physical therapy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Testimonial Start */}
        <div
          className="container-fluid testimonial py-5 wow zoomInDown"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="section-title mb-5">
              <div className="sub-style">
                <h4 className="sub-title text-white px-3 mb-0">Testimonial</h4>
              </div>
              <h1 className="display-3 mb-4">What Clients are Say</h1>
            </div>
            <div className="testimonial-carousel owl-carousel">
              <div className="testimonial-item">
                <div className="testimonial-inner p-5">
                  <div className="testimonial-inner-img mb-4">
                    <img
                      src="img/testimonial-img.jpg"
                      className="img-fluid rounded-circle"
                      alt
                    />
                  </div>
                  <p className="text-white fs-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores nemo facilis tempora esse explicabo sed!
                    Dignissimos quia ullam pariatur blanditiis sed voluptatum.
                    Totam aut quidem laudantium tempora. Minima, saepe earum!
                  </p>
                  <div className="text-center">
                    <h5 className="mb-2">John Abraham</h5>
                    <p className="mb-2 text-white-50">New York, USA</p>
                    <div className="d-flex justify-content-center">
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-inner p-5">
                  <div className="testimonial-inner-img mb-4">
                    <img
                      src="img/testimonial-img.jpg"
                      className="img-fluid rounded-circle"
                      alt
                    />
                  </div>
                  <p className="text-white fs-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores nemo facilis tempora esse explicabo sed!
                    Dignissimos quia ullam pariatur blanditiis sed voluptatum.
                    Totam aut quidem laudantium tempora. Minima, saepe earum!
                  </p>
                  <div className="text-center">
                    <h5 className="mb-2">John Abraham</h5>
                    <p className="mb-2 text-white-50">New York, USA</p>
                    <div className="d-flex justify-content-center">
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-inner p-5">
                  <div className="testimonial-inner-img mb-4">
                    <img
                      src="img/testimonial-img.jpg"
                      className="img-fluid rounded-circle"
                      alt
                    />
                  </div>
                  <p className="text-white fs-7">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Asperiores nemo facilis tempora esse explicabo sed!
                    Dignissimos quia ullam pariatur blanditiis sed voluptatum.
                    Totam aut quidem laudantium tempora. Minima, saepe earum!
                  </p>
                  <div className="text-center">
                    <h5 className="mb-2">John Abraham</h5>
                    <p className="mb-2 text-white-50">New York, USA</p>
                    <div className="d-flex justify-content-center">
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                      <i className="fas fa-star text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Blog Start */}
        <div className="container-fluid blog py-5">
          <div className="container py-5">
            <div
              className="section-title mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="sub-style">
                <h4 className="sub-title px-3 mb-0">Our Blog</h4>
              </div>
              <h1 className="display-3 mb-4">
                Excellent Facility and High Quality Therapy
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
                className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="blog-item rounded">
                  <div className="blog-img">
                    <img
                      src="img/blog-1.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="blog-centent p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-0 text-muted">
                        <i className="fa fa-calendar-alt text-primary" /> 01 Jan
                        2045
                      </p>
                      <a href="#" className="text-muted">
                        <span className="fa fa-comments text-primary" /> 3
                        Comments
                      </a>
                    </div>
                    <a href="#" className="h4">
                      Remove back Pain While Working on o physio
                    </a>
                    <p className="my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium hic consequatur beatae architecto,
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="blog-item rounded">
                  <div className="blog-img">
                    <img
                      src="img/blog-2.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="blog-centent p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-0 text-muted">
                        <i className="fa fa-calendar-alt text-primary" /> 01 Jan
                        2045
                      </p>
                      <a href="#" className="text-muted">
                        <span className="fa fa-comments text-primary" /> 3
                        Comments
                      </a>
                    </div>
                    <a href="#" className="h4">
                      Benefits of a weekly physiotherapy session
                    </a>
                    <p className="my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium hic consequatur beatae architecto,
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="blog-item rounded">
                  <div className="blog-img">
                    <img
                      src="img/blog-3.jpg"
                      className="img-fluid w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="blog-centent p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-0 text-muted">
                        <i className="fa fa-calendar-alt text-primary" /> 01 Jan
                        2045
                      </p>
                      <a href="#" className="text-muted">
                        <span className="fa fa-comments text-primary" /> 3
                        Comments
                      </a>
                    </div>
                    <a href="#" className="h4">
                      Regular excercise can slow ageing process
                    </a>
                    <p className="my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium hic consequatur beatae architecto,
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        {/* Footer Start */}
        <div
          className="container-fluid footer py-5 wow fadeIn"
          data-wow-delay="0.2s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="text-white mb-4">
                    <i className="fas fa-star-of-life me-3" />
                    Terapia
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus dolorem impedit eos autem dolores laudantium quia,
                    qui similique
                  </p>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-share fa-2x text-white me-2" />
                    <a
                      className="btn-square btn btn-primary text-white rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn-square btn btn-primary text-white rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn-square btn btn-primary text-white rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      className="btn-square btn btn-primary text-white rounded-circle mx-1"
                      href
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="mb-4 text-white">Quick Links</h4>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> About Us
                  </a>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> Contact Us
                  </a>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> Privacy Policy
                  </a>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> Terms &amp;
                    Conditions
                  </a>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> Our Blog &amp;
                    News
                  </a>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> Our Team
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="mb-4 text-white">Terapia Services</h4>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> All Services
                  </a>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> Physiotherapy
                  </a>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> Diagnostics
                  </a>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> Manual Therapy
                  </a>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> Massage Therapy
                  </a>
                  <a href>
                    <i className="fas fa-angle-right me-2" /> Rehabilitation
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="mb-4 text-white">Contact Info</h4>
                  <a href>
                    <i className="fa fa-map-marker-alt me-2" /> 123 Street, New
                    York, USA
                  </a>
                  <a href>
                    <i className="fas fa-envelope me-2" /> info@example.com
                  </a>
                  <a href>
                    <i className="fas fa-envelope me-2" /> info@example.com
                  </a>
                  <a href>
                    <i className="fas fa-phone me-2" /> +012 345 67890
                  </a>
                  <a href className="mb-3">
                    <i className="fas fa-print me-2" /> +012 345 67890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Copyright Start */}
        <div className="container-fluid copyright py-4">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 text-center text-md-start mb-md-0">
                <span className="text-white">
                  <a href="#">
                    <i className="fas fa-copyright text-light me-2" />
                    Your Site Name
                  </a>
                  , All right reserved.
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end text-white">
                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                Designed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>{" "}
                Distributed By{" "}
                <a className="border-bottom" href="https://themewagon.com">
                  ThemeWagon
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-primary btn-lg-square back-to-top">
          <i className="fa fa-arrow-up" />
        </a>
      </div>
    </>
  );
}

export default App;
