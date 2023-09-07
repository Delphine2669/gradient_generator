// import { useState } from "react";

// function DirectionButton() {
//     const [top,setTop] = useState('')
//     //top 180, bottom 0, right 90 , left 270

//   return (
//     <div>
//       <button className="top-button" type="button" onClick={setTop{}}>
//         Top
//       </button>
//     </div>
//   );
// }

// export default DirectionButton;
import { useState } from "react";

function DirectionButton() {
  const [gradientAngle, setGradientAngle] = useState(0);
  const handleAngleChange = (angle) => {
    setGradientAngle(angle);
  };
  return (
    <div>
      <button
        className={`top-button ${gradientAngle === 180 ? "active" : ""}`}
        type="button"
        onClick={() => handleAngleChange(180)}
      >
        Top
      </button>
      <button
        className={`top-button ${gradientAngle === 0 ? "active" : ""}`}
        type="button"
        onClick={() => handleAngleChange(0)}
      >
        Bottom
      </button>
      <button
        className={`top-button ${gradientAngle === 90 ? "active" : ""}`}
        type="button"
        onClick={() => handleAngleChange(90)}
      >
        Right
      </button>
      <button
        className={`top-button ${gradientAngle === 270 ? "active" : ""}`}
        type="button"
        onClick={() => handleAngleChange(270)}
      >
        Left
      </button>
    </div>
  );
}

export default DirectionButton;
