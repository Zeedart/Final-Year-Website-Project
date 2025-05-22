import Header from "../HomepageSection/Header.jsx";


export default function MainSection() {


    return (
        <>
            <div>
                <Header contact={true}/>
                <h1>Contact Us</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4932.700455341424!2d19.689607530442558!3d30.4217759312908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x138549a1e42e810b%3A0xbf0838ba2404d4ea!2sBright%20Star%20University%20of%20Technology-Briga%2C%20Ajdabiyah!5e1!3m2!1sen!2sly!4v1747930004004!5m2!1sen!2sly"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </>
    );
}