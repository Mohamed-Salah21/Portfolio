import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function GoToTop({ setToggle, setScroll }) {
  const routing = useLocation();
  const { pathname } = routing;
  const onTop = () => {
    window.scrollTo(0, 0);
    document.body.style.scrollBehaviour = "default";
  };
  useEffect(() => {
    onTop();
    setToggle(false);
  }, [routing, setToggle]);
  useEffect(() => {
    if (pathname === "/") document.title = "Portfolio";
    else if (pathname.match("/skills-en")) document.title = "My Skills";
    else if (pathname.match("/projects-en")) document.title = "My Projects";
    else document.title = "Contact Me";
  });
  return null;
}
