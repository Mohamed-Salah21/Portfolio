import React from "react";
import { Route } from "react-router-dom";
import HHomePageEn from "../../../pages/en/home/HomePageEn";
import TecknicalSkillsPageEn from "../../../pages/en/skills/TecknicalSkillsPageEn";
import PersonalProjectsPageEn from "../../../pages/en/projects/PersonalProjectsPageEn";
import ContactPageEn from "../../../pages/en/contact/ContactPageEn";
import ArabicApp from "../../../pages/ar/App/ArabicApp";
const RoutesEn = () => {
  return (
    <>
      <Route exact path="/" component={HHomePageEn} />
      <Route path="/skills-en" component={TecknicalSkillsPageEn} />
      <Route path="/projects-en" component={PersonalProjectsPageEn} />
      <Route path="/contact-en" component={ContactPageEn} />
      <Route path="/ar" component={ArabicApp} />
    </>
  );
};
export default RoutesEn;
