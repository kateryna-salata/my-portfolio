import { Link } from "react-router-dom";
const Navbar = () => {
  const imgSrc = "#";
  return (
    <div className="navbar">
      <div>
        <Link className="logo-box" to="/">
          <img className="navbar-logo" src={imgSrc} alt="logo" />
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Homepage
        </Link>
        <Link to="/projects" className="navbar-link">
          Projects
        </Link>
        <Link to="/contacts" className="navbar-link">
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
