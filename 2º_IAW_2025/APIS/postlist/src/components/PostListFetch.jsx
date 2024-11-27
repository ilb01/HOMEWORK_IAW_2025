import { useState, useEffect } from "react";

export default function PostListFetch() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Usando fetch para obtener datos
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching posts");
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    if (loading) return <p>Loading posts...</p>;

    return (
        <div>
            <h2>Post List (Fetch)</h2>
            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

