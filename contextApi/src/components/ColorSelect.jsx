import React from "react";
import { ColorConsumer } from "../contexts/color.js";

const colors = ["red", "blue", "yellow", "orange"];

const ColorSelect = () => {
  return (
    <div>
      <h2>색상을 선택하세요</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map(color => (
              <div
                key={color}
                style={{ background: color, width: "24px", height: "24px" }}
                onClick={() => {
                  actions.setColor(color);
                }}
                onContextMenu={e => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
};

export default ColorSelect;
