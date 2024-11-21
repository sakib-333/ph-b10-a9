import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    // <footer className="footer footer-center bg-sky-200 text-base-content rounded p-10">
    //   <nav className="grid grid-flow-col gap-4">
    //     <a className="link link-hover">About us</a>
    //     <a className="link link-hover">Contact</a>
    //     <a className="link link-hover">Jobs</a>
    //   </nav>
    //   <nav>
    //     <div className="grid grid-flow-col gap-4 items-center">
    //       <a href="#">
    //         <FaFacebook />
    //       </a>
    //       <a href="#">
    //         <FaGithub />
    //       </a>
    //       <a href="#">
    //         <FaTwitter />
    //       </a>
    //       <a href="#">
    //         <FaInstagram />
    //       </a>
    //     </div>
    //   </nav>
    //   <aside>
    //     <p>Copyright &copy; {new Date().getFullYear()} - All right reserved</p>
    //   </aside>
    // </footer>
    <div className="bg-base-300">
      <footer className="footer text-base-content p-10 border max-w-5xl mx-auto">
        <nav>
          <h6 className="footer-title">Contact information</h6>
          <div>
            <span className="font-bold">Phone: </span>
            <span className="link link-hover">+8801322901105</span>
          </div>
          <div>
            <span className="font-bold">Support: </span>
            <span className="link link-hover">web@programming-hero.com</span>
          </div>
          <div>
            <span className="font-bold">Address: </span>
            <span className="link link-hover">
              Level-4, 34, Awal Centre, Banani, Dhaka
            </span>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">About us</h6>
          <a className="link link-hover" href="#">
            Blogs
          </a>
          <a className="link link-hover" href="#">
            Important links
          </a>
          <a className="link link-hover" href="#">
            Jobs
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </nav>
      </footer>
      <div className="divider"></div>
      <p className="text-center pb-4">
        Copyright &copy; {new Date().getFullYear()} - All right reserved
      </p>
    </div>
  );
};

export default Footer;
