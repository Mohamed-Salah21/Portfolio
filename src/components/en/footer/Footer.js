import "./footer.scss";
import "./footer-media.scss";
import { Link } from "react-router-dom";
var Footer = () => {
  return (
    <footer className="footer-en">
      <div className="parent">
        <div className="row columns-container ">
          <div className="col-md">
            <h3>Portfolio</h3>
            <div>
              <p>
                portfolio website is. At its most basic form, a portfolio
                website provides professional information about an individual or
                a company and presents a showcase of their work.
              </p>
            </div>
          </div>
          <div className="col-md">
            <h3>Quick Links</h3>
            <div>
              <div className="link-container">
                <span> &#8250; </span>
                <Link to="/"> Home </Link>
              </div>

              <div className="link-container">
                <span> &#8250; </span>
                <Link to="/skills-en"> Skills </Link>
              </div>
              <div className="link-container">
                <span> &#8250; </span>
                <Link to="/projects-en"> Personal Projects </Link>
              </div>
              <div className="link-container">
                <span> &#8250; </span>
                <Link to="/contact-en"> Contact </Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <h3>Contacts</h3>
            <div>
              <span>
                <i className="fas fa-mobile"></i> 01149630650
              </span>
              <span>
                <i className="fab fa-whatsapp"></i> 01275681100
              </span>
              <span>
                <i className="fas fa-envelope"></i> moh.salah790@gmail.com
              </span>
              <span>
                <i className="fas fa-map-market"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
