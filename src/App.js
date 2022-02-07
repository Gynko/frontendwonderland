import Routing from "./Routing/Routing.jsx";

import "./GeneralStyles/GlobalCssVariables.styles.css";
import "./GeneralStyles/GlobalStyles.styles.css";
import "./assets/fonts/GlobalFonts.styles.css";

import useVH from "react-vh";

function App() {
  useVH();
  return <Routing />;
}

export default App;
