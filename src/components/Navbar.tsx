import Link from 'next/link';

export default function Navbar() {
  
  return (
       <div className="container-fluid header-top">
      <div className="container d-flex align-items-center">
        <div className="d-flex align-items-center h-100 ">
          <Link href="/" className="navbar-brand" style={{ height: '125px' }}>
            <h1 className="   orangetext mb-0">
              <i className="bi bi-lightning-fill orangetext"></i> Electra
            </h1>
          </Link>
        </div>
        <div className="w-100 h-100">
          {/* Topbar */}
          <div className="topbar px-0 py-2 d-none d-lg-block" style={{ height: '45px' }}>
            <div className="row gx-0 align-items-center">
              <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                <div className="d-flex flex-wrap">
                  <div className="border-end border-primary pe-3">
                    <Link href="#" className="textmuted small">
                    <i className="bi bi-geo-alt orangetext me-2"></i>Find A Location
                    </Link>
                  </div>
                  <div className="ps-3">
                    <a href="mailto:example@gmail.com" className="textmuted small">
                      <i className="bi bi-envelope    orangetext me-2"></i>example@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <div className="d-flex justify-content-end">
                  <div className="d-flex  border-primary pe-3">
                    <a className="btn p-0   orangetext me-3" href="#"><i className="bi bi-facebook"></i> </a>
                    <a className="btn p-0   orangetext me-3" href="#"><i className="bi bi-twitter"></i></a>
                    <a className="btn p-0   orangetext me-3" href="#"><i className="bi bi-instagram"></i></a>
                    <a className="btn p-0   orangetext me-0" href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
               
                </div>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <div className="nav-bar px-0 py-lg-0" style={{ height: '80px' }}>
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
              <Link href="/" className="navbar-brand-2">
                <h1 className=" orangetext mb-0">
           <i className="bi bi-lightning-fill orangetext"></i>Electra
                </h1>
              </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
               <span className="bi bi-list"></span>
              </button>

              <div className="collapse navbar-collapse mt-md-2 mt-0" id="navbarCollapse">
                <div className="navbar-nav mx-0 mx-lg-auto bg-white">
                  <Link href="/" className="nav-item nav-link active f18">Home</Link>
                  <Link href="/about" className="nav-item nav-link f18">About</Link>
                  <Link href="/services" className="nav-item nav-link f18">Services</Link>

              

                  <Link href="/contact" className="nav-item nav-link f18">Contact</Link>

                  <div className="nav-btn ps-3">
                   
                    <Link href="#" className="btn btn-primary backgoundoramge py-2 px-4 ms-0 ms-lg-3">
                      Get Solution
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}