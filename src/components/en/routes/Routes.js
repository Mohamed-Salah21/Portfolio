import React from "react";
import { Route } from "react-router-dom";
import HHomePageEn from "../../../pages/en/home/HomePageEn";
import TechSkillsPageEn from "../../../pages/en/skills/TechSkillsPageEn";
import PersonalProjectsPageEn from "../../../pages/en/projects/PersonalProjectsPageEn";
import ContactPageEn from "../../../pages/en/contact/ContactPageEn";
import ArabicApp from "../../../pages/ar/App/ArabicApp";
const RoutesEn = () => {
  return (
    <>
      <Route exact path="/" component={HHomePageEn} />
      <Route path="/skills-en" component={TechSkillsPageEn} />
      <Route path="/projects-en" component={PersonalProjectsPageEn} />
      <Route path="/contact-en" component={ContactPageEn} />
      <Route path="/ar" component={ArabicApp} />
    </>
  );
};
export default RoutesEn;
