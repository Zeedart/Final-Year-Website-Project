import BSULogo from './HomepageAssets/logo-bsu.png';
import { Link, NavLink } from 'react-router-dom';


export default function Header(props) {

  return (
    <section className={`header ${props.contact ? "small" : "large"}`}>
      <nav>
        <a href="index.html"><img src={BSULogo} alt="logo" /></a>
        <div className="nav-links" id="nav-links">
          <i className="fa fa-solid fa-xmark"></i>
          <ul>
            <li><button className="login-btn">LOGIN</button></li>
            <li>
              <NavLink 
              to={"/"}
              className={({ isActive }) => isActive ? 'active' : ''}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"}>
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink to={"/News"}>
                NEWS
              </NavLink>
            </li>
          </ul>
        </div>
        <i className="fa fa-solid fa-bars"></i>
      </nav>
      {props.contact ?
        <div className="text-box contact-text-box">
          <h1>Contact Us</h1>
        </div>
        :
        <div className="text-box">
          <h1>Faculty of Engineering Science</h1>
          <p className="Subtext">
            Welcome to the Faculty of Engineering Science —  that has excellence in education and innovation since 2015.
          </p>
        </div>
      }
    </section>
  );
}
