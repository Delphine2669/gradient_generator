import logo from "../assets/logo.svg";
function Header() {
  return (
    <div className="gradient-header">
      <img src={logo} alt="logo gradient generator" className="logo" />
      <h1>Gradient Generator</h1>
    </div>
  );
}
export default Header;
