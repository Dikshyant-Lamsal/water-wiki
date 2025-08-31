import React, { useState } from 'react';
import { createArticle } from '../services/articleService';
import { useNavigate } from 'react-router-dom';

export default function NewArticle({ user }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('other');
  const [msg, setMsg] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const payload = { title, content, tags: tags.split(',').map(t=>t.trim()).filter(Boolean), category };
      const { data } = await createArticle(payload);
      setMsg('Created!');
      nav(`/articles/${data._id}`);
    } catch (err) {
      setMsg(err.response?.data?.message || 'Failed');
    }
  };

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">New Article</h2>
      {msg && <p className="text-sm text-red-600">{msg}</p>}
      <input required value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full border p-2 rounded mb-3" />
      <select value={category} onChange={e=>setCategory(e.target.value)} className="border p-2 rounded mb-3">
        <option value="agriculture">Agriculture</option>
        <option value="household">Household</option>
        <option value="industry">Industry</option>
        <option value="urban">Urban</option>
        <option value="other">Other</option>
      </select>
      <textarea required value={content} onChange={e=>setContent(e.target.value)} placeholder="Content" rows="10" className="w-full border p-2 rounded mb-3"></textarea>
      <input value={tags} onChange={e=>setTags(e.target.value)} placeholder="Tags (comma separated)" className="w-full border p-2 rounded mb-3" />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Publish</button>
    </form>
  );
}
