'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';

// import { Navigation } from 'swiper/modules';

export default function Home() {
  return (
    <>   
 

        <div  className="carousel-wrapper position-relative">
      <div  className="swiper-custom-nav">
        <button  className="swiper-button-prev-custom">
          <i  className="bi bi-arrow-left"></i>
        </button>
        <button  className="swiper-button-next-custom">
          <i  className="bi bi-arrow-right"></i>
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom'
        }}
        effect="fade"
        loop
         className="header-carousel"
      >
        <SwiperSlide>
          <div  className="header-carousel-item hero-section">
            <div  className="hero-bg-half-1"></div>
            <div  className="hero-shape-1"></div>
            <div  className="carousel-caption">
              <div  className="container">
                <div  className="col-lg-7 animate__animated animate__fadeInLeft ">

                 <h4  className="text-white text-uppercase fw-bold mb-4 textleft">Current Electricity Services</h4>
                                    <h1  className="display-2 f72 text-white mb-4 textleft">Power for Seamless Electricity Solutions</h1>
                                    <p  className="mb-5 fs-5 textleft">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy... 
                                    </p>
                                    <div  className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                        <a  className="btn  py-3 px-4 px-md-5 me-2 orangetext btnmain " href="#"><i  className="bi bi-play-circle-fill orangetext"></i> Watch Video</a>
                                        <a  className="btn backgoundoramge py-3 px-4 px-md-5 ms-2 text-white" href="#">Learn More</a>
                                         </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div  className="header-carousel-item hero-section">
            <div  className="hero-bg-half-2"></div>
            <div  className="hero-shape-2"></div>
            <div  className="carousel-caption">
              <div  className="container">
                <div  className="col-lg-7 animate__animated animate__fadeInLeft">
                
                      <h4  className="text-white text-uppercase fw-bold mb-4 textleft">Current Electricity Services</h4>
                                    <h1  className="display-2 f72 text-white mb-4 textleft">      Experience the power of professionalism</h1>
                                    <p  className="mb-5 fs-5 textleft">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy... 
                                    </p>
                                  
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>


 <div  className="container-fluid about py-5">
            <div  className="container py-5">
                <div  className="row g-5">
                    <div  className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div  className="h-100">
                            {/* <h4  className="text-primary">About Us</h4> */}
                            <h1  className="display-4 mb-4 fw700black">Providing you with the highest quality of features</h1>
                            <div  className="row g-4 mb-4">
                                <div  className="col-md-6">
                                    <a href="#"  className="d-flex text-decoration-none">
                                        <span  className="bi bi-lightning-fill orangetext bilight43 bi-3x me-3"></span>
                                        <h4  className="mb-0 abouth4 pt-2">Emergency Power Solution</h4>
                                    </a>
                                </div>
                                <div  className="col-md-6">
                                    <a href="#"  className="d-flex text-decoration-none">
                                        <span  className="bi bi-broadcast-pin  orangetext bilight43 me-3"></span>
                                        <h4  className="mb-0 abouth4 pt-2">Full-Service Electrical Layout</h4>
                                    </a>
                                </div>
                            </div>
                            <p  className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, minus. At velit nam, animi culpa fugiat neque facere illum, eum possimus omnis accusantium deleniti consectetur temporibus necessitatibus asperiores sunt dicta?
                            </p>
                            <div  className="text-dark mb-4">
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Installed, maintained and repaired lighting for clients.</p>
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Increasingly popular way to generate electricity.</p>
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Protect electrical devices from damage.</p>
                            </div>
                            <a  className="btn btnmain2 py-3 px-4 px-md-5 ms-2 text-white" href="#">Contact us</a>
                        </div>
                    </div>
                    <div  className="col-lg-5 wow fadeInRight" data-wow-delay="0.2s">
                        <div  className="position-relative h-100">
                            <img src="img/about-1.jpg"  className="img-fluid w-100 h-100 aboutimg1"alt=""/>
                            <div  className="bg-white">
                                <div  className="position-absolute pt-3 bg-white aboutmainleft">
                                    <div  className="backgoundoramge p-4">
                                        <h4  className="display-2 mb-0 fs700">25+</h4>
                                        <p  className="text-white fs-5 mb-0">years of experience</p>
                                    </div>
                                </div>
                                <div  className="position-absolute p-3 bg-white pb-0 pe-0 aboutmainright" >
                                    <img src="img/about-2.jpg"  className="img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
+

    </>
  );
}
