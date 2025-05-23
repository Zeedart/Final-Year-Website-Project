import Header from "../HomepageSection/Header.jsx";
import styles from "./mainContactSection.module.css"
import Footer from "../HomepageSection/Footer.jsx"




export default function MainSection() {

    return (
        <>
            <Header contact={true}/>
            <div className={`${styles.locationContainer}`}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4932.700455341424!2d19.689607530442558!3d30.4217759312908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x138549a1e42e810b%3A0xbf0838ba2404d4ea!2sBright%20Star%20University%20of%20Technology-Briga%2C%20Ajdabiyah!5e1!3m2!1sen!2sly!4v1747930004004!5m2!1sen!2sly"
                    width={600}
                    height={800}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className={`${styles.contactInfo}`}>
                <section>
                    <i class="bi bi-telephone-fill"></i>
                    <h2>+218645205565</h2>
                    <h3>Sunday to Thursday, 10AM to 3PM</h3>
                </section>
                
                <section>
                    <i class="bi bi-geo-alt-fill"></i>
                    <h2>Bright Star University (BSU)</h2>
                    <h3>Marsa al Brega, Libya</h3>
                </section>

                <section>
                    <i class="bi bi-envelope-fill"></i>
                    <h2>info@bsu.edu.ly</h2>
                    <h3>Email us your Query!</h3>
                </section>
            </div>
            <Footer />
        </>
    );
}