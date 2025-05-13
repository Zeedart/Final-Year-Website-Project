import BSUlogo from "./HomepageAssets/BSULogo.png"

export default function Footer() {

    return (
        <>
            <div className="footer">
                <footer className="footer-container">
                    <section className="footer-logo-section">
                        <img src={BSUlogo} alt="logo" />
                        <span>Bright Star University</span>
                    </section>

                    <section className="footer-links">
                        <h1>Links</h1>
                        <ul>
                            <li>News</li>
                            <li>Computer Engineering</li>
                            <li>Petrolum Geology Engineering</li>
                            <li>Occupational Safety and Health Engineering</li>
                        </ul>
                    </section>

                    <section className="footer-location">
                        <h1>Location</h1>
                        <p>Bright Star University (BSU), Marsa al Brega,
                            30.421516, 19.686491, Libya </p>
                        <button href="https://maps.app.goo.gl/Knec6WjzExKQ3V388">Google Maps</button>
                    </section>

                    <section className="footer-contact">
                        <h1>Contact</h1>
                        <div>
                            <i class="bi bi-facebook" href="https://www.facebook.com/brightstaruniversity81"></i>
                            <i class="bi bi-instagram" href="https://www.instagram.com/bsu_ly/"></i>
                            <i class="bi bi-twitter-x" href="https://x.com/BrightStarUni81"></i>
                            <i class="bi bi-youtube" href="https://www.youtube.com/@brightstaruniversity-6940/videos"></i>
                            <i class="bi bi-geo-alt" href="https://maps.app.goo.gl/Knec6WjzExKQ3V388"></i>
                        </div>
                        <span>+218645205565</span>
                    </section>
                </footer>
                <hr></hr>

                <span>Bright Star University, All Rights Reserved ©</span>
            </div>
        </>
    )
}