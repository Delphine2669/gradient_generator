import { useState } from "react";
import ColorButton from "./ColorButton";
import DirectionButtons from "./DirectionButtons";
import "./GenerateButton.css";

function GenerateButton() {
  const [gradient, setGradient] = useState("");
  const [color, setColor] = useState("#000000");
  const [color2, setColor2] = useState("#0000000");
  const [gradientAngle, setGradientAngle] = useState(0);

  const generateGradient = () => {
    const newGradient = `linear-gradient(${gradientAngle}deg, ${color}, ${color2})`;
    setGradient(newGradient);
  };
  return (
    <div className="gradient-app-block">
      <body style={{ background: gradient }}>
        <div className="direction-div">
          <DirectionButtons setGradientAngle={setGradientAngle} />
        </div>
        <div className="color-div">
          <ColorButton setColor={setColor} setColor2={setColor2} />
        </div>
        <div className="generate-div">
          <button
            className="generate-button"
            type="submit"
            onClick={generateGradient}
          >
            Generate
          </button>
        </div>
        <div className="infos-div">
          <p className="infos-p sd">Selected Direction:</p>
          <p className="infos-user ga"> {gradientAngle}</p>
          <p className="infos-p sc">Selected Color 1: </p>
          <p className="infos-user c1">{color}</p>
          <p className="infos-p sc2">Selected Color 2: </p>
          <p className="infos-user c2">{color2}</p>
          <p className="infos-p r">
            linear-gradient({gradientAngle}deg,{color},{color2})
          </p>
        </div>
      </body>
    </div>
  );
}

export default GenerateButton;
