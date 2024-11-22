'use client'

// pages/posts/page.tsx
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface ApiResponse {
  success: boolean;
  data?: Post[];
  message?: string;
  error?: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch posts when the component mounts
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts'); // Assuming you have a Next.js API route
        const data: ApiResponse = await response.json();

        if (data.success) {
          setPosts(data.data || []);
        } else {
          setError(data.message || 'Failed to fetch posts');
        }
      } catch {
        setError('An error occurred while fetching data');
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <ul>
        {posts ? (
          posts.map((post) => (
            <li key={post.id} className="mb-4 p-4 border border-gray-300 rounded-md">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </ul>
    </div>
  );
};

export default PostsPage;
