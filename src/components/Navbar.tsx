'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import GlobalEnquiryForm from '@/components/GlobalPopupEnquiry';

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    
    import('bootstrap/js/dist/collapse').then(({ default: Collapse }) => {
      const collapseEl = document.getElementById('navbarNavDropdown');
      if (collapseEl?.classList.contains('show')) {
        const bsCollapse = Collapse.getInstance(collapseEl) || new Collapse(collapseEl);
        bsCollapse.hide();
      }
    });
  }, [pathname]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white borderbottom py-3 px-3 px-lg-5 max90 mt-md-4 ">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <span className="fw-bold orangetext f35">Quality Industries</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav mt-4 mt-md-0 gap-3 d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link className="nav-link f21" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link f21" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link f21" href="/process">Processes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link f21" href="/product">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link f21" href="/contact">Contact</Link>
              </li>

               <GlobalEnquiryForm className="btn  backgoundoramge text-white rounded-0 pymainatin py-3 px-5 px-md-5 ms-2 me-2 " buttonText="Get In Touch"
          />
          
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
