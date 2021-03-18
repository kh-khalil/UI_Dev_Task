import React from "react";
import { useMediaQuery } from "react-responsive";
import DesktopScreen from "./screens/DesktopScreen.js";
import MobileScreen from "./screens/MobileScreen.js";

function App() {
  const isMobile = useMediaQuery({ deviceWidth: 414 });
  const isDesktop = useMediaQuery({ deviceWidth: 1440 });
  return (
    <div className="App">
      {isMobile ? (
        <MobileScreen />
      ) : isDesktop ? (
        <DesktopScreen />
      ) : (
        <h1 className="text-center diff_screen_size">
          {" "}
          Please switch to Mobile Screen with width = 414px or Desktop Screen
          with width = 1440px{" "}
        </h1>
      )}
    </div>
  );
}

export default App;
