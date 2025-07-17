'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';
import machin1 from '@/assets/machin1.png'
import machine2 from '@/assets/machinemain6.png';

import cof1 from '@/assets/cof1.png'
import cof2 from '@/assets/cof2.png'
import cof3 from '@/assets/cof3.png'
import cof4 from '@/assets/cof4.png'


import test1 from '@/assets/test1.webp';
import test2 from '@/assets/test2.webp';
import test3 from '@/assets/test3.webp';
import test4 from '@/assets/test4.webp';
import test5 from '@/assets/test5.webp';
import test6 from '@/assets/test6.webp';






import Link from 'next/link'
const categories = [
  {
    title: 'Coffee Machine For Cafe',
    image: cof1,  
    link: '/products',
  },
  {
    title: 'Coffee Machine For Office',
    image: cof2,
    link: '/products',
  },
  {
    title: 'Coffee Machine For Home',
    image: cof3,
    link: '/products',
  },
  {
    title: 'Coffee Machine for Bakery and Van',
    image: cof4,
    link: '/products',
  },
]
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
    <section className="max90">   
   <section className="container-fluid px-0 hero-section ">
      <div className="row g-0 min-vh-100 align-items-center">
        {/* Left: Text */}
        <div className="col-lg-7   p-5">
        
          <h1 className="hero-text  animate__animated animate__fadeInLeft">
  Engineered for Excellence <br />
  Commercial-Grade Coffee Machines <br />
  Trusted by Baristas, Designed for Business
</h1>
</div>


        {/* Right: Image */}
        <div className="col-lg-5 col-10  animate__animated animate__fadeInRight">
          <Image
            src={machin1}
            alt="Pilot Plant"
            width={300}
            height={300}
            className="img-fluid w-100 h-100 object-fit-cover"
            priority
          />
        </div>
      </div>
    </section>

       <p className="section-text textsectionhome mt-6 pt-4 ">
  Partnering with clients worldwide, we design cutting-edge coffee machines that redefine operational efficiency and brewing excellence.
  From cafés to corporate chains, our machines are trusted for consistent results and long-term durability.
  Built to global safety standards, our technology ensures optimized brewing for every production environment.
</p>



 <div className="col-lg-12 mt-5 pt-5 d-md-block  d-none animate__animated animate__fadeInUp">
        <Image
  src={machine2}
  alt="Pilot Plant"
  width={500}
  height={100}
  className="img-fluid "
  style={{ height: '550px' ,width:"100%" }}
  priority
/>
        </div> 

 <div className="col-lg-12 mt-5 pt-5 d-block d-md-none animate__animated animate__fadeInUp">
        <Image
  src={machine2}
  alt="Pilot Plant"
  width={500}
  height={100}
  className="img-fluid "
  style={{ height: '300px' ,width:"100%" }}
  priority
/>
        </div> 


          <section className="container my-5">
      <div className=" mb-4 borderbottom  pb-4 text-center" >
        <h2 className="cofheading">Brew Better, Anywhere – The Right<br />Coffee Machine for Every Space</h2>
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
    </section>



       <section className="container my-5">
      <h2 className="text-center mb-4 pb-4 cofheading borderbottom">Testimonials</h2>
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
    </section>
  );
}
