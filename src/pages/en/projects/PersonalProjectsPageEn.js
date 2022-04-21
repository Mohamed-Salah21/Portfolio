import "./projects.scss";
import Zoom from "react-reveal/Zoom";
import Projects from "../../../components/Participants/projects/Projects";
var PersonalProjectsPageEn = () => {
  return (
    <div className="projects-page-en">
        <Zoom >
      <div className="projects-container">
          <Projects />
      </div>
        </Zoom>
    </div>
  );
};
export default PersonalProjectsPageEn;
