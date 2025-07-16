// import React from 'react'
'use client'
import React from 'react'
import Image from 'next/image'
import {useState, } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'

// Step 1: Define category types
type Category = 'Commercial' | 'Residential' | 'Industrial'

// Step 2: Define item type
type ServiceItem = {
  title: string
  image: string
  description: string
}

// // Step 3: Define the data object type
// const serviceData: Record<Category, ServiceItem[]> = {
//   Commercial: [
//     {
//       title: 'Brite Spark Services',
//       image: '/img/commercial-2.jpg',
//       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
//     },
    
//   ],
//   Residential: [
//     {
//       title: 'Home Solar Solutions',
//       image: '/img/residential-1.jpg',
//       description: 'Eco-friendly residential solutions for modern homes...',
//     },
//   ],
//   Industrial: [
//     {
//       title: 'Energy Ease Packages',
//       image: 'img/industrial-1.jpg',
//       description: 'Robust and scalable industrial service packages...',
//     },
//   ],
// }
const serviceData: Record<Category, ServiceItem[]> = {
  Commercial: [
    {
      title: 'Brite Spark Services',
      image: '/img/commercial-2.jpg',
      description: 'Commercial service #1 description...',
    },
    {
      title: 'Office Energy Solutions',
      image: '/img/commercial-2.jpg',
      description: 'Commercial service #2 description...',
    },
  ],
  Residential: [
    {
      title: 'Home Solar Solutions',
      image: '/img/residential-1.jpg',
      description: 'Residential service #1...',
    },
    {
      title: 'Smart Meter Installations',
      image: '/img/residential-1.jpg',
      description: 'Residential service #2...',
    },
  ],
  Industrial: [
     {
      title: 'Brite Spark Services',
      image: '/img/commercial-2.jpg',
      description: 'Commercial service #1 description...',
    },
    {
      title: 'Office Energy Solutions',
      image: '/img/commercial-2.jpg',
      description: 'Commercial service #2 description...',
    },
    
    
  ],
}

const categories: Category[] = ['Commercial', 'Residential', 'Industrial']

const Services = () => {
   const [activeCategory, setActiveCategory] = useState<Category>('Commercial')

  return (
    <>
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" >
                <h4 className="text-white display-4 mb-4 wow  animate__animated animate__fadeInDown fs700" data-wow-delay="0.1s">Services</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow  animate__animated animate__fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item "><Link href="/" className='text-decoration-none'>Home</Link></li>
                    <li className="breadcrumb-item"><Link href="#"  className='text-decoration-none'>Pages</Link></li>
                    <li className="breadcrumb-item active orangetext">Services</li>
                </ol>    
            </div>
        </div>
       <div className="container py-5">
      <div className="row">
        <div className="col-md-3 d-flex flex-column gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn  py-3   ${activeCategory === cat ? 'btn-warning text-white' : 'btn-outline-warning'} fw-semibold`}
            >
              {cat}
            </button>
          ))}

      
        </div>

        <div className="col-md-9">
     <Swiper
  spaceBetween={20}
  modules={[Autoplay]}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false, 
  }}
  loop={true}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 2 },
  }}
>
           {serviceData[activeCategory]?.map((item, index) => (
  item?.image ? (
    <SwiperSlide key={index} >
      <div className="card h-120">
        <Image
          src={item.image}
          alt={item.title || 'service'}
           width={400}
  height={250}
          className="card-img-top"
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text text-muted">{item.description}</p>
          <button className="btn btn-warning mt-auto">Read More</button>
        </div>
      </div>
    </SwiperSlide>
  ) : null
))}

          </Swiper>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
