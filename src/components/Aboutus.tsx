'use client';
import React from 'react'
import 'animate.css';
import Link from 'next/link';
import GlobalEnquiryForm from '@/components/GlobalPopupEnquiry';



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

   



        <div className='mt-4 mb-4 pt-4  max70'>


          <h2 className='orangetext'>
           Who We Are</h2>

  <p className='parafamily'>We are a leading provider of process engineering solutions dedicated exclusively to the coffee industry. From green bean handling to the production of instant and soluble coffee, our expertise lies in delivering turnkey plant systems that are technologically advanced, energy-efficient, and hygienic.

</p>

  <h2 className='orangetext'>  What We Do</h2> 
   <p className='parafamily'>
  

   Our systems cover the entire coffee processing cycle, including:

  </p>
  <ul className='parafamily'>
      <li>Extraction technologies that optimize aroma and flavor retention

</li>
      <li>Evaporation systems designed for efficient coffee concentration</li>
      <li>Spray-drying and freeze-drying solutions for premium instant coffee</li>
      <li>Automated control systems to ensure consistency and precision</li>
      <li>Custom design, fabrication, and installation</li>    </ul>
  <p className='parafamily'>
  

      We engineer each plant to meet the highest industry standards—ensuring product quality, operational efficiency, and compliance.


  </p>

   <h2 className='orangetext'>  Our Expertise
</h2>
    <p  className='parafamily'>With decades of hands-on experience and a deep understanding of global coffee processing standards, we offer:
</p>
  <ul className='parafamily'>
      <li>Extraction technologies that optimize aroma and flavor retention

</li>
      <li>On-time equipment delivery

</li>
      <li>Global installation and commissioning services</li>
      <li>24/7 support and maintenance</li>
      <li>Strong focus on long-term partnerships</li>    </ul>
<p className='parafamily'>
We work closely with clients to deliver not just machinery, but integrated process solutions that align with their business goals.</p>
      
 <h2 className='orangetext'>  Our Mission</h2>
<p className='parafamily'>
Our mission is to transform coffee processing through innovative systems that:</p>

  <ul className='parafamily'>
      <li>Preserve the natural richness and aroma of coffee
</li>
      <li>Maximize efficiency and consistency

</li>
      <li>Adhere to global food safety and sustainability standards</li>
      <li>24/7 support and maintenance</li>
      <li>Enable manufacturers to scale confidently and sustainably</li>    </ul>
         
   <p className='parafamily'>      We don’t just build coffee plants—we build trust, performance, and long-term success.</p>


               <GlobalEnquiryForm className="btn  backgoundoramge text-white rounded-0 pymainatin py-3 px-5 px-md-5 ms-2 me-2 " buttonText="Any Enuiry"
          />

             
        </div>

    
   </section>
  )
}

export default Aboutus
