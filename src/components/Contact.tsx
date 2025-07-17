import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className='max90'>
            <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" >
                <h4 className="text-white display-4 mb-4 wow  animate__animated animate__fadeInDown fs700" data-wow-delay="0.1s">CONTACT US</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow  animate__animated animate__fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item "><Link href="/" className='text-decoration-none text-white'>Home</Link></li>
                   
                    <li className="breadcrumb-item active text-white">Contact Us</li>
                </ol>    
            </div>
        </div>




           <div className="container-fluid contact  py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div>
                            <h4 className="orangetext text-brown">Contact Us</h4>
                            <h1 className="mb-4 fs700 text-brown" >Let&rsquo;s Brew Success Together – Get in Touch</h1>
                            <p className="mb-3">Whether you&rsquo;re looking to install a new coffee machine, customize one for your café, or explore distribution opportunities — we’re here to help. Fill out the form and our team will get back to you shortly.
                            </p>
                            <div className="d-flex align-items-center mb-4">
                              <a className="btn btn-light btn-md-square me-3 orangetext btnhovernew backgoundicon" href="#">
                <i className="bi bi-facebook text-white"></i>
              </a>
              <a className="btn btn-light btn-md-square me-3 orangetext btnhovernew backgoundicon" href="#">
                <i className="bi bi-twitter text-white"></i>
              </a>
              <a className="btn btn-light btn-md-square me-3 orangetext btnhovernew backgoundicon"  href="#">
                <i className="bi bi-instagram text-white"></i>
              </a>
              <a className="btn btn-light btn-md-square me-0 orangetext btnhovernew backgoundicon" href="#">
                <i className="bi bi-linkedin text-white"></i>
              </a>
                            </div>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-inline-flex bg-white w-100 p-4  form-control border-1 ">
                                        <i className=" me-4 bi bi-geo-alt-fill text-brown iconfontsize"></i>
                                        <div>
                                            <h4 className='text-brown'>Address</h4>
                                            <p className="mb-0">123 North tower New York, USA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="d-inline-flex bg-white w-100 p-4 gap-4 form-control border-1">
                                        <i className="bi bi-envelope-fill me-2 text-brown iconfontsize"></i>
                                        <div>
                                            <h4 className='text-brown'>Mail Us</h4>
                                            <p className="mb-0">info@example.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6 ">
                                    <div className="d-inline-flex bg-white w-100 p-4 gap-4 form-control border-1 ">
                                        <i className="bi bi-telephone-fill text-brown iconfontsize"></i>
                                        <div>
                                            <h4 className='text-brown'>Telephone</h4>
                                            <p className="mb-0">(+012) 3456 7890 123</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                        <div>
                        
                            <form>
                                
                                   <div className="row g-4   mt-md-4 mt-0">
      <div className="col-lg-12 col-xl-6">
        <div className="form-floating">
          <input type="text" className="form-control border-1" id="name" placeholder="Your Name" />
          <label htmlFor="name">Your Name</label>
        </div>
      </div>

      <div className="col-lg-12 col-xl-6">
        <div className="form-floating">
          <input type="email" className="form-control border-1" id="email" placeholder="Your Email" />
          <label htmlFor="email">Your Email</label>
        </div>
      </div>

      <div className="col-lg-12 col-xl-6">
        <div className="form-floating">
          <input type="tel" className="form-control border-1" id="phone" placeholder="Phone" />
          <label htmlFor="phone">Your Phone</label>
        </div>
      </div>

      <div className="col-lg-12 col-xl-6">
        <div className="form-floating">
          <input type="text" className="form-control border-1" id="project" placeholder="Project" />
          <label htmlFor="project">Your Project</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-floating">
          <input type="text" className="form-control border-1" id="subject" placeholder="Subject" />
          <label htmlFor="subject">Subject</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-floating">
          <textarea
            className="form-control border-1"
            placeholder="Leave a message here"
            id="message"
            style={{ height: '125px' }}
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheck" />
          <label className="form-check-label" htmlFor="flexCheck">
            I agree with the site privacy policy
          </label>
        </div>
      </div>

      <div className="col-12">
        <button className="contactbtn">Send Message</button>
      </div>
    </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="h-100 overflow-hidden">
                          <iframe
  className="w-100"
  style={{ height: '400px' }}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  
    </section>
  )
}

export default Contact
