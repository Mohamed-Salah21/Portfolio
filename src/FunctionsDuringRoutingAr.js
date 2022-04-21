import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function GoToTop({ setToggleAr }) {
  const routing = useLocation();
  const { pathname } = routing;
  const onTop = () => {
    window.scrollTo(0, 0);
    document.body.style.scrollBehaviour = "default";
  };
  useEffect(() => {
    onTop();
    setToggleAr(false);
  }, [routing, setToggleAr]);
  useEffect(() => {
    if (pathname === "/ar") document.title = "Portfolio";
    else if (pathname.match("/ar/skills")) document.title = "My Skills";
    else if (pathname.match("/ar/projects")) document.title = "My Projects";
    else document.title = "Contact Me";
  });
  return null;
}
