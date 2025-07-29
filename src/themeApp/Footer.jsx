
import ThemeContext from "./ThemeContext";
import { useContext } from "react";
function Footer() {
  const { theme } = useContext(ThemeContext);
  return <div>{theme}</div>;
}

export default Footer;
