import "./footer-ar.scss";
import "./footer-media-ar.scss";
import { Link } from "react-router-dom";
var FooterAr = ({ scrolling }) => {
  return (
    <footer className="footer-ar">
      <div className="parent">
        <div className="row columns-container ">
          <div className={` col-md ${scrolling && "reveal"}`}>
            <h3>Portfolio</h3>
            <div>
              <p>
                موقع المحفظة هو. في أبسط أشكاله ، يوفر موقع الويب الخاص بالمحفظة
                معلومات احترافية عن فرد أو شركة ويقدم عرضًا لعملهم.
              </p>
            </div>
          </div>
          <div className={` col-md ${scrolling && "reveal"}`}>
            <h3> روابط سريعة </h3>
            <div>
              <div className="link-container">
                <span> &#8250; </span>
                <Link to="/ar"> الرئيسية </Link>
              </div>
              <div className="link-container">
                <span> &#8250; </span>
                <Link to="/ar/skills"> المهارات </Link>
              </div>
              <div className="link-container">
                <span> &#8250; </span>
                <Link to="/ar/projects"> المشاريع الشخصية </Link>
              </div>
              <div className="link-container">
                <span> &#8250; </span>
                <Link to="/ar/contact"> الانصال </Link>
              </div>
            </div>
          </div>
          <div className={`col-lg ${scrolling && "reveal"} `}>
            <h3>جهات الاتصال</h3>
            <div>
              <span>
                <i className="fab fa-whatsapp"></i> 01149630650 
              </span>
              <span>
                <i className="fas fa-mobile"></i> 01275681100
              </span>
              <span>
                <i className="fas fa-envelope"></i> moh.salah790@gmail.com
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterAr;
