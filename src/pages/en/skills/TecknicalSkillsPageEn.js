import "./skills.scss";
import "./skills_media.scss";
import Zoom from "react-reveal/Zoom";
var TecknicalSkillsPageEn = () => {
  return (
    <section className="tech-skills-page-en">
      <Zoom cascade>
        <div className="skills">
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/html5.png").default}
                alt="html5"
              />
            </div>
            <h5> HTML5 </h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/css3.png").default}
                alt="css3"
              />
            </div>
            <h5> CSS3 </h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/js.png").default}
                alt="js"
              />
            </div>
            <h5> JavaScript </h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/pugs.png").default}
                alt="pugs"
              />
            </div>
            <h5> Pugs </h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/sass.png").default}
                alt="sass"
              />
            </div>
            <h5> Sass </h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/bootstrap.png").default}
                alt="bootstrap"
              />
            </div>
            <h5>Bootstrap</h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/react.js.png").default}
                alt="reactjs"
              />
            </div>
            <h5>React Js</h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/redux.png").default}
                alt="redux"
              />
            </div>
            <h5>Redux</h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/github.png").default}
                alt="github"
              />
            </div>
            <h5>Git & Github</h5>
          </div>
        </div>
      </Zoom>
    </section>
  );
};
export default TecknicalSkillsPageEn;
