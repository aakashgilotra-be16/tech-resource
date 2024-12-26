// app/community/page.tsx
'use client';  // Add this at the top to make the component client-side

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter from 'next/navigation' in app directory

interface Post {
  username: string;
  content: string;
}

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Redirect if not authenticated
    } else {
      fetchPosts(); // Fetch posts if authenticated
    }
  }, [router]);

  const fetchPosts = async () => {
    const res = await fetch('/api/community/posts');
    const data = await res.json();
    setPosts(data);
  };

  const handlePostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const res = await fetch('/api/community/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content: newPost }),
    });

    if (res.ok) {
      setNewPost('');
      fetchPosts(); // Refresh posts after submission
    } else {
      setError('Failed to submit post');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">Community</h1>
        
        <form onSubmit={handlePostSubmit} className="mb-6">
          <textarea
            className="w-full p-3 bg-gray-800 rounded text-white"
            rows={4}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share something with the community..."
            required
          />
          <button
            type="submit"
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full"
          >
            Submit Post
          </button>
        </form>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg">{post.content}</p>
              <p className="text-sm text-gray-500">Posted by {post.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
