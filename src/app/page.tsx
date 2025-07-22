'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';
import GlobalEnquiryForm from '@/components/GlobalPopupEnquiry';

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
// import cofee4 from '@/assets/cofee4.jpg'
import cofee3 from '@/assets/cofee3.avif'

// import cofeepalnt1 from '@/assets/cofeplant4.jpg'
import cofeepalnt2 from '@/assets/cofeplant3.jpg'



// import bannermain from '@/assets/imagenew.png'
import main1 from '@/assets/main1.jpeg'
import modi2 from '@/assets/modi5.jpeg'
import modi3 from '@/assets/modi1.jpeg'




// import cofedesign from '@/assets/cofeedesign.png'
import { toast } from 'react-hot-toast';

import { ErrorMessage, Field, Form, Formik } from 'formik';
// import { FormikHelpers } from 'formik';
import emailjs from 'emailjs-com';

// import Link from 'next/link'

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
  
  // const handleSubmit = async (values: any, { resetForm }: any) => {
  //   try {
  //     toast.loading('Processing');
  //     await emailjs.send("service_01ispk6", "template_tuey7rr", values, "FEguMM7ZerdBCdRrs");

  //     toast.dismiss();
  //     toast.success('Thank you. We will get back to you.');
  //     resetForm();


  //     // }
  //   } catch (error) {
  //     toast.error('try again later!');
  //     console.error('Error submitting form:', error);
  //   }
  // };
type EnquiryFormValues = {
  name: string;
  email: string;
  contact_number: string;
  course: string;
  location: string;
  message: string;
};
const handleSubmit = async (
  values: EnquiryFormValues,
  { resetForm }: { resetForm: () => void }
) => {
  try {
    toast.loading('Processing');
    
    await emailjs.send(
      'service_01ispk6',
      'template_tuey7rr',
      values as Record<string, string>,
      'FEguMM7ZerdBCdRrs'
    );

    toast.dismiss();
    toast.success('Thank you. We will get back to you.');
    resetForm();
  } catch (error) {
    toast.error('Try again later!');
    console.error('Error submitting form:', error);
  }
};
  return (
 
    <section >   


     
 <div  className="container-fluid about py-md-5 py-2 ">
            <div  className="container py-md-5 py-0">
                <div  className="row g-5">
                 
    <div className="position-relative  overflow-hidden d-md-none d-block max90">
      <Image
        // src={bannermain}
        src={main1}

        alt="DEVEX Anlagenbau"
        width={1920}
        height={800}
        className="img-fluid w-100 object-fit-cover"
        priority
      />

      
    </div>

    <div  className="col-lg-7 animate__animated animate__fadeInLeft ">

                                    <h2  className="display-2 f72  mb-4 textleft text-primary ">Empowering Coffee Processing Excellence</h2>
                 <h4  className=" text-uppercase fw-bold mb-4 textleft">From Bean to Brew, We Deliver Complete Coffee Plant Solutions</h4>

                                    <p  className="mb-5 fs-5 textleft ">As a leading name in coffee process engineering, we provide turnkey systems that are technologically advanced, hygienic, and energy-efficient. Whether it’s extraction, evaporation, or spray drying, our solutions preserve coffee’s natural richness while optimizing every stage of production.
                                    </p>
                                     
                                    <div  className="d-flex justify-content-center flex-wrap  gap-md-0  gap-3 justify-content-md-start flex-shrink-0 mb-4">
                                       
                                        {/* <Link  className="btn skybluebackgound py-3 px-5 px-md-5 ms-2 me-2 text-white" href="#">Request a Quote</Link> */}
                                        {/* backgoundoramge */}

                                           <GlobalEnquiryForm className="btn  skybluebackgound rounded-0 pymainatin py-3 px-5 px-md-5 ms-2 me-2 " buttonText="Request a Quote"
          />
                                         </div>
                </div>


                    <div  className="col-lg-5 wow fadeInRight mxheightset340  animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                        <div  className="position-relative h-100 d-md-block d-none">
                          
                                                      <div className="position-relative w-100" style={{ height: '500px' }}>
  <Image
    src={main1}
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

    <div className="position-relative max90 d-md-block d-none">
      <Image
        src={modi2}
        alt="DEVEX Anlagenbau"
        width={1920}
        height={600}
        className=" w-100 "
        priority
      />

       <div className="position-absolute top-50 start-50 translate-middle text-center overlayText">
        <h2 className="text-primary bg-white bg-opacity-75 px-4 py-2 d-inline-block fw-semibold">
      
          <GlobalEnquiryForm className="  rounded-0 pymainatin py-3 px-5 px-md-5 ms-2 me-2 text-decoration-none " buttonText="   Looking to Set Up or Upgrade Your Coffee Processing Plant? "
          />
        </h2>
      </div>
    </div>


     <div className="position-relative w-100 overflow-hidden d-md-none d-block">
      <Image
        src={modi2}
        alt="DEVEX Anlagenbau"
        width={1920}
        height={800}
        className="img-fluid w-100 object-fit-cover"
        priority
      />
   <div className="position-absolute top-50 start-50 translate-middle text-center ${styles.overlayText">
        <h2 className="text-primary bg-white bg-opacity-75 px-4 py-2 d-inline-block fw-semibold">
      
          <GlobalEnquiryForm className="  rounded-0 pymainatin py-3  text-decoration-none " buttonText="   Looking to Set Up or Upgrade Your Coffee Processing Plant? "
          />
        </h2>
      </div>
      
    </div>
   
 <div  className="container-fluid about py-5 d-md-block d-none">
            <div  className="container py-5">
                <div  className="row g-5">
                     <div  className="col-lg-5 wow fadeInRight mxheightset340" data-wow-delay="0.2s">
                        <div  className="position-relative h-100">
                          
                                                      <div className="position-relative w-100" style={{ height: '400px' }}>
  <Image
    src={modi3}
    alt=""
    fill
    className="img-fluid w-100 h-100 aboutimg1"
    sizes="100vw"
    style={{ objectFit: 'cover' }}
  />
  
</div>

                            <div  className="bg-white">
                                <div  className="position-absolute pt-3 bg-white aboutmainleft ">
                                    <div  className="backgounimgsky p-4">
                                      {/* backgoundoramge */}
                                        <h4  className="display-2 mb-0 fs700 text-white">25+</h4>
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
                            <h2  className="fs41 mb-4 fw700black ">Highest quality coffee Plants</h2>
                            <div  className="row g-4 mb-4">
                                <div  className="col-md-6">
                                    <div   className="d-flex text-decoration-none">
                                        <span  className="bi bi-cup text-primary bilight43 bi-3x me-3"></span>
                                        <h4  className="mb-0 abouth4 pt-2">Commercial Espresso Solutions</h4>
                                    </div>
                                </div>
                                <div  className="col-md-6">
                                    <div  className="d-flex text-decoration-none">
                                        <span  className="bi bi-gear  text-primary bilight43 me-3"></span>
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
                            {/* <a  className="btn  py-3 px-4 skybluebackgound px-md-5 ms-2 text-white" href="#">Contact us</a> */}

                               <GlobalEnquiryForm className="btn  skybluebackgound rounded-0 pymainatin py-3 px-5 px-md-5 ms-2 me-2 " buttonText="Contact us"
          />
                        </div>
                        {/* btnmain2 */}
                    </div>
                 
                </div>
            </div>
        </div>
          <div className="container py-md-5 py-0 d-md-none d-block">
      <div className="row align-items-center">
          
        <div className="col-lg-7 mt-3">
          <h2  className="display-4 mb-4 fw700black ">Highest quality coffee Plants</h2>

          <div className="d-flex gap-4 mb-3 flex-wrap">
            <div className="d-flex align-items-center gap-2">
            <span  className="bi bi-cup  text-primary bilight43 bi-3x me-3"></span>
                                        <h4  className="mb-0 abouth4 pt-2">Commercial Espresso Solutions</h4>
            </div>
            <div className="d-flex align-items-center gap-2">
                <span  className="bi bi-gear   text-primary bilight43 me-3"></span>
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
       <GlobalEnquiryForm className="btn  skybluebackgound rounded-0 pymainatin py-3 px-5 px-md-5 ms-2 me-2  mb-4" buttonText="Contact us"
          />
        </div>

      <div className="col-lg-5 mt-5 mt-lg-0">
          <div className="position-relative w-100 mb-3" style={{ height: "250px" }}>
            <Image
              src={modi3}
              alt="Construction site"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          </div>

          <div className="d-flex flex-column flex-sm-row gap-3">
            <div className="backgounimgsky text-white p-4 d-flex flex-column justify-content-center align-items-start" style={{ minWidth: '160px' }}>
               <h4  className="display-2 mb-0 fs700 text-white">25+</h4>
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



       
 <section className="container-fluid px-0  backgounimgsky  pt-5  pb-5 mt-md-0 mt-5">
  {/* backgoundnew */}
      <div className="row g-0  align-items-center  max90 ">
        <div className="col-lg-8   p-md-5 p-3">
        
          <h1 className="  text-white h2size animate__animated animate__fadeInLeft">
  Engineered for Performance,  <br />Built for Scale <br />

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
  

       <div className="position-relative max90 mt-5 d-md-block d-none">
      <Image
        src={cofeepalnt2}
        alt="DEVEX Anlagenbau"
        width={1920}
        height={800}
        className="img-fluid w-100 object-fit-cover"
        priority
      />

      
    </div>


     <div className="position-relative w-100 overflow-hidden d-md-none d-block mt-5">
      <Image
        src={cofeepalnt2}
        alt="DEVEX Anlagenbau"
        width={1920}
        height={800}
        className="img-fluid w-100 object-fit-cover"
        priority
      />

      
    </div>

       <section className="container my-5">
      <h2 className="text-center mb-4 pb-4 h2size  ">Testimonials</h2>
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
            {/* <div className="banner-design-1"></div> */}
            {/* <div className="banner-design-2"></div> */}
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
                            {/* <a className="btn backgounimgsky py-3 px-4 px-md-5 ms-2 text-white fw-5" href="#">Request a Custom Demo</a> */}
                             <GlobalEnquiryForm className="btn  skybluebackgound rounded-0 pymainatin py-3 px-5 px-md-5 ms-2 me-2 " buttonText="Request a Custom Demo"
          />
                        </div>
                    </div>
                </div>
            </div>
         </div>









              <div className="modal fade" id="enquiryModal" aria-labelledby="enquiryModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  contact_number: '',
                  course: '',
                  location: '',
                  message: '',
                }}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <div className="searchForm">
                  <h5 className="pb-3 fw-bold text-center text-blue">Let’s build a better future for you</h5>
                  <Form>
                    <div className="mb-3">
                      <Field type="text" name="name" placeholder="Enter Name" className="form-control" required />
                      <ErrorMessage name="name" component="div" className="error text-danger" />
                    </div>
                    <div className="mb-3">
                      <Field type="email" name="email" placeholder="Enter Email" className="form-control" required />
                      <ErrorMessage name="email" component="div" className="error text-danger" />
                    </div>
                    <div className="mb-3">
                      <Field type="text" name="contact_number" placeholder="Enter Contact Number" className="form-control" required />
                      <ErrorMessage name="contact_number" component="div" className="error text-danger" />
                    </div>
                    <div className="mb-3">
                      <Field type="text" name="course" placeholder="Enter Course" className="form-control" />
                      <ErrorMessage name="course" component="div" className="error text-danger" />
                    </div>
                    <div className="mb-3">
                      <Field type="text" name="location" placeholder="Enter Location" className="form-control" />
                      <ErrorMessage name="location" component="div" className="error text-danger" />
                    </div>
                    <div className="mb-3">
                      <Field as="textarea" name="message" placeholder="Enter Message" className="form-control" />
                      <ErrorMessage name="message" component="div" className="error text-danger" />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </Formik>
            </div>
          </div>
        </div>
    </section >
  );
}
