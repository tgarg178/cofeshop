// import React from 'react'
'use client'
import React from 'react'
import Image from 'next/image'
// import {useState, } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'
import p1 from '@/assets/p1n.png';
import p2 from '@/assets/pn2.png'
import p3 from '@/assets/pn3.png'
import p4 from '@/assets/pn4.png'
import p5 from '@/assets/p5.png'
import p6 from '@/assets/p6.png'
import p7 from '@/assets/p7.png'
import p8 from '@/assets/pn8.png'






const products = [
  {
    title: 'Automatic Coffee Machines',
    description:
      'For coffee professionals, automatic coffee machines redefine effortless excellence. With one-touch operation and programmable settings, they deliver consistently perfect brews. They ensure your seamless experience with dedicated maintenance, consultation, and service support for every cup brewed to perfection.',
    image: p1,
  },
  {
    title: 'Semi-Automatic Coffee Machines',
    description:
      'Semi-automatic coffee machines provide automation and artistry. These machines showcase their expertise by supporting baristas to control the brewing, grinding, and tamping processes. They are especially suited for specialty cafés that aim to create flavourful.',
    image: p2,
  },
  {
    title: 'Blenders',
    description:
      'Creating exceptional coffee experiences involves more than just brewing. Our high-quality blenders add precision and elegance to your creations, transforming them into true works of art. They are designed to enhance your craft and ensure that every sip delights your customers.',
    image: p3,
  },
  {
    title: 'Grinders',
    description:
      'The perfect cup of coffee starts with the ideal grind. Coffee grinders extract your beans’ authentic flavours and aromas, ensuring every cup is rich and full-bodied. Whether you’re an experienced barista or a coffee professional, using a high-quality grinder accentuates your coffee .',
    image:p4,
  },
  {
    title: 'Coffee Brewers',
    description:
      'Whether you cater to low or high-volume coffee needs, our brewers provide versatility and consistency. Designed to meet your café’s demands, they ensure every brew is flavourful, efficient, and reliable, delivering the coffee your customers love every time.',
    image: p5,
  },
  {
    title: 'Roasters',
    description:
      'Coffee roasting is a blend of science and artistry. It involves carefully transforming raw beans into the aromatic and flavourful treasures we enjoy. By mastering variables such as time, temperature, and airflow, roasters can create the ideal foundation for exceptional brews.',
    image: p6,
  },
   {
    title: 'Innovation and Technology',
    description:
      'Upscale your coffee offerings with innovative technology that captivates customers. From enhancing visual appeal to creating customised experiences, our high-end solutions empower cafés to deliver memorable moments and stay ahead in India’s evolving coffee culture.',
    image: p7,
  },
   {
    title: 'Espresso Accessories',
    description:
      'CBarista tools improve efficiency, consistency, and presentation in cafés. From tampers that ensure perfect extraction to pitchers that create silky micro-foam, these tools enhance the overall quality of coffee. Instruments for latte art add a creative touch, while practical accessories like knock boxes streamline the workflow.',
    image: p8,
  },
];

// type Category = 'Commercial' | 'Residential' | 'Industrial'

// type ServiceItem = {
//   title: string
//   image: string
//   description: string
// }


// const serviceData: Record<Category, ServiceItem[]> = {
//   Commercial: [
//     {
//       title: 'Brite Spark Services',
//       image: '/img/commercial-2.jpg',
//       description: 'Commercial service #1 description...',
//     },
//     {
//       title: 'Office Energy Solutions',
//       image: '/img/commercial-2.jpg',
//       description: 'Commercial service #2 description...',
//     },
//   ],
//   Residential: [
//     {
//       title: 'Home Solar Solutions',
//       image: '/img/residential-1.jpg',
//       description: 'Residential service #1...',
//     },
//     {
//       title: 'Smart Meter Installations',
//       image: '/img/residential-1.jpg',
//       description: 'Residential service #2...',
//     },
//   ],
//   Industrial: [
//      {
//       title: 'Brite Spark Services',
//       image: '/img/commercial-2.jpg',
//       description: 'Commercial service #1 description...',
//     },
//     {
//       title: 'Office Energy Solutions',
//       image: '/img/commercial-2.jpg',
//       description: 'Commercial service #2 description...',
//     },
    
    
//   ],
// }

// const categories: Category[] = ['Commercial', 'Residential', 'Industrial']

const Services = () => {
  //  const [activeCategory, setActiveCategory] = useState<Category>('Commercial')

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" >
                <h4 className="text-white display-4 mb-4 wow  animate__animated animate__fadeInDown fs700" data-wow-delay="0.1s">PRODUCTS</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow  animate__animated animate__fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item "><Link href="/" className='text-decoration-none text-white'>Home</Link></li>
                   
                    <li className="breadcrumb-item active text-white">Products</li>
                </ol>    
            </div>
        </div>



<div className="max95 d-flex justify-content-center">
  <div className=" py-5 w-100">
    <div className="row gap-3 justify-content-center">
      {products.map((product, idx) => (
        <div className="col-md-5 mb-4" key={idx}>
          <div className="p-4 shadow-sm border rounded h-100 row">
            <div className="text-center mb-3 col-md-6">
              <Image
                src={product.image}
                alt={product.title}
                width={250}
                height={250}
                objectFit="contain"
              />
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold">{product.title}</h5>
              <p className="text-muted">{product.description}</p>
             
                 <a  className="btn btnmain2 py-3 px-4 px-md-5 ms-2 text-white" href="#">Buy Now</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
       {/* <div className="container py-5">
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
    </div> */}
    </>
  )
}

export default Services
