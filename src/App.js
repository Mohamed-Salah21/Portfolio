import "./App.scss";
import Nav from "./components/en/nav/Nav";
import { useEffect, useState } from "react";
import { BrowserRouter as BrowserR } from "react-router-dom";
import Footer from "./components/en/footer/Footer";
import FunctionDuringRouting from "./FunctionsDuringRouting";
import PhoneGmailEn from "./components/Participants/phone_gmail/PhoneGmail";
import RoutesEn from "./components/en/routes/Routes";
import CopyRight from "./components/Participants/copy_right/CopyRight";
function App() {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.onscroll = () => {
      const scrollChecked = window.scrollY > 150;
      scrollChecked !== scroll && setScroll(scrollChecked);
    };
  }, [scroll]);
  useEffect(() => {
    window.onclick = () => {
      toggle && setToggle(false);
    };
  });
  return (
    <BrowserR>
      <FunctionDuringRouting setToggle={setToggle} />
      <div className="App">
        <PhoneGmailEn />
        <Nav toggle={toggle} setToggle={setToggle} />
        <RoutesEn />
        <Footer />
        <CopyRight />
        <div
          className={`up-arrow ${scroll && "active"} `}
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
export default App;
