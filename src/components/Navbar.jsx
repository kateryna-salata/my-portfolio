const Navbar = () => {
  return (
      <div className="navbar">
        <div className="nav-links">
          <a href="#about" className="navbar-link">
            About
          </a>
          <a href="#projects" className="navbar-link">
            Projects
          </a>
          <a href="#certification" className="navbar-link">
            Certification
          </a>
        </div>
        <div className="contacts">
          <a href="#">Li</a>
          <a href="#">Git</a>
        </div>
      </div>
  );
};

export default Navbar;
