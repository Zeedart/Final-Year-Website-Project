import BSULogo from './HomepageAssets/logo-bsu.png';
import { Link } from 'react-router-dom';


export default function Header(props) {
  const hideMenu = () => {
    // add logic to hide menu
  };

  const showMenu = () => {
    // add logic to show menu
  };

  return (
    <section className={`header ${props.contact ? "small" : "large"}`}>
      <nav>
        <a href="index.html"><img src={BSULogo} alt="logo" /></a>
        <div className="nav-links" id="nav-links">
          <i className="fa fa-solid fa-xmark" onClick={hideMenu}></i>
          <ul>
            <li><button className="login-btn">LOGIN</button></li>
            <li><a href="./index.html">DEPARTMENTS</a></li>
            <li>
              <Link to={"/Contact"}>
                <a href="">CONTACT</a>
              </Link>
            </li>
            <li><a href="./course.html">NEWS</a></li>
          </ul>
        </div>
        <i className="fa fa-solid fa-bars" onClick={showMenu}></i>
      </nav>
      <div className="text-box">
        <h1>Faculty of Engineering Science</h1>
        <p className="Subtext">
          Welcome to the Faculty of Engineering Science —  that has excellence in education and innovation since 2015.
        </p>
      </div>
    </section>
  );
}
