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
        <h1>Where Education Lies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          aliquam cupiditate sed fugit, fuga facilis? <br />
          ipsum dolor sit amet consectetur, adipisicing elit. Sit aperiam ea
          quae, doloremque dolorum eaque!
        </p>
      </div>
    </section>
  );
}
