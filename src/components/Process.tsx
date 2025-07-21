import React from 'react'
import Image from 'next/image'

import extractionImg from '@/assets/extarctionanother.jpg'
import evaporationImg from '@/assets/evaporation.jpg'
import dryingImg from '@/assets/drying.jpg'
import thermalImg from '@/assets/evaporation.jpg'
import testcenterImg from '@/assets/etxtcenter.jpg'
import Link from 'next/link';
import 'animate.css';

const Process = () => {
  const processData = [
    {
      title: 'Extraction',
      desc: 'We begin with advanced extraction techniques to draw out valuable coffee compounds from natural raw materials. Our environmentally friendly extraction plants ensure that the essential flavors, aromas, and active ingredients are captured with maximum efficiency—laying the foundation for high-quality coffee concentrates and extracts.',
      img: extractionImg,
      alt: 'Extraction process image',
    },
    {
      title: 'Evaporation',
      desc: 'Once the coffee essence is extracted, we use cutting-edge evaporation systems to reduce water content while preserving the richness of flavor. This process concentrates the liquid extracts, making them suitable for use in instant coffee, flavoring systems, and cold brew formulations.',
      img: evaporationImg,
      alt: 'Evaporation process image',
    },
    {
      title: 'Drying',
      desc: 'To transform liquid extracts into shelf-stable powders, we employ gentle drying technologies. This step ensures optimal preservation of flavor and aroma while maintaining the highest product quality. Our drying solutions are ideal for producing spray-dried and freeze-dried coffee powders.',
      img: dryingImg,
      alt: 'Drying process image',
    },
    {
      title: 'Thermal process engineering',
      desc: 'For specific product requirements, we apply thermal process engineering to ensure safe, hygienic, and effective treatment of ingredients. Our systems maintain strict control over temperature and time, allowing us to meet food safety standards without compromising taste or quality.',
      img: thermalImg,
      alt: 'Thermal processing image',
    },
    {
      title: 'Test Center',
      desc: 'Innovation starts with testing. Our in-house test center enables pilot-scale trials, process optimization, and product development. Here, we collaborate with partners to fine-tune new coffee concepts—ensuring every product meets both technical standards and consumer expectations.',
      img: testcenterImg,
      alt: 'Test center image',
    },
  ]

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" >
                <h4 className="text-white display-4 mb-4 wow  animate__animated animate__fadeInDown fs700" data-wow-delay="0.1s">Our Process</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow  animate__animated animate__fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item "><Link href="/" className='text-decoration-none'>Home</Link></li>
                    <li className="breadcrumb-item"><Link href="#"  className='text-decoration-none'>Pages</Link></li>
                    <li className="breadcrumb-item active orangetext">Process </li>
                </ol>    
            </div>
        </div>

            <section className="container py-5">
      <div className="text-center mb-5">
        {/* <h2 className="fw-bold">Our Process</h2> */}
        <p className="parafamily " >Our process blends innovation, precision, and sustainability to craft exceptional coffee products. From clean extraction and efficient evaporation to gentle drying and controlled thermal treatment, every stage is carefully engineered to preserve natural flavors, enhance purity, and ensure product safety. With advanced technology and a commitment to quality, we transform raw ingredients into premium coffee solutions—responsibly and consistently.

</p>
      </div>

      <div className="row gy-5 ">
        {processData.map((step, index) => (
          <div className="col-md-6 col-lg-12 maxprocess" key={index}>
            <div className=" d-flex gap-4 flex-wrap ">
              <div className="mb-3 col-lg-5 col-12 animate__animated animate__fadeInLeft">
                <Image
                  src={step.img}
                  alt={step.alt}
                  width={400}
                  height={300}
                  className="rounded img-fluid object-fit-cover"
                  style={{ objectFit: 'cover',height:'250px' , width: '100%' }}
                //   maxHeight: '150px'
                />
              </div>
           <div  className="mb-3 col-lg-6  col-12  text-center animate__animated animate__fadeInRight">
              <h2 className='orangetext'>{step.title}</h2>
               {/* <h5 className="fw-bold px-3 ">{step.title}</h5> */}
              <p className="text-black px-3 parafamily">{step.desc}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
    </>

  )
}

export default Process
