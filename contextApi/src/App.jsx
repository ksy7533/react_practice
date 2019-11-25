import React from "react";
import ColorBox from "./components/ColorBox";
import ColorSelect from "./components/ColorSelect";
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorSelect />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
