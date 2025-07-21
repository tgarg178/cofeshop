import Link from 'next/link';
export default function Footer() {
  return (
    <>
    <div className="container-fluid footer  py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5 mb-5 align-items-center">
          <div className="col-lg-7">
        
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
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <h3 className="text-white mb-4">
                <i className="bi bi-lightning-fill orangetext"></i>Quality Industries
              </h3>
              <p className="mb-3 textmuted ">
              Crafting innovative, reliable coffee machines for commercial use. We combine engineering precision with a passion for perfect coffee.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item d-flex flex-column px-md-5">
              <h4 className="text-white mb-4">Quick Links</h4>
              <Link  href="/">Home</Link>
              <Link href="/about">About us</Link>
              <Link href="/process">Process</Link>

              <Link href="/product">Products</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          {/* <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4"> Product Categories</h4>
              <Link href="/product">Automatic Coffee Machines</Link>
              <Link href="/product">Semi-Automatic Coffee Machines</Link>
              <Link href="/product">Blenders</Link>
              <Link href="/product">Grinders</Link>
              <Link href="/product">Coffee Brewers</Link>
            </div>
          </div> */}

          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Contact Info</h4>
              <Link href="#">
               <i className="bi bi-geo-alt-fill orangetext"></i> Sy.No: 810, Plot No. 19-B/11, Phase-II, IDA Patancheru, Medak Dist. 502319, Telangana.
              </Link>
               <Link href="#">
               <i className="bi bi-geo-alt-fill orangetext"></i> Flat No. 192, Maneesh Enclave, 2nd Floor, Bhagyanagar Phase-3, Near MNR College Kukatpally, Hyderabad - 500090.
              </Link>
              <Link href="mailto:info@example.com">
                <i className="bi bi-envelope-fill me-2 orangetext"></i> qualityindustries123@gmail.com
              </Link>
              <Link href="tel:+01234567890">
                <i className="bi bi-telephone-fill orangetext"></i> +91 9100090879
              </Link>
              
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
                          <Link href="#" className=" text-white">
                        <i className="bi bi-c-circle-fill text-white px-2"></i>Your Site Name</Link>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end  textmuted  text-decoration-none">
                       
                        Designed By <Link className=" text-white  text-decoration-none" href="https://www.ambros.tech/"> Ambros Tech Solutions Pvt. Ltd.</Link>
                    </div>
                </div>
            </div>
        </div>


        <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>   
        </>
  );

}
