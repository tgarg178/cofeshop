import React from 'react'
import 'animate.css';
import Link from 'next/link';
import Image from 'next/image';


// import newone1 from '@/assets/newone1.png'

import cofee4 from '@/assets/cofee4.jpg'
import cofee3 from '@/assets/cofee3.avif'


const Aboutus = () => {
  return (
   <section >    
    <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" >
                <h4 className="text-white display-4 mb-4 wow  animate__animated animate__fadeInDown fs700" data-wow-delay="0.1s">ABOUT US</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow  animate__animated animate__fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item "><Link href="/" className='text-decoration-none text-white'>Home</Link></li>
                   
                    <li className="breadcrumb-item active text-white">About Us</li>
                </ol>    
            </div>
        </div>

   
 <div  className="container-fluid about py-5 d-md-block d-none">
            <div  className="container py-5">
                <div  className="row g-5">
                    <div  className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div  className="h-100">
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

        <div className="col-lg-5 mt-5 mt-lg-0">
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

          <div className="d-flex flex-column flex-sm-row gap-3">
            {/* Orange Box */}
            <div className="backgoundoramge text-white p-4 d-flex flex-column justify-content-center align-items-start" style={{ minWidth: '160px' }}>
               <h4  className="display-2 mb-0 fs700 text-black">25+</h4>
                                        <p  className="text-white fs-5 mb-0">years of experience</p>
            </div>
            

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
                            <h2 className=" text-white mb-0 fs700 h2size">Precision-Engineered Coffee Machines for Every Brew</h2>
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

        <div className='mt-4 mb-4 pt-4  max70'>


          <h2 className='text-brown'>
            Engineered for Excellence in Coffee Machine Manufacturing </h2>

  <p className='parafamily'> we are driven by a passion for perfecting the coffee experience through unparalleled engineering and craftsmanship. As a leading manufacturer of commercial-grade coffee machines, we combine cutting-edge technology with meticulous design to deliver solutions that meet the diverse needs of businesses and discerning individuals alike.</p>

  <h2 className='text-brown'>Our Commitment to Quality and Innovation</h2> 

  <p className='parafamily'>With a foundation built on precision and reliability, our state-of-the-art manufacturing facilities are equipped to produce coffee machines of exceptional quality. We specialize in advanced thermal process engineering, ensuring every machine delivers optimal performance, durability, and a consistently superior brew. From robust components to intuitive interfaces, each aspect of our machines is engineered for excellence, reflecting our deep understanding of the intricate science behind great coffee.</p>

   <h2 className='text-brown'>Trusted by Baristas, Designed for Business
</h2>
    <p  className='parafamily'>Whether it is for the bustling atmosphere of a café, the dynamic demands of an office, the comfort of a home, or the unique needs of a bakery or mobile van, our machines are designed to seamlessly integrate into any environment. We pride ourselves on creating equipment that is not only highly efficient and reliable but also easy to operate, empowering baristas and users to craft perfect coffee with confidence. Our commitment extends to delivering solutions that enhance productivity, elevate the coffee ritual, and stand the test of time.
</p>
 <h2 className='text-brown'>Our Vision</h2>
<p className='parafamily'>
We believe that exceptional coffee begins with exceptional machinery. Our vision is to continually innovate and set new benchmarks in coffee machine manufacturing, providing our partners and customers with the tools they need to achieve coffee perfection, every single day. We are more than just manufacturers; we are dedicated contributors to the global coffee culture, committed to delivering quality that is truly tasted in every cup.</p>
         
          <a  className="btn btnmain2 py-3 px-4 px-md-5 ms-2 text-white" href="#">Any Enuiry</a>
        </div>

    
   </section>
  )
}

export default Aboutus
