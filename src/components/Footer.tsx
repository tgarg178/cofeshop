import Link from 'next/link';
export default function Footer() {
  return (
    <>
    <div className="container-fluid   backgoundoramge  py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
       
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <h3 className="text-white mb-4">
                <i className="bi bi-lightning-fill text-white"></i>Quality Industries
              </h3>
              <p className="mb-3 text-white ">
          At Quality Industries, we specialize in complete coffee processing solutions — blending innovation, hygiene, and precision to help manufacturers achieve consistent quality and sustainable growth.


              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item d-flex flex-column px-md-5">
              <h4 className="text-white mb-4">Quick Links</h4>
              <Link  href="/" className='text-white text-decoration-none'>Home</Link>
              <Link href="/about" className='text-white text-decoration-none'> About us</Link>
              <Link href="/process" className='text-white text-decoration-none'>Process</Link>

              <Link href="/product" className='text-white text-decoration-none'>Products</Link>
              <Link href="/contact " className='text-white text-decoration-none'>Contact Us</Link>
            </div>
          </div>

        
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Contact Info</h4>
              <Link href="#" className='text-white text-decoration-none'>
               <i className="bi bi-geo-alt-fill text-white text-decoration-none"></i> Sy.No: 810, Plot No. 19-B/11, Phase-II, IDA Patancheru, Medak Dist. 502319, Telangana.
              </Link>
               <Link href="#" className='text-white text-decoration-none'>
               <i className="bi bi-geo-alt-fill text-white text-decoration-none"></i> Flat No. 192, Maneesh Enclave, 2nd Floor, Bhagyanagar Phase-3, Near MNR College Kukatpally, Hyderabad - 500090.
              </Link>
              <Link href="mailto:info@example.com" className='text-white text-decoration-none'>
                <i className="bi bi-envelope-fill me-2 text-white text-decoration-none"></i> qualityindustries123@gmail.com
              </Link>
              <Link href="tel:+01234567890" className='text-white text-decoration-none'>
                <i className="bi bi-telephone-fill text-white text-decoration-none"></i> +91 9100090879
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="container-fluid backgoundoramge  py-4 border-top">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-white ">
                          <Link href="#" className=" text-white  fw-bold">
                        <i className="bi bi-c-circle-fill text-white px-2 text-decoration-none"></i>Quality Industries.global</Link>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end  text-white  text-decoration-none">
                       
                        Designed By <Link className=" text-white  text-decoration-none fw-bold" href="https://www.ambros.tech/"> Ambros Tech Solutions Pvt. Ltd.</Link>
                    </div>
                </div>
            </div>
        </div>


        <a href="#" className="btn backgoundoramge btn-lg-square back-to-top"><i className="bi bi-arrow-up text-white"></i></a>   
        </>
  );

}
