import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../services/forumService';
import { fetchComments, createComment } from '../services/commentService';

export default function PostView({ user }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const load = async () => {
    const p = await fetchPost(id);
    setPost(p.data);
    const c = await fetchComments(id);
    setComments(c.data);
  };

  useEffect(()=>{ load(); }, [id]);

  const addComment = async () => {
    try {
      await createComment(id, { content: text });
      setText('');
      load();
    } catch (e) { alert('Login to comment'); }
  };

  if (!post) return <div>Loading...</div>;
  return (
    <div>
      <div className="bg-white p-6 rounded shadow mb-4">
        <h2 className="text-2xl font-semibold">{post.question}</h2>
        <p className="text-sm text-gray-600 mt-1">By {post.author?.name}</p>
        <p className="mt-3">{post.description}</p>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="font-semibold">Comments</h3>
        <div className="space-y-2 mt-2">
          {comments.map(c => (
            <div key={c._id} className="border p-2 rounded">
              <div className="text-sm text-gray-700"><strong>{c.author?.name}</strong> • {new Date(c.createdAt).toLocaleString()}</div>
              <div className="mt-1">{c.content}</div>
            </div>
          ))}
        </div>

        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Write a comment..." className="w-full border p-2 rounded my-2"></textarea>
        <button onClick={addComment} className="px-4 py-2 bg-blue-600 text-white rounded">Comment</button>
      </div>
    </div>
  );
}
