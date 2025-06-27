import React, { useEffect, useState } from "react";
import styles from "./NewsSection.module.css";
import imagePlaceholder from "../src/assets/Noti.jpg"
import Logo from "../HomepageSection/HomepageAssets/logo-bsu.png"
import { Link, NavLink } from 'react-router-dom';
import Footer from "../HomepageSection/Footer";

export default function NewsPage() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://rss.app/feeds/v1.1/LTrBWtIpkngakweV.json")
            .then((res) => res.json())
            .then((data) => setArticles(data.items))
            .catch((err) => console.error("Failed to load feed", err));
    }, []);

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <NavLink
                                to="/News"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                }
                            >
                                News
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Contact"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <img src={Logo} alt="logo" className={styles.logoImage} />
            </header>
            <div className={styles.newsContainer}>
                <div className={styles.newsGrid}>
                    {articles.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.newsCard}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={item.image || imagePlaceholder}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = imagePlaceholder;
                                    }}
                                    alt="Thumbnail"
                                    className={styles.newsImage}
                                />

                            </div>
                            <div className={styles.newsContent}>
                                <h3 className={styles.newsTitle}>{item.title.slice(0, 90)}...</h3>
                                <p className={styles.newsDescription}>
                                    {item.content_text?.slice(0, 120)}...
                                </p>

                                <span className={styles.newsSource}>
                                    {item.date_published.slice(0, 10)}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <a
                href="https://www.facebook.com/brightstaruniversity81"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.facebookBtn}
            >
                Visit BSU!
            </a>

            <Footer />
        </>
    );
}
