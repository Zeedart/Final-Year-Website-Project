import BSULogo from './HomepageAssets/logo-bsu.png';


export default function Header() {
  const hideMenu = () => {
    // add logic to hide menu
  };

  const showMenu = () => {
    // add logic to show menu
  };

  return (
    <section className="header">
      <nav>
        <a href="index.html"><img src={BSULogo} alt="logo" /></a>
        <div className="nav-links" id="nav-links">
          <i className="fa fa-solid fa-xmark" onClick={hideMenu}></i>
          <ul>
            <li><a href="./index.html">HOME</a></li>
            <li><a href="./about.html">ABOUT</a></li>
            <li><a href="./course.html">COURSE</a></li>
            <li><a href="./blog.html">BLOG</a></li>
            <li><a href="./contact.html">CONTACT</a></li>
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
