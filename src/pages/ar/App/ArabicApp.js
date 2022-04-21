import "./ar_style.scss";
import NavAr from "../../../components/ar/nav/NavAr";
import { BrowserRouter as BrowserR } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FooterAr from "../../../components/ar/footer/FooterAr";
import FunctionDuringRoutingAr from "../../../FunctionsDuringRoutingAr";
import PhoneGmailAr from "../../../components/Participants/phone_gmail/PhoneGmail";
import RoutesAr from "../../../components/ar/routes/Routes";
import CopyRight from "../../../components/Participants/copy_right/CopyRight";
function ArabicApp() {
  const [toggleAr, setToggleAr] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      const scrollChecked = window.scrollY > 150;
      scrollChecked !== scroll && setScroll(scrollChecked);
    };
  }, [scroll]);
  useEffect(
    () =>
      (window.onclick = () => {
        toggleAr && setToggleAr(false);
      })
  );
  return (
    <BrowserR>
      <FunctionDuringRoutingAr setToggleAr={setToggleAr} />
      <div class="arabic-app">
        <PhoneGmailAr />
        <NavAr toggleAr={toggleAr} setToggleAr={setToggleAr} />
        <RoutesAr />
        <FooterAr />
        <CopyRight />
        <div
          className={`up-arrow-ar ${scroll && "active"} `}
          onClick={() => window.scrollTo(0, 0)}
        >
          <span>
            <i class="fas fa-angle-up"></i>
          </span>
        </div>
      </div>
    </BrowserR>
  );
}
export default ArabicApp;
