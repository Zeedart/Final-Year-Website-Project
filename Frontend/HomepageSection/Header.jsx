import BSULogo from './HomepageAssets/logo-bsu.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import Departmentjson from "../Departments/DepartmentsData.json"
import Login from "./Login.jsx"
import Swal from 'sweetalert2'


export default function Header(props) {

  let departmentClass = "";

  switch (props.department) {
    case 0:
      departmentClass = "smallGeology";
      break;
    case 1:
      departmentClass = "smallComputerScience"
      break;
    case 2:
      departmentClass = "smallOccupationalSafety"
      break;
    default:
      departmentClass = "small";
  }

  const [seen, setSeen] = useState(false)

  function togglePop() {
    setSeen(!seen);
  };

  const [user, setUser] = useState(null)

  function handleUserData(data) {
    if (data.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid ID or National Number',
      });
    } else {
      setUser(data);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }



  return (
    <section className={`header ${props.contact ? "small" :
      props.inDepartment ? departmentClass : "large"
      }`
    }>
      <nav>
        <a href="index.html"><img src={BSULogo} alt="logo" /></a>
        <div className="nav-links" id="nav-links">
          <i className="fa fa-solid fa-xmark"></i>
          <ul>
            {
              user === null ? (
                <>
                  <li><button onClick={togglePop} className="login-btn">LOGIN</button></li>
                  {seen ? <Login toggle={togglePop} User={handleUserData} /> : null}
                </>
              ) : (
                <li>
                  <NavLink
                    to={"/Dashboard"}
                    state={{ user: user }}
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    <button className="login-btn">Dashboard</button>
                  </NavLink>
                </li>
              )
            }
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

        props.inDepartment ?
          <div className="text-box">
            <h1>{Departmentjson[props.department].heroTxt}</h1>
            <p className="Subtext">
              {Departmentjson[props.department].subHeroTxt}
            </p>
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
