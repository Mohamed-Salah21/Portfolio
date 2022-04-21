import "./contact-ar.scss";
import "./contact-media_ar.scss";
import Fade from "react-reveal/Reveal";
var ContactPageAR = () => {
  return (
    <div className="contact-page-ar">
      <div className="elements-container row ">
        <Fade cascade right>
          <div className="col-md">
            <div>
              <i class="fas fa-map-marker-alt skill-icon"></i>
              <div>
                <h4>عنواني</h4>
                <span>القاهرة, مصر</span>
              </div>
            </div>
            <div>
              <i class="fas fa-envelope skill-icon"></i>
              <div>
                <h4>راسلني</h4>
                <span>moh.salah790@gmail.com</span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade cascade left>
          <div className="col-md">
            <div>
              <i class="fas fa-share-alt skill-icon"></i>
              <div>
                <h4>روابط اجتماعية</h4>
                <a
                  href="https://www.linkedin.com/in/mohamed-salah-62861b203/"
                  rel=" noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Mohamed-Salah21"
                  rel=" noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github-square"></i>
                </a>
              </div>
            </div>
            <div>
              <i class="fas fa-phone skill-icon"></i>
              <div>
                <h4>اتصل بي</h4>
                <span>01275681100</span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default ContactPageAR;
