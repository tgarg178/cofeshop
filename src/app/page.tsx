'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';
import cofee4 from '@/assets/cofee4.jpg'
import cofee3 from '@/assets/cofee3.avif'





export default function Home() {
  return (
    <>   
 

        <div  className="carousel-wrapper position-relative">
      {/* <div  className="swiper-custom-nav">
        <button  className="swiper-button-prev-custom">
          <i  className="bi bi-arrow-left"></i>
        </button>
        <button  className="swiper-button-next-custom">
          <i  className="bi bi-arrow-right"></i>
        </button>
      </div> */}

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

                 <h4  className="text-white text-uppercase fw-bold mb-4 textleft">PREMIUM COFFEE MACHINES</h4>
                                    <h2  className="display-2 f72 text-white mb-4 textleft">Brew Excellence with Every Cup</h2>
                                    <p  className="mb-5 fs-5 textleft">Engineered for cafés, hotels, and homes — our coffee machines combine technology, taste, and timeless design to elevate your coffee experience.
                                    </p>
                                    <div  className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                        <a  className="btn  py-3 px-4 px-md-5 me-2 orangetext btnmain " href="#"><i  className="bi bi-play-circle-fill orangetext"></i>  Explore Machines</a>
                                        <a  className="btn backgoundoramge py-3 px-4 px-md-5 ms-2 text-white" href="#">Request a Quote</a>
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
                
                      <h4  className="text-white text-uppercase fw-bold mb-4 textleft">ENGINEERED TO PERFORM</h4>
                                    <h2  className="display-2 f72 text-white mb-4 textleft">     Built to Brew. Designed to Last.</h2>
                                    <p  className="mb-5 fs-5 textleft">Discover our range of reliable, high-performance coffee machines trusted by leading cafés, restaurants, and hotels across the globe.
                                    </p>
                                  
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

        
 <div  className="container-fluid about py-5 d-md-block d-none">
            <div  className="container py-5">
                <div  className="row g-5">
                    <div  className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div  className="h-100">
                            {/* <h4  className="text-primary">About Us</h4> */}
                            <h2  className="display-4 mb-4 fw700black">Highest quality coffee machines</h2>
                            <div  className="row g-4 mb-4">
                                <div  className="col-md-6">
                                    <div   className="d-flex text-decoration-none">
                                        <span  className="bi bi-cup orangetext bilight43 bi-3x me-3"></span>
                                        <h4  className="mb-0 abouth4 pt-2">Commercial Espresso Solutions</h4>
                                    </div>
                                </div>
                                <div  className="col-md-6">
                                    <div  className="d-flex text-decoration-none">
                                        <span  className="bi bi-gear  orangetext bilight43 me-3"></span>
                                        <h4  className="mb-0 abouth4 pt-2"> Fully Automatic & Customizable Machines</h4>
                                    </div>
                                </div>
                            </div> 
                            <p  className="mb-4 fs18">We specialize in designing and manufacturing cutting-edge coffee machines tailored for cafés, restaurants, and businesses. With precision engineering, easy-to-use interfaces, and durable materials, our machines ensure every cup of coffee meets the highest standards.
                            </p>
                            <div  className="text-dark mb-4">
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Built for high performance and long-lasting durability</p>
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span>  Advanced automation for faster, consistent brewing</p>
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Custom design options to match your brand aesthetics</p>
                            </div>
                            <a  className="btn btnmain2 py-3 px-4 px-md-5 ms-2 text-white" href="#">Contact us</a>
                        </div>
                    </div>
                    <div  className="col-lg-5 wow fadeInRight mxheightset340" data-wow-delay="0.2s">
                        <div  className="position-relative h-100">
                            {/* <img src="img/about-1.jpg"  className="img-fluid w-100 h-100 aboutimg1"alt=""/>
                             */}
                            {/* <Image src="img/cofee4.jpg"  className="img-fluid w-100 h-100 aboutimg1"alt=""/> */}
                                                      {/* <Image src={cofee4.src}  className="img-fluid w-100 h-100 aboutimg1" alt=""/> */}
                                                      <div className="position-relative w-100" style={{ height: '400px' }}>
  <Image
    src={cofee4.src}
    alt=""
    fill
    className="img-fluid w-100 h-100 aboutimg1"
    sizes="100vw"
    style={{ objectFit: 'cover' }}
  />
</div>

                            <div  className="bg-white">
                                <div  className="position-absolute pt-3 bg-white aboutmainleft">
                                    <div  className="backgoundoramge p-4">
                                        <h4  className="display-2 mb-0 fs700">25+</h4>
                                        <p  className="text-white fs-5 mb-0">years of experience</p>
                                    </div>
                                </div>
                                <div  className="position-absolute p-3 bg-white pb-0 pe-0 aboutmainright" >
                                    {/* <img src="img/about-2.jpg"  className="img-fluid" alt=""/> */}
                                    {/* <Image src={cofee3.src}  className="img-fluid" alt=""/> */}
                                    <div className="position-relative w-100" style={{ height: '400px' }}>
  <Image
    src={cofee3.src}
    alt=""
    fill
    className="img-fluid w-100 h-100 aboutimg1"
    sizes="100vw"
    style={{ objectFit: 'cover' }}
  />
</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <div className="container py-5 d-md-none d-block">
      <div className="row align-items-center">
        {/* LEFT: TEXT SECTION */}
        <div className="col-lg-7">
          <h2  className="display-4 mb-4 fw700black">Highest quality coffee machines</h2>

          <div className="d-flex gap-4 mb-3 flex-wrap">
            <div className="d-flex align-items-center gap-2">
            <span  className="bi bi-cup orangetext bilight43 bi-3x me-3"></span>
                                        <h4  className="mb-0 abouth4 pt-2">Commercial Espresso Solutions</h4>
            </div>
            <div className="d-flex align-items-center gap-2">
                <span  className="bi bi-gear  orangetext bilight43 me-3"></span>
                                        <h4  className="mb-0 abouth4 pt-2"> Fully Automatic & Customizable Machines</h4>
            </div>
          </div>

           <p  className="mb-4 fs18">We specialize in designing and manufacturing cutting-edge coffee machines tailored for cafés, restaurants, and businesses. With precision engineering, easy-to-use interfaces, and durable materials, our machines ensure every cup of coffee meets the highest standards.
                            </p>

           <div  className="text-dark mb-4">
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Built for high performance and long-lasting durability</p>
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span>  Advanced automation for faster, consistent brewing</p>
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Custom design options to match your brand aesthetics</p>
                            </div>
          <button className="btn btn-warning text-white px-4 py-2">Contact us</button>
        </div>

        {/* RIGHT: IMAGES SECTION */}
        <div className="col-lg-5 mt-5 mt-lg-0">
          {/* Top full image */}
          <div className="position-relative w-100 mb-3" style={{ height: "250px" }}>
            <Image
              src={cofee4.src}
              alt="Construction site"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          </div>

          {/* Bottom: orange box + second image */}
          <div className="d-flex flex-column flex-sm-row gap-3">
            {/* Orange Box */}
            <div className="backgoundoramge text-white p-4 d-flex flex-column justify-content-center align-items-start" style={{ minWidth: '160px' }}>
               <h4  className="display-2 mb-0 fs700 text-black">25+</h4>
                                        <p  className="text-white fs-5 mb-0">years of experience</p>
            </div>
            

            {/* Bottom image */}
            <div className="position-relative w-100" style={{ height: "200px" }}>
              <Image
                src={cofee3.src}
                alt="Engineer"
                fill
                sizes="(min-width: 1024px) 220px, 100vw"
                style={{ objectFit: "cover" }}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
 <div className="container-fluid banner py-5 wow zoomIn" data-wow-delay="0.2s">
            <div className="banner-design-1"></div>
            <div className="banner-design-2"></div>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        <div className="">
                            <h4 className="text-white">Contact With Me</h4>
                            <h2 className="display-4 text-white mb-0 fs700">Precision-Engineered Coffee Machines for Every Brew</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center justify-content-lg-end h-100">
                            <a className="btn btnconatct py-3 px-4 px-md-5 ms-2 text-white fw-5" href="#">Request a Demo</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>


     <div className="container-fluid faq-section bg-light py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <h4 className="orangetext">Some Important FAQs</h4>
                        <h2 className="display-4 mb-4 fs700"> Common Questions About Our Coffee Machines</h2>
                        <p className="mb-4 textmuted font20faq">Get quick answers to frequently asked questions about our products, service, and support.
                        </p>
                        <a className="btn btnconatct text-white py-3 px-5" href="#">Have Any Questions</a>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
                        <div className="h-100">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Q:  What types of coffee machines do you manufacture?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show active" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A:  We design and build a wide range of machines including automatic espresso machines, commercial brewers, bean-to-cup systems, and custom-designed coffee solutions.


                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Q: Can I customize the machine design or features?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A: Yes! We offer machine customization options for branding, brewing capacity, control interfaces, and finishes tailored to your business needs.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Q: Do your machines come with installation and training support?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A:  Absolutely. We provide complete installation, operational training, and ongoing technical support for all our machines.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Q:  What kind of maintenance or service do you provide?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A:  We offer scheduled maintenance plans, on-demand servicing, and remote troubleshooting support for optimal machine performance.


                                        </div>
                                    </div>
                                </div>

                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </>
  );
}
