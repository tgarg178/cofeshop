'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';


// import cof1 from '@/assets/cof1.png'
// import cof2 from '@/assets/cof2.png'
// import cof3 from '@/assets/cof3.png'
// import cof4 from '@/assets/cof4.png'


import test1 from '@/assets/test1.webp';
import test2 from '@/assets/test2.webp';
import test3 from '@/assets/test3.webp';
import test4 from '@/assets/test4.webp';
import test5 from '@/assets/test5.webp';
import test6 from '@/assets/test6.webp';

import cofemanu1 from'@/assets/cofemanu2.jpg';
// import banner1 from '@/assets/coffebanner.jpg'
// import banner2 from '@/assets/cofeebanner2.jpg'
import cofee4 from '@/assets/cofee4.jpg'
import cofee3 from '@/assets/cofee3.avif'

import bannermain from '@/assets/imagenew.png'
// import cofedesign from '@/assets/cofeedesign.png'

import Link from 'next/link'
// const categories = [
//   {
//     title: 'Coffee Machine For Cafe',
//     image: cof1,  
//     link: '/product',
//   },
//   {
//     title: 'Coffee Machine For Office',
//     image: cof2,
//     link: '/product',
//   },
//   {
//     title: 'Coffee Machine For Home',
//     image: cof3,
//     link: '/product',
//   },
//   {
//     title: 'Coffee Machine for Bakery and Van',
//     image: cof4,
//     link: '/product',
//   },
// ]
const testimonials = [
 {
  name: 'Estella Castillo',
  role: 'Dunes & Beans Cafe',
  text: 'Ideal’s coffee machine has transformed how we serve coffee. It’s reliable, stylish, and consistently delivers exceptional brews, even during our busiest hours. The automation features have also reduced our barista workload.',
  image: test1,
},
{
  name: 'Ricardo Alvarez',
  role: 'Madrid Mornings Cafe',
  text: 'We chose Ideal for their multi-boiler machines — and it’s been the best investment. Their pricing is surprisingly affordable for such advanced features. Quality, consistency, and savings all in one.',
  image: test2,
},
{
  name: 'Harshita Jain',
  role: 'Roasted Bliss',
  text: 'We use Ideal Coffee Machines across all our outlets. The performance, easy maintenance, and consistency in every cup have helped standardize quality at scale — something no other brand could deliver.',
  image: test3,
},
{
  name: 'Sonia Fernandes',
  role: 'Cafe Mocha Vibe',
  text: 'Installing Ideal’s coffee machine gave our café a competitive edge. The intuitive controls and sleek design blend perfectly with our aesthetic, while the consistent output keeps our customers coming back.',
  image: test4,
},
{
  name: 'Vikram Jha',
  role: 'Bean Brew Express',
  text: 'Since switching to Ideal, we’ve noticed happier customers and smoother service. The machine heats up quickly, maintains perfect temperature, and brews with precision. Support from their team has also been top-notch.',
  image: test6,
},
{
  name: 'Ritika Menon',
  role: 'The Roast Room',
  text: 'Ideal’s machines combine craftsmanship with innovation. From the grinding mechanism to pressure control, every detail is engineered for perfection. It’s elevated both the taste and efficiency in our café.',
  image: test5,
}

]

export default function Home() {
  return (
 
    <section >   


     
 <div  className="container-fluid about py-5 d-md-block d-none">
            <div  className="container py-5">
                <div  className="row g-5">
                 


    <div  className="col-lg-7 animate__animated animate__fadeInLeft ">

                                    <h2  className="display-2 f72  mb-4 textleft">Empowering Coffee Processing Excellence</h2>
                 <h4  className=" text-uppercase fw-bold mb-4 textleft">From Bean to Brew, We Deliver Complete Coffee Plant Solutions</h4>

                                    <p  className="mb-5 fs-5 textleft ">As a leading name in coffee process engineering, we provide turnkey systems that are technologically advanced, hygienic, and energy-efficient. Whether it’s extraction, evaporation, or spray drying, our solutions preserve coffee’s natural richness while optimizing every stage of production.
                                    </p>
                                     
                                    <div  className="d-flex justify-content-center flex-wrap  gap-md-0  gap-3 justify-content-md-start flex-shrink-0 mb-4">
                                       
                                        <Link  className="btn backgoundoramge py-3 px-5 px-md-5 ms-2 me-2 text-white" href="#">Request a Quote</Link>
                                         </div>
                </div>


                    <div  className="col-lg-5 wow fadeInRight mxheightset340  animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                        <div  className="position-relative h-100">
                          
                                                      <div className="position-relative w-100" style={{ height: '500px' }}>
  <Image
    src={bannermain}
    alt=""
    fill
    className="img-fluid w-100 h-100 aboutimg1 rounded"
    sizes="100vw"
    style={{ objectFit: 'cover' }}
  />
</div>

                         
                        </div>
                    </div>
                </div>
            </div>
        </div>

   
 <div  className="container-fluid about py-5 d-md-block d-none">
            <div  className="container py-5">
                <div  className="row g-5">
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
    className="img-fluid w-100 h-60 aboutimg1"
    sizes="100vw"
    style={{ objectFit: 'cover' }}
  />
</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-7 wow fadeInLeft" data-wow-delay="0.2s">
                        <div  className="h-100">
                            <h2  className="fs41 mb-4 fw700black">Highest quality coffee machines</h2>
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
                            <p  className="mb-4 fs18">With over 25 years of experience in engineering Leveraging advanced automation, hygienic design, and customizable features, we ensure each system delivers a premium coffee experience while aligning with your brand and operational goals.
                            </p>
                            <div  className="text-dark mb-4">
                                    <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Engineered for performance, longevity, and low maintenance</p>
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span>  Smart automation for seamless, high-volume brewing

</p>
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Custom-built options tailored to your brand identity and space</p>
                                 <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Manufactured to meet international safety and quality standards</p>
                            </div>
                            <a  className="btn btnmain2 py-3 px-4 px-md-5 ms-2 text-white" href="#">Contact us</a>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
          <div className="container py-5 d-md-none d-block">
      <div className="row align-items-center">
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

           <p  className="mb-4 fs18">With over 25 years of experience in engineering Leveraging advanced automation, hygienic design, and customizable features, we ensure each system delivers a premium coffee experience while aligning with your brand and operational goals.
                            </p>

           <div  className="text-dark mb-4">
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Engineered for performance, longevity, and low maintenance</p>
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span>  Smart automation for seamless, high-volume brewing

</p>
                                <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Custom-built options tailored to your brand identity and space</p>
                                 <p  className="fs-5"><span  className="bi bi-check-lg orangetext me-2"></span> Manufactured to meet international safety and quality standards</p>
                            </div>
          <button className="btn btn-warning text-white px-4 py-2">Contact us</button>
        </div>

     
      </div>
    </div>



          {/* <section className="container my-5">
      <div className=" mb-4 borderbottom  pb-4 text-center" >
        <h2 className="cofheading h2size">Brew Better, Anywhere – The Right<br />Coffee Machine for Every Space</h2>
      </div> 

      <div className="row g-4">
        {categories.map((item, idx) => (
          <div className="col-12 col-sm-6 col-lg-3" key={idx}>
            <div className="card h-100 border-0">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={450}
                className="card-img-top rounded zoom-hover"
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div className="card-body px-0">
                <Link href={item.link} className="text-decoration-none text-dark d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-brown" style={{ textDecoration: 'underline' }}>{item.title}</span>
                  <span className="fs-5 text-brown">&#8599;</span> 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section> */}
 <section className="container-fluid px-0 backgoundnew   pt-5  pb-5">
      <div className="row g-0  align-items-center  max90 ">
        {/* Left: Text */}
        <div className="col-lg-8   p-md-5 p-3">
        
          <h1 className="text-white    h2size animate__animated animate__fadeInLeft">
  Engineered for Performance,  <br />Built for Scale <br />
  {/* Commercial-Grade Coffee Machines <br />
  Trusted by Baristas, Designed for Business */}

</h1>
  <h4 className="mt-4 text-white animate__animated animate__fadeInLeft">
    From process design to automation — our commercial-grade coffee machines power consistent, hygienic brewing at an industrial level.
  </h4>
</div>


        {/* Right: Image */}
        <div className="col-lg-4 col-10  animate__animated animate__fadeInRight">
          <Image
            src={cofemanu1}
            alt="Pilot Plant"
            width={300}
            height={300}
            className="img-fluid w-100 h-100 object-fit-cover rounded"
            priority
          />
        </div>
      </div>
    </section>
  

       <section className="container my-5">
      <h2 className="text-center mb-4 pb-4 h2size ">Testimonials</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
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



     <div className="container-fluid banner py-5 wow zoomIn mb-5  " data-wow-delay="0.2s">
            <div className="banner-design-1"></div>
            <div className="banner-design-2"></div>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-8">
                        <div className="">
                            <h4 className="text-white">Contact With Me</h4>
                            <h2 className=" text-white mb-0 fs700 h2size">Precision-Engineered Coffee Machines Backed by Industrial Process Expertise</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center justify-content-lg-end h-100">
                            <a className="btn btnconatct py-3 px-4 px-md-5 ms-2 text-white fw-5" href="#">Request a Custom Demo</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section >
  );
}
