'use client';
import React from 'react'
import Link from 'next/link'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-hot-toast';

import emailjs from 'emailjs-com';
// import { FormikHelpers } from 'formik';


const Contact = () => {
  //   const handleSubmit = async (values: any, { resetForm }: any) => {
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
   <>
      <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" >
                <h4 className="text-white display-4 mb-4 wow  animate__animated animate__fadeInDown fs700" data-wow-delay="0.1s">Contact Us</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow  animate__animated animate__fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item "><Link href="/" className='text-decoration-none'>Home</Link></li>
                    <li className="breadcrumb-item"><Link href="#"  className='text-decoration-none'>Pages</Link></li>
                    <li className="breadcrumb-item active orangetext">Contact</li>
                </ol>    
            </div>
        </div>




           <div className="container-fluid contact bg-light py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div>
                            <h4 className="orangetext">Contact Us</h4>
                            <h1 className="mb-4 fs700" >Let&rsquo;s Brew Success Together – Get in Touch</h1>
                            <p className="mb-3">Whether you&rsquo;re looking to install a new coffee machine, customize one for your café, or explore distribution opportunities — we’re here to help. Fill out the form and our team will get back to you shortly.
                            </p>
                            {/* <div className="d-flex align-items-center mb-4">
                              <a className="btn btn-light btn-md-square me-3 orangetext btnhover2new" href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="btn btn-light btn-md-square me-3 orangetext btnhover2new" href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a className="btn btn-light btn-md-square me-3 orangetext btnhover2new" href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="btn btn-light btn-md-square me-0 orangetext btnhover2new" href="#">
                <i className="bi bi-linkedin"></i>
              </a>
                            </div> */}
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-inline-flex bg-white w-100 p-4">
                                        <i className=" me-4 bi bi-geo-alt-fill orangetext iconfontsize"></i>
                                        <div>
                                            <h4>Address</h4>
                                            <p className="mb-0">123 North tower New York, USA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="d-inline-flex bg-white w-100 p-4 gap-4">
                                        <i className="bi bi-envelope-fill me-2  orangetext iconfontsize"></i>
                                        <div>
                                            <h4>Mail Us</h4>
                                            <p className="mb-0">info@example.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="d-inline-flex bg-white w-100 p-4 gap-4">
                                        <i className="bi bi-telephone-fill  orangetext iconfontsize"></i>
                                        <div>
                                            <h4>Telephone</h4>
                                            <p className="mb-0">(+012) 3456 7890 123</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                        <div>
                        
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

                    <Form className='mt-2 pt-4'>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field type="text" name="name" placeholder="Enter Name" className="form-control" required />
                            <label htmlFor="name">Your Name</label>
                            <ErrorMessage name="name" component="div" className="error text-danger" />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field type="email" name="email" placeholder="Enter Email" className="form-control" required />
                            <label htmlFor="email">Your Email</label>
                            <ErrorMessage name="email" component="div" className="error text-danger" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field type="text" name="contact_number" placeholder="Enter Contact Number" className="form-control" required />
                            <label htmlFor="email">Your Contact Number</label>
                            <ErrorMessage name="contact_number" component="div" className="error text-danger" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-floating">
                            <Field type="text" name="course" placeholder="Enter Course" className="form-control" />
                            <label htmlFor="course">Course/Role</label>
                            <ErrorMessage name="course" component="div" className="error text-danger" />

                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-floating">
                            <Field type="text" name="location" placeholder="Enter Location" className="form-control" />
                            <label htmlFor="location">location</label>
                            <ErrorMessage name="location" component="div" className="error text-danger" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <Field as="textarea" name="message" placeholder="Enter Message" style={{ height: '150px' }} className="form-control" />
                            <label htmlFor="message">Message</label>
                            <ErrorMessage name="message" component="div" className="error text-danger" />
                          </div>
                        </div>
                        <div className="d-grid">
                          <button type="submit" className="btn backgoundoramge w-100 py-3 text-white">
                            Submit
                          </button>
                        </div>
                      </div>
                    </Form>

                  </Formik>
                        </div>
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="h-100 overflow-hidden">
                        <iframe
  className="w-100"
  style={{ height: '400px' }}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4628746782934!2d78.39120327514704!3d17.447825701182343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f648b8f1d5%3A0x7c6a70ab65a76ad4!2sManeesh%20Enclave%2C%20Bhagyanagar%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500090!5e0!3m2!1sen!2sin!4v1721723889753!5m2!1sen!2sin"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  
   </>
  )
}

export default Contact
