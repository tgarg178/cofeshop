import Link from 'next/link';
export default function Footer() {
  return (
    <>
    <div className="container-fluid footer  py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5 mb-5 align-items-center">
          <div className="col-lg-7">
            <div className="position-relative mx-auto">
              <input
                className="form-control w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Email address to Subscribe"
              />
              <button type="button" className="btn btn-primary position-absolute top-0 end-0 py-2 px-4 mt-2 me-2 backgoundoramge">
                Subscribe
              </button>
            </div>
          </div> 

          <div className="col-lg-5">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
              <a className="btn btn-light btn-md-square me-3 orangetext btnhover" href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="btn btn-light btn-md-square me-3 orangetext btnhover" href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a className="btn btn-light btn-md-square me-3 orangetext btnhover" href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="btn btn-light btn-md-square me-0 orangetext btnhover" href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h3 className="text-white mb-4">
                <i className="bi bi-lightning-fill orangetext"></i> Electra
              </h3>
              <p className="mb-3 textmuted ">
                Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Quick Links</h4>
              <Link  href="/">Home</Link>
              <Link href="/about">About us</Link>
              <Link href="/service">Service</Link>
              <Link href="/testimonial">Testimonial</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Electricity service</h4>
              <Link href="#">Air Conditioning</Link>
              <Link href="#">Electrical Panels</Link>
              <Link href="#">Security System</Link>
              <Link href="#">Indoor Lighting</Link>
              <Link href="#">Electrical Services</Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Contact Info</h4>
              <a href="#">
               <i className="bi bi-geo-alt-fill orangetext"></i> 123 Street, New York, USA
              </a>
              <a href="mailto:info@example.com">
                <i className="bi bi-envelope-fill  me-2 orangetext"></i> info@example.com
              </a>
              <a href="mailto:info@example.com">
                <i className="bi bi-envelope-fill me-2 orangetext"></i> info@example.com
              </a>
              <a href="tel:+01234567890">
                <i className="bi bi-telephone-fill orangetext"></i> +012 345 67890
              </a>
              <a href="tel:+01234567890" className="mb-3">
              <i className="bi bi-telephone-fill orangetext"></i> +012 345 67890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="  textmuted">
                          <a href="#" className=" text-white">
                        <i className="bi bi-c-circle-fill text-white px-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end  textmuted  text-decoration-none">
                       
                        Designed By <a className=" text-white  text-decoration-none" href="https://www.ambros.tech/"> Ambros Tech Solutions Pvt. Ltd.</a>
                    </div>
                </div>
            </div>
        </div>


        <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>   
        </>
  );

}
