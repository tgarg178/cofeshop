import Link from 'next/link';
import Image from 'next/image'
export default function Navbar() {
  
  return (
   
     <nav className="navbar navbar-expand-lg bg-white borderbottom py-3 px-3 px-lg-5 max90 mt-md-4">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          {/* <Image src="/logo.png" alt="Devex Logo" width={40} height={40} className="me-2" /> */}
          <span className="fw-bold fs-4 text-primary">DEVEX</span>
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
          <ul className="navbar-nav mt-4 mt-md-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link text-primary f18" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary f18" href="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary f18"  href="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary f18" href="/contact">Contact</Link>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
}