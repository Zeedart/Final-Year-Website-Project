import React, { useEffect, useState } from 'react';

function FacebookNewsFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const feedUrl = "https://rss.app/feeds/v1.1/HuaNOdhosEH35AbD.json"; // Your JSON feed URL
        fetch(feedUrl)
            .then((res) => res.json())
            .then((data) => setPosts(data.items))
            .catch((err) => console.error("Failed to load feed", err));
    }, []);

    return (
        <>
        <p className="News-header">Latest News</p>
        <div className="news-feed-container">
            {posts.slice(0, 3).map((post, index) => (
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
            ))}
        </div>
    </>
    );
}

export default FacebookNewsFeed;
