import { useState } from "react";
import ColorButton from "./ColorButton";
import DirectionButtons from "./DirectionButtons";

function GenerateButton() {
  const [gradient, setGradient] = useState("");
  const [color, setColor] = useState("#000000");
  const [color2, setColor2] = useState("#0000000");
  const [gradientAngle, setGradientAngle] = useState(0);
  // const [selectedDirection, setSelectedDirection] = useState("top");

  // const handleColor1Change = (event) => {
  //   setColor(event.target.value);
  // };
  // const handleColor2Change = (event) => {
  //   setColor2(event.target.value);
  // };
  const generateGradient = () => {
    const newGradient = `linear-gradient(${gradientAngle}deg, ${color}, ${color2})`;
    setGradient(newGradient);
  };
  return (
    <>
      <body style={{ background: gradient }}>
        <div>
          <DirectionButtons setGradientAngle={setGradientAngle} />
        </div>
        <div>
          <ColorButton setColor={setColor} setColor2={setColor2} />
        </div>
        <div>
          <button
            className="generate-button"
            type="submit"
            onClick={generateGradient}
          >
            Generate
          </button>
        </div>
        <div>
          <p>Selected Direction: {gradientAngle}</p>
          <p>Selected Color 1: {color}</p>
          <p>Selected Color 2: {color2}</p>
          <p>
            linear-gradient({gradientAngle}deg,{color},{color2})
          </p>
        </div>
      </body>
    </>
  );
}

export default GenerateButton;
