import React from "react";
import { Route } from "react-router-dom";
import HomePageAr from "../../../pages/ar/home/HomePageAr";
import TecknicalSkillsPageAr from "../../../pages/ar/skills/TecknicalSkillsPageAr";
import PersonalProjectsPageAR from "../../../pages/ar/projects/PersonalProjectsPageAr";
import ContactPageAR from "../../../pages/ar/contact/ContactPageAR";
const RoutesAr = () => {
  return (
    <>
      <Route exact path="/ar" component={HomePageAr} />
      <Route path="/ar/skills" component={TecknicalSkillsPageAr} />
      <Route path="/ar/projects" component={PersonalProjectsPageAR} />
      <Route path="/ar/contact" component={ContactPageAR} />
    </>
  );
};
export default RoutesAr;
