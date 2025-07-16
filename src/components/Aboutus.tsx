import React from 'react'
import 'animate.css';

const Aboutus = () => {
  return (
   <>

      <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" >
              {/* style={{max-width:"900px"}} */}
                <h4 className="text-white display-4 mb-4 wow  animate__animated animate__fadeInDown fs700" data-wow-delay="0.1s">About Us</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow  animate__animated animate__fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item "><a href="/" className='text-decoration-none'>Home</a></li>
                    <li className="breadcrumb-item"><a href="#"  className='text-decoration-none'>Pages</a></li>
                    <li className="breadcrumb-item active orangetext">About</li>
                </ol>    
            </div>
        </div>

       <div  className="container-fluid about py-5">
            <div  className="container py-5">
                <div  className="row g-5">
                    <div  className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div  className="h-100">
                            {/* <h4  className="text-primary">About Us</h4> */}
                            <h2  className="display-4 mb-4 fw700black">Highest quality coffee machines</h2>
                            <div  className="row g-4 mb-4">
                                <div  className="col-md-6">
                                    <a href="#"  className="d-flex text-decoration-none">
                                        <span  className="bi bi-cup orangetext bilight43 bi-3x me-3"></span>
                                        <h4  className="mb-0 abouth4 pt-2">Commercial Espresso Solutions</h4>
                                    </a>
                                </div>
                                <div  className="col-md-6">
                                    <a href="#"  className="d-flex text-decoration-none">
                                        <span  className="bi bi-gear  orangetext bilight43 me-3"></span>
                                        <h4  className="mb-0 abouth4 pt-2"> Fully Automatic & Customizable Machines</h4>
                                    </a>
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
                            <img src="img/cofee4.jpg"  className="img-fluid w-100 h-100 aboutimg1"alt=""/>

                            <div  className="bg-white">
                                <div  className="position-absolute pt-3 bg-white aboutmainleft">
                                    <div  className="backgoundoramge p-4">
                                        <h4  className="display-2 mb-0 fs700">25+</h4>
                                        <p  className="text-white fs-5 mb-0">years of experience</p>
                                    </div>
                                </div>
                                <div  className="position-absolute p-3 bg-white pb-0 pe-0 aboutmainright" >
                                    {/* <img src="img/about-2.jpg"  className="img-fluid" alt=""/> */}
                                    <img src="img/cofee3.avif"  className="img-fluid" alt=""/>

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

export default Aboutus
