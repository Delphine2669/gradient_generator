function ColorButton({ color, color2, setColor, setColor2 }) {
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
        value={color}
        onChange={handleColorChange}
      />
      <label id="color-button2-label">{color2}</label>
      <input
        type="color"
        value={color2}
        className="color-button2"
        onChange={handleColorChange2}
      />
    </div>
  );
}
export default ColorButton;
