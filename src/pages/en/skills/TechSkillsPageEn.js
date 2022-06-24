import "./skills.scss";
import "./skills_media.scss";
import Zoom from "react-reveal/Zoom";
var TechSkillsPageEn = () => {
  return (
    <section className="tech-skills-page-en">
      <Zoom cascade>
        <div className="skills">
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/HTML.png").default}
                alt="html5"
              />
            </div>
            <h5> HTML5 </h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/CSS.png").default}
                alt="css3"
              />
            </div>
            <h5> CSS3 </h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/JavaScript.png").default}
                alt="js"
              />
            </div>
            <h5> JavaScript </h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/Sass.png").default}
                alt="sass"
              />
            </div>
            <h5> Sass </h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/Bootstrap.png").default}
                alt="bootstrap"
              />
            </div>
            <h5>Bootstrap</h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/Tailwind_CSS.png").default}
                alt="bootstrap"
              />
            </div>
            <h5>Tailwind CSS</h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/React.png").default}
                alt="reactjs"
              />
            </div>
            <h5>React JS</h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/Redux.png").default}
                alt="redux"
              />
            </div>
            <h5>Redux</h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/Enzyme.png").default}
                alt="redux"
              />
            </div>
            <h5>Enzyme</h5>
          </div>
          <div>
            <div className="img">
              <img
                src={require("../../../photos/skills/Github.png").default}
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
export default TechSkillsPageEn;
