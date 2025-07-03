import React, { useEffect, useState } from 'react';

function FacebookNewsFeed() {
    const [posts, setPosts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const imagePlaceholder = "../src/assets/Noti.jpg"

    useEffect(() => {
        const feedUrl = "https://rss.app/feeds/v1.1/LTrBWtIpkngakweV.json"; // Your JSON feed URL
        fetch(feedUrl)
            .then((res) => res.json())
            .then((data) => setPosts(data.items))
            .catch((err) => console.error("Failed to load feed", err));
    }, []);

    function HandleShow() {
        setShowAll(prevShow => !prevShow)
    }

    return (

        <>
            <p className="News-header">Latest News</p>
            <div className="news-feed-container">
                {showAll ? posts.slice(0, 9).map((post, index) => (
                    <div
                        key={index}
                        className="feed"
                    >
                        <img
                            src={post.image || imagePlaceholder}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = imagePlaceholder;
                            }}
                            alt="Thumbnail"
                            className="w-full h-48 object-cover"
                        />

                        <div className="below-pic">
                            <h2 className="feed-title">{post.title.slice(0, 127)}...</h2>
                            <p className="feed-description">
                                {post.content_text.slice(0, 150)}...
                            </p>
                            <p className="feed-date">{post.date_published.slice(0, 10)}</p>
                            <a
                                href={post.url}
                                target="_blank"
                                className="link-tag-btn"
                            ><button className="read-more-btn">Read More </button>
                            </a>
                        </div>
                    </div>
                )) :
                    posts.slice(0, 3).map((post, index) => (
                        <div
                            key={index}
                            className="feed"
                        >
                            <img
                                src={post.image || "https://via.placeholder.com/400x225"} // Use the post's thumbnail or a placeholder
                                alt="Thumbnail"
                                className="w-full h-48 object-cover"
                            />
                            <div className="below-pic">
                                <h2 className="feed-title">{post.title.slice(0, 90)}...</h2>
                                <p className="feed-description">
                                    {post.content_text.slice(0, 150)}...
                                </p>
                                <p className="feed-date">{post.date_published.slice(0, 10)}</p>
                                <a
                                    href={post.url}
                                    target="_blank"
                                    className="link-tag-btn"
                                ><button className="read-more-btn">Read More </button>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="Show-btn" onClick={HandleShow}>{showAll ? "Hide" : "Show All"}</button>
        </>
    );
}

export default FacebookNewsFeed;
