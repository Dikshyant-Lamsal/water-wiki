import React, { useEffect, useState } from 'react';
import { fetchPosts, createPost, upvotePost } from '../services/forumService';
import { Link } from 'react-router-dom';

export default function Forum({ user }) {
  const [posts, setPosts] = useState([]);
  const [question, setQuestion] = useState('');
  const [desc, setDesc] = useState('');

  const load = async () => {
    const { data } = await fetchPosts();
    setPosts(data);
  };

  useEffect(()=>{ load(); }, []);

  const ask = async () => {
    try {
      await createPost({ question, description: desc });
      setQuestion(''); setDesc('');
      load();
    } catch (e) { alert('Login to ask'); }
  };

  const upv = async (id) => { await upvotePost(id); load(); };

  return (
    <div>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h3 className="font-semibold">Ask the community</h3>
        <input value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Question" className="w-full border p-2 rounded my-2" />
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Details (optional)" className="w-full border p-2 rounded my-2"></textarea>
        <div className="flex gap-2">
          <button onClick={ask} className="px-4 py-2 bg-blue-600 text-white rounded">Post</button>
          <Link to="/articles/new" className="px-4 py-2 bg-green-600 text-white rounded">Share Article</Link>
        </div>
      </div>

      <div className="space-y-3">
        {posts.map(p => (
          <div key={p._id} className="bg-white p-4 rounded shadow flex justify-between items-start">
            <div>
              <Link to={`/forum/${p._id}`} className="font-semibold text-blue-600">{p.question}</Link>
              <p className="text-sm text-gray-600">By {p.author?.name}</p>
            </div>
            <div className="text-right">
              <button onClick={()=>upv(p._id)} className="px-2 py-1 text-sm bg-yellow-100 rounded">▲ {p.upvotes}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
