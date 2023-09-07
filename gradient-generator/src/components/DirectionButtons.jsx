import { useState } from "react";

function DirectionButton(props) {
  const [gradientAngle, setGradientAngle] = useState(0);
  const handleAngleChange = (angle) => {
    setGradientAngle(angle);
  };
  return (
    <div>
      <button
        className={`top-button ${gradientAngle === 180 ? "active" : ""}`}
        type="button"
        value={gradientAngle}
        onClick={() => {
          handleAngleChange(180);
          props.setGradientAngle(180);
        }}
      >
        Top
      </button>
      <button
        className={`bottom-button ${gradientAngle === 0 ? "active" : ""}`}
        type="button"
        value={gradientAngle}
        onClick={() => {
          handleAngleChange(0);
          props.setGradientAngle(0);
        }}
      >
        Bottom
      </button>
      <button
        className={`right-button ${gradientAngle === 90 ? "active" : ""}`}
        type="button"
        value={gradientAngle}
        onClick={() => {
          handleAngleChange(90);
          props.setGradientAngle(90);
        }}
      >
        Right
      </button>
      <button
        className={`left-button ${gradientAngle === 270 ? "active" : ""}`}
        type="button"
        value={gradientAngle}
        onClick={() => {
          handleAngleChange(270);
          props.setGradientAngle(270);
        }}
      >
        Left
      </button>
    </div>
  );
}

export default DirectionButton;
