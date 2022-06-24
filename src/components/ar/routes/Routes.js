import React from "react";
import { Route } from "react-router-dom";
import HomePageAr from "../../../pages/ar/home/HomePageAr";
import TechSkillsPageAr from "../../../pages/ar/skills/TechSkillsPageAr";
import PersonalProjectsPageAR from "../../../pages/ar/projects/PersonalProjectsPageAr";
import ContactPageAR from "../../../pages/ar/contact/ContactPageAR";
const RoutesAr = () => {
  return (
    <>
      <Route exact path="/ar" component={HomePageAr} />
      <Route path="/ar/skills" component={TechSkillsPageAr} />
      <Route path="/ar/projects" component={PersonalProjectsPageAR} />
      <Route path="/ar/contact" component={ContactPageAR} />
    </>
  );
};
export default RoutesAr;
