import { useState } from "react";

function ColorButton(props) {
  const [color, setColor] = useState("#000000");
  const [color2, setColor2] = useState("#000000");

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
  };

  const handleColorChange2 = (event) => {
    const newColor2 = event.target.value;
    setColor2(newColor2);
  };
  return (
    <div>
      <label className="color-button1-label">{color}</label>
      <input
        type="color"
        className="color-button1"
        value={props.color}
        onChange={(event) => {
          {
            handleColorChange;
          }
          props.setColor(event.target.value);
        }}
      />
      <label id="color-button2-label">{color2}</label>
      <input
        type="color"
        value={props.color2}
        className="color-button2"
        onChange={(event) => {
          {
            handleColorChange2;
          }
          props.setColor2(event.target.value);
        }}
      />
    </div>
  );
}
export default ColorButton;
