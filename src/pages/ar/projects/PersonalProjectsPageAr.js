import Zoom from "react-reveal/Zoom";
import Projects from "../../../components/Participants/projects/Projects";
import "./projects-ar.scss";
var PersonalProjectsPageAR = () => {
  return (
    <div className="projects-page-ar">
      <Zoom cascade>
        <div className="projects-container">
          <Projects />
        </div>
      </Zoom>
    </div>
  );
};
export default PersonalProjectsPageAR;
