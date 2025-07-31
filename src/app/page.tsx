"use client";
// import { toast } from "react-hot-toast";

// import { ErrorMessage, Field, Form, Formik } from "formik";
// import emailjs from "emailjs-com";

import { Button } from "react-bootstrap";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";
import Image from "next/image";
// import banner from "../assets/machine1baneer.webp"; 
import logo from "../assets/logomain.png";
import logo2 from "../assets/logonew.png";

import bannr1 from "../assets/b9new.jpg";
import bannr4 from "../assets/b3new.jpg";

import bannr3 from "../assets/b7new.jpg";




import cofemanu2 from "../assets/cofemanu2.webp";

import { Autoplay } from "swiper/modules";
import counseling from "../assets/counseling.png";
import warranty from "../assets/warranty.png";
import support from "../assets/support.png";
import technology from "../assets/technology.png";
import sustainability from "../assets/sustainability.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";
import f8 from "../assets/f8.png";
import f9 from "../assets/f9.png";
import f10 from "../assets/f10.png";
import f11 from "../assets/f11.png";
import f12 from "../assets/f12.png";

import test1 from "@/assets/test1.webp";
import test2 from "@/assets/test2.webp";
import test3 from "@/assets/test3.webp";
import test4 from "@/assets/test4.webp";
import test5 from "@/assets/test5.webp";
import test6 from "@/assets/test6.webp";

// Swiper and Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    import("bootstrap/js/dist/collapse").then(({ default: Collapse }) => {
      const collapseEl = document.getElementById("navbarNavDropdown");
      if (collapseEl?.classList.contains("show")) {
        const bsCollapse =
          Collapse.getInstance(collapseEl) || new Collapse(collapseEl);
        bsCollapse.hide();
      }
    });
  }, [pathname]);
  // const banners = [
  //   banner,
  // banner,
  // banner,
  //  banner,
  // banner,
  // ];

  const features = [
    {
      icon: sustainability,
      title: "Sustainability",
      desc: "We prioritize a greener future through eco-friendly practices",
    },
    {
      icon: technology,
      title: "Technology",
      desc: "Embrace innovation with cutting-edge technology for roasting experience",
    },
    {
      icon: support,
      title: "24/7 Technical Support",
      desc: "Enjoy round-the-clock support to address queries and troubleshoot",
    },
    {
      icon: warranty,
      title: "International Warranty",
      desc: "Trust in our products with a comprehensive international warranty",
    },
    {
      icon: counseling,
      title: "Counseling Services",
      desc: "We offer valuable insights and support for your coffee roasting journey",
    },
  ];

  const features2 = [
    {
      title: "Turnkey Plant Solutions",
      icon: f1,
      desc: "We deliver fully integrated, custom-engineered coffee processing systems from green bean to final product.",
    },
    {
      title: "Advanced Automation",
      icon: f2,
      desc: "Automated control systems ensure consistency, precision, and ease of operation across all stages.",
    },
    {
      title: "Energy-Efficient Design",
      icon: f3,
      desc: "Our systems are built for maximum energy savings without compromising on performance.",
    },
    {
      title: "Extraction Expertise",
      icon: f4,
      desc: "Specialized extraction technologies preserve coffee aroma and flavor during processing.",
    },
    {
      title: "Evaporation Efficiency",
      icon: f5,
      desc: "High-performance evaporators concentrate coffee with minimal aroma loss and energy use.",
    },
    {
      title: "Drying Technologies",
      icon: f6,
      desc: "We offer both spray-drying and freeze-drying solutions to suit your product goals.",
    },
    {
      title: "Global Installation & Support",
      icon: f7,
      desc: "We provide worldwide commissioning, technical support, and 24/7 maintenance services.",
    },
    {
      title: "Compliance & Hygiene Standards",
      icon: f8,
      desc: "Our systems adhere to global food safety and hygiene standards throughout the plant.",
    },
    {
      title: "Custom Engineering",
      icon: f9,
      desc: "We design and fabricate equipment tailored to your process requirements and space constraints.",
    },
    {
      title: "Sustainable Operations",
      icon: f10,
      desc: "Our technology supports sustainable coffee processing with low emissions and waste.",
    },
    {
      title: "Scalable Architecture",
      icon: f11,
      desc: "We help clients scale production with modular, future-ready system designs.",
    },
    {
      title: "Long-Term Partnerships",
      icon: f12,
      desc: "Beyond equipment, we build lasting relationships based on trust, performance, and shared growth.",
    },
  ];

  const testimonials = [
    {
      name: "Estella Castillo",
      role: "Dunes & Beans Cafe",
      text: "Ideal's turnkey coffee processing systems have completely transformed our production line. From green bean handling to final drying, every step is now streamlined, efficient, and quality-controlled.",
      image: test1,
    },
    {
      name: "Ricardo Alvarez",
      role: "Madrid Mornings Cafe",
      text: "Working with Ideal gave us more than just machines — they delivered a complete solution. Their extraction and drying technology preserved the rich aroma of our beans better than anything we’ve used before.",
      image: test2,
    },
    {
      name: "Harshita Jain",
      role: "Roasted Bliss",
      text: "What sets Ideal apart is their deep expertise and dedication. Their automated systems brought precision, efficiency, and consistent quality to our operations, all while reducing manual intervention.",
      image: test3,
    },
    {
      name: "Sonia Fernandes",
      role: "Cafe Mocha Vibe",
      text: "From equipment design to on-site commissioning, Ideal handled everything with professionalism. The support team is responsive and proactive — we truly feel like we’re in a long-term partnership.",
      image: test4,
    },
    {
      name: "Vikram Jha",
      role: "Bean Brew Express",
      text: "Thanks to Ideal’s energy-efficient technologies, we’ve reduced operating costs without compromising quality. Their commitment to sustainability and food safety matches our own values.",
      image: test6,
    },
    {
      name: "Ritika Menon",
      role: "The Roast Room",
      text: "Ideal doesn’t just supply equipment — they deliver results. Their systems helped us scale our production while maintaining premium taste, aroma, and compliance with international standards.",
      image: test5,
    },
  ];

  return (
    <>
      <section className="position-relative  height700  ">
        {/* max90banner */}
        {/* mt-md-4 */}
        {/* Navbar */}
        <Navbar expand="lg" variant="dark" className={` navbarmain x`}>
          <Container fluid>
            <Navbar.Brand href="#">
              <Image
                src={logo2}
                alt="Golden Coffee Roasters Logo"
                width={200}
                height={70}
                priority
                className="d-md-block d-none"
              />
              <Image
                src={logo}
                alt="Golden Coffee Roasters Logo"
                width={250}
                height={70}
                priority
                className="d-md-none d-block"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="coffee-navbar"
              className="custom-toggler"
            />
            <Navbar.Collapse id="coffee-navbar">
              <Nav className="ms-auto gap-4 ">
                <Nav.Link href="#">Home </Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Process</Nav.Link>

                <Nav.Link href="#">Products</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>

                <Button
                  variant="outline-light"
                  className="rounded-pill px-4  fw-semibold btnmain"
                  style={{
                    borderColor: "#707070",

                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                  }}
                  href="#contact"
                >
                  Get in Touch
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      

       
<Swiper
  modules={[Navigation, Pagination, EffectCreative, Autoplay]} // Include Autoplay
  navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
  pagination={{ el: ".custom-pagination", type: "fraction" }}
  effect="creative"
  creativeEffect={{
    prev: { shadow: true, translate: [0, 0, -400] },
    next: { translate: ["100%", 0, 0] },
  }}
  autoplay={{
    delay: 2000,      // Change slide every 4 seconds
    disableOnInteraction: false, // Keep autoplay after user interacts
  }}
  loop
  className="mySwiper d-md-block d-none height700"
>
          {[bannr1, bannr3, bannr4].map((image, index) => (
            <SwiperSlide className="swiperslid" key={index}>
              <div className="position-relative w-100 responsive-banner">
                <Image
                  src={image}
                  alt={`banner-${index + 1}`}
                  fill
                  className="object-cover w-100 h-100"
                  priority={index === 0}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  // style={{
                  //   background:
                  //     "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7))",
                  // }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
   
       

        {/* <div
          className="position-absolute bottom-0 end-0 d-flex align-items-center gap-3 p-3 z-3 d-md-block d-none"
          style={{ color: "white" }}
        >
          <div className="custom-pagination" style={{ fontSize: "20px" }}></div>
          <div className="d-flex gap-2">
            <button className="custom-prev btn btn-outline-light rounded-circle border border-white">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="custom-next btn btn-outline-light rounded-circle border border-white">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div> */}

        
<div className="d-md-none d-block">
 {/* <Swiper
          modules={[Navigation, Pagination, EffectCreative]}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{ el: ".custom-pagination", type: "fraction" }}
          effect="creative"
          creativeEffect={{
            prev: { shadow: true, translate: [0, 0, -400] },
            next: { translate: ["100%", 0, 0] },
          }}
          loop
          className="mySwiper rounded d-md-none d-block  heightback"
        > */}

          
<Swiper
  modules={[Navigation, Pagination, EffectCreative, Autoplay]} // Include Autoplay
  navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
  pagination={{ el: ".custom-pagination", type: "fraction" }}
  effect="creative"
  creativeEffect={{
    prev: { shadow: true, translate: [0, 0, -400] },
    next: { translate: ["100%", 0, 0] },
  }}
  autoplay={{
    delay: 2000,      // Change slide every 4 seconds
    disableOnInteraction: false, // Keep autoplay after user interacts
  }}
  loop
className="mySwiper rounded d-md-none d-block  heightback"
>
          {[bannr1, bannr3, bannr4].map((image, index) => (
            <SwiperSlide className="swiperslid" key={index}>
              <div className="position-relative w-100 responsive-banner height700">
                <Image
                  src={image}
                  alt={`banner-${index + 1}`}
                  fill
                  className="object-cover w-100 h-100"
                  priority={index === 0}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 heightback"
                  // style={{
                  //   background:
                  //     "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7))",
                  // }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

          {/* <div
          className="position-absolute bottom-0 end-0 d-flex align-items-center gap-3 p-3 z-3"
          style={{ color: "white" }}
        >
          <div className="custom-pagination" style={{ fontSize: "20px" }}></div>
          <div className="d-flex gap-2">
            <button className="custom-prev btn btn-outline-light rounded-circle border border-white">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="custom-next btn btn-outline-light rounded-circle border border-white">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div> */}

        </div>
      </section>

      <section className="py-4 px-3 max90banner mt-5 mt-md-0">
        <h5 className="text-dark fw-semibold mb-3">
          <span className="me-2" style={{ color: "#c49b00" }}>
            ●
          </span>
          Innovating Coffee Roasting with Quality Industries Excellence
        </h5>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1} // Mobile default
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card py-3">
                <div className="d-flex align-items-start gap-3">
                  <Image
                    src={item.icon.src}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <div>
                    <h6 className="fw-bold mb-1 goldenh6">{item.title}</h6>
                    <p className="mb-0 text-muted small">{item.desc}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="container my-5 aboutSection ">
        <div className="row align-items-center">
          <div className="col-md-6 ortalama-ayari-768">
            <Image
              alt="Golden Coffee Roasters"
              className="mask-image lazy entered lazy-loaded"
              width="500"
              height="500"
              data-ll-status="loaded"
              src={cofemanu2}
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <h2 className="fw-bold">
              <span className="goldText">Quality Industries </span> – Pioneering
              Turnkey Coffee Process Engineering
              {/* Integrates Cutting-Edge Tech and{' '} */}
              {/* <span className='goldText'>Craftsmanship</span> with Mastery */}
            </h2>
            <p className="mt-3">
              Welcome to Quality Industries, where innovation meets precision in
              coffee processing. As a trusted provider of turnkey plant
              solutions for the coffee industry, we specialize in delivering
              technologically advanced, energy-efficient, and hygienic
              processing systems that span the entire production cycle — from
              green bean handling to instant and soluble coffee manufacturing.
            </p>
            <p>
              Our comprehensive expertise ensures that every step — from
              aroma-optimizing extraction, efficient evaporation, to
              spray-drying and freeze-drying — is engineered for maximum
              quality, consistency, and productivity.
            </p>
            <p>
              Whether you are a small-batch specialty producer or a large-scale
              industrial manufacturer, we offer customized solutions, global
              support, and a deep commitment to your long-term success. At
              Quality Industries, we don’t just build coffee plants — we build
              performance, trust, and a sustainable future for coffee.
            </p>

            <button className="btn btn-dark px-4 py-2 rounded-pill mt-3 golden-hover">
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>





<div
        className=" banner py-5 wow zoomIn  mb-5 "
        data-wow-delay="0.2s"
      >
     
        <div className="container py-5">
          <div className="row g-5 py-md-5">
            <div className="col-lg-8">
              <div className="">
                <h4 className="text-white">Contact With Me</h4>
                <h2 className=" text-white mb-0 fs700 h2size">
                  Precision-Engineered Coffee Equipments Backed by Industrial
                  Process Expertise
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center justify-content-lg-end h-100">
         
   <Button
                  variant="outline-light"
                  className="rounded-pill px-4  fw-semibold btnmain2 py-md-3 py-0"
                  style={{
                    borderColor: "#707070",

                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                  }}
                  href="#"
                >
                  Request a Custom Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 container aboutSection">
        <div className=" text-center">
          <h2 className="mb-2">Product Features</h2>
          <p className="text-muted mb-4">
            Standard and Optional Features of Golden Products
          </p>

          <div className="row g-4">
            {features2.map((feature, idx) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={idx}>
                <div className="flipCard rounded-5">
                  <div className="flipCardInner rounded-1">
                    <div className="flipCardFront p-4 rounded-5">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={100}
                        height={100}
                        className="mb-3"
                      />
                      <p className="fw-semibold">{feature.title}</p>
                    </div>
                    <div className="flipCardBack p-3 rounded-5">
                      <p className="text-white m-0">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      
      <section className="container my-5">
        <h2 className="text-center mb-4 pb-4 h2size  ">Testimonials</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="card border-1 shadow-sm p-4 testimonialCard">
                <div className="d-flex align-items-center mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <h6 className="mb-0">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
                <p className="mb-0">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

    </>
  );
}
