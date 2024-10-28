// src/components/WordPressPosts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WordPressPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace with your local WordPress site URL
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://http://my-nextjs-theme.local/wp-json/wp/v2/posts');
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>WordPress Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordPressPosts;
