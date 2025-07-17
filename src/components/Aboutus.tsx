import React from 'react'
import 'animate.css';
import Link from 'next/link';
import Image from 'next/image';


import newone1 from '@/assets/newone1.png'



const Aboutus = () => {
  return (
   <section className='max90'>    
    <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" >
                <h4 className="text-white display-4 mb-4 wow  animate__animated animate__fadeInDown fs700" data-wow-delay="0.1s">ABOUT US</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow  animate__animated animate__fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item "><Link href="/" className='text-decoration-none text-white'>Home</Link></li>
                   
                    <li className="breadcrumb-item active text-white">About Us</li>
                </ol>    
            </div>
        </div>


        <div className='mt-4 mb-4 pt-4  max70'>


          <h2 className='text-brown'>
            Engineered for Excellence in Coffee Machine Manufacturing </h2>

  <p> we are driven by a passion for perfecting the coffee experience through unparalleled engineering and craftsmanship. As a leading manufacturer of commercial-grade coffee machines, we combine cutting-edge technology with meticulous design to deliver solutions that meet the diverse needs of businesses and discerning individuals alike.</p>

  <h2 className='text-brown'>Our Commitment to Quality and Innovation</h2> 

  <p>With a foundation built on precision and reliability, our state-of-the-art manufacturing facilities are equipped to produce coffee machines of exceptional quality. We specialize in advanced thermal process engineering, ensuring every machine delivers optimal performance, durability, and a consistently superior brew. From robust components to intuitive interfaces, each aspect of our machines is engineered for excellence, reflecting our deep understanding of the intricate science behind great coffee.</p>

   <h2 className='text-brown'>Trusted by Baristas, Designed for Business
</h2>
    <p>Whether it's for the bustling atmosphere of a café, the dynamic demands of an office, the comfort of a home, or the unique needs of a bakery or mobile van, our machines are designed to seamlessly integrate into any environment. We pride ourselves on creating equipment that is not only highly efficient and reliable but also easy to operate, empowering baristas and users to craft perfect coffee with confidence. Our commitment extends to delivering solutions that enhance productivity, elevate the coffee ritual, and stand the test of time.
</p>
 <h2 className='text-brown'>Our Vision</h2>
<p>
We believe that exceptional coffee begins with exceptional machinery. Our vision is to continually innovate and set new benchmarks in coffee machine manufacturing, providing our partners and customers with the tools they need to achieve coffee perfection, every single day. We are more than just manufacturers; we are dedicated contributors to the global coffee culture, committed to delivering quality that is truly tasted in every cup.</p>
         
        </div>

   <button className='aboutbtn mb-5'>Any Enuiry</button>
   </section>
  )
}

export default Aboutus
