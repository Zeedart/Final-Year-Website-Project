import BSUlogo from "./HomepageAssets/BSULogo.png"
import { Link } from "react-router-dom"

export default function Footer() {

    return (
        <>
            <div className="footer">
                <footer className="footer-container">
                    <section className="footer-logo-section">
                        <img src={BSUlogo} alt="logo" />
                        <p className="footer-logo-section-txt">Bright Star University</p>
                    </section>

                    <section className="footer-links">
                        <h1>Links</h1>
                        <ul>
                            <li>News</li>
                            <Link to={"/ComputerEngineering"}>
                                <li>Computer Engineering</li>
                            </Link>
                            <Link to={"/Geology"}><li>Petrolum Geology Engineering</li></Link>
                            <Link to={"/Safety"}><li>Occupational Safety and Health Engineering</li></Link>

                        </ul>
                    </section>

                    <section className="footer-location">
                        <h1>Location</h1>
                        <p>Bright Star University (BSU), Marsa al Brega,
                            30.421516, 19.686491, Libya </p>
                        <a href="https://maps.app.goo.gl/Knec6WjzExKQ3V388" target="_blank"><button>Google Maps</button></a>
                    </section>

                    <section className="footer-contact">
                        <h1>Contact</h1>
                        <div>
                            <a href="https://www.facebook.com/brightstaruniversity81" target="_blank"><i class="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/bsu_ly/" target="_blank"><i class="bi bi-instagram"></i></a>
                            <a href="https://x.com/BrightStarUni81" target="_blank"><i class="bi bi-twitter-x"></i></a>
                            <a href="https://www.youtube.com/@brightstaruniversity-6940/videos" target="_blank"><i class="bi bi-youtube"></i></a>
                            <a href="https://maps.app.goo.gl/Knec6WjzExKQ3V388" target="_blank"><i class="bi bi-geo-alt"></i></a>
                        </div>
                        <p>+218645205565</p>
                    </section>
                </footer>
                <hr></hr>

                <p>Bright Star University, All Rights Reserved ©</p>
            </div>
        </>
    )
}