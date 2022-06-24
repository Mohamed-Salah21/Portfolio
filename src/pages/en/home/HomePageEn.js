import "./home.scss";
import "./home-media.scss";
import Fade from "react-reveal/Fade";
var HomePageEn = () => {
  return (
    <div className="home-page-en">
      <section className="container1">
        <Fade left cascade>
          <div className="article ">
            <header className="d-none d-sm-block">
              <h3>
                <span> Hello I'm </span>
              </h3>
              <h3>
                Mohamed Salah <span> Frontend Developer </span>
              </h3>
            </header>
            <header className="d-block d-sm-none">
              <h3>
                <span> Hello </span>
              </h3>
              <h3> I'm Mohamed Salah </h3>
              <h3>
                <span> Frontend Developer </span>
              </h3>
            </header>

            <div>
              <p>
                I work in front-end web development, and I have experience in
                dealing with programming and modern web technologies, and I have
                built a lot of personal projects that have increased my
                experience and trained a lot, I am a fast learner and always
                love to develop myself
              </p>
            </div>
            <ul>
              <a
                href="https://github.com/Mohamed-Salah21"
                target="_blank"
                rel=" noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-salah21/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://drive.google.com/file/d/1jRlgsz9Q_93IwSQHWNTHHP2Fe4PRke-K/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
            </ul>
          </div>
        </Fade>
        <Fade right>
          <div className="background-wall ">
            <div className="my_pic"> </div>
          </div>
        </Fade>
      </section>
      <section className="container2">
        <Fade top>
          <div className="section-question">
            <h2> what i can do ? </h2>
          </div>
        </Fade>
        <div className="section-container">
          <Fade left>
            <div className="texts">
              <p>
                I'm is a software engineer who implements web designs through
                coding languages like HTML, CSS, and JavaScript. If you head to
                any site, you can see the work of a front end developer in the
                navigation, layouts (including this article), and in the way
                that a site looks different on your phone (thanks to
                mobile-first or responsive design) and I'm charge of creating a
                functional user experience by managing the client-facing aspect
                of websites
              </p>
              <p>Simply i focus on a website’s visitor-facing aspects.</p>
              <p>
                if you would like to know more visit
                <a
                  href="https://en.wikipedia.org/wiki/Front-end_web_development"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wikipedia
                </a>
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="images">
              <div></div>
            </div>
          </Fade>
        </div>
      </section>
      <section className="container3">
        <div className="the_parent">
          <Fade top>
            <div className="question">
              <h2> my objective </h2>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="answers">
              <div>
                <span>
                  <i class="fas fa-check"></i>
                </span>
                <p> Optmizing the user experiment</p>
              </div>
              <div>
                <span>
                  <i class="fas fa-check"></i>
                </span>
                <p> Developing the user interface</p>
              </div>
              <div>
                <span>
                  <i class="fas fa-check"></i>
                </span>
                <p>Determining where to place anything into the website</p>
              </div>
              <div>
                <span>
                  <i class="fas fa-check"></i>
                </span>
                <p>Trying to improve the websites regardless of the browser</p>
              </div>

              <div>
                <span>
                  <i class="fas fa-check"></i>
                </span>
                <p>Building the frontend portion of websites</p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};
export default HomePageEn;
