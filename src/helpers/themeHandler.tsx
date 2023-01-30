import { useLocation } from "react-router-dom";

export const HandleTheme = () => {
  let { pathname } = useLocation();
  const paths = ["/projects"];
  let theme = "";

  if (paths.includes(pathname)) {
    theme = "dark";
  } else if (pathname === "/" || pathname === "/home") {
    theme = "transparent";
  } else {
    theme = "light";
  }

  return theme;
};
