// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-box">
            {/* <a href="#" className="footer-link">
              GitHub Repo
            </a>{" "}
            <Link to="/" className="footer-link">
              HomePage
            </Link>
            <Link to="/Projects" className="footer-link">
              Projects
            </Link> */}
            <p>Contact</p>
            <p>🖃 katerynasalata8@gmail.com</p>
            <a href="#">Linkedin</a>
        </div>
        <span className="copyright">Copyright © 2025 Kateryna Salata</span>
      </footer>
    </>
  );
};

export default Footer;