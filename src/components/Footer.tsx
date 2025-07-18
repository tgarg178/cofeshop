import Link from 'next/link';
export default function Footer() {
  return (
    <>
 <footer className="bg-primary text-white py-5 footermain">
      <div className="container py-4">
   
      <div className="row g-5 max95">
        <div className="col-lg-4 col-md-6 logofooter">
  </div>
  <div className="col-lg-4 col-md-6 paddingfootermid d-flex flex-column">
    <h5 className="text-white mb-4 f24">Quick Links</h5>
    <Link className="btn btn-link text-white text-decoration-none  f18 footerquiclink" href="/">    <i className="bi bi-chevron-right me-1"></i> Home</Link>
    <Link className="btn btn-link text-white  text-decoration-none f18 footerquiclink" href="/about">     <i className="bi bi-chevron-right me-1"></i>    About</Link>
    <Link className="btn btn-link text-white  text-decoration-none f18 footerquiclink" href="/product">    <i className="bi bi-chevron-right me-1"></i>Products</Link>
   
    <Link className="btn btn-link text-white  text-decoration-none f18 footerquiclink" href="/contact">    <i className="bi bi-chevron-right me-1"></i>Contact</Link></div>
    <div className="col-lg-4 col-md-6">
      <h5 className="text-white mb-4 f24">Contact</h5>
      <p className="mb-2 f18 d-flex gap-2">
 <i className="bi bi-geo-alt-fill"></i>
       Address</p>
        <p className="mb-2 text-white-50 f18 d-flex gap-2">
        <i className="bi bi-telephone-fill textwhite"></i>
          <a href="tel:+919632059983" className="text-decoration-none text-white ">+91 9556546565</a>
          </p>
          <p className="mb-2 f18  text-white  d-flex gap-2"><i className="bi bi-envelope-fill textwhite"></i><a href="mailto:hr@academize.in" className="text-decoration-none text-white">abcd@gmail.com</a></p></div></div>
</div>
   <div className="scrollUpIcon text-white">
        <Link href="#">
          <i className="bi bi-chevron-up fs-4 colorwhite bg-primary "></i>
        </Link>
      </div>
<div className="copyright max90 border-top pt-3">
  <div className="row">
    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">© 
      <Link className="border-bottom text-white bold text-decoration-none" href="#">DEVEX</Link>, 
      All Rights Reserved.</div>
      <div className="col-md-6 text-center text-md-end mb-3 mb-md-0">Designed By{" " 
}<a className="text-white bold" href="https://www.ambros.tech/">Ambros Tech Solutions Pvt. Ltd.</a></div></div></div>
   


    </footer>
        </>
  );

}
