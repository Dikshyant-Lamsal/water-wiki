import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../services/articleService';
import ArticleCard from '../components/ArticleCard';
import { Link } from 'react-router-dom';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [q, setQ] = useState('');

  const load = async () => {
    try {
      const { data } = await fetchArticles({ q });
      setArticles(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <div className="flex gap-2 items-center mb-4">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search articles..." className="border p-2 rounded flex-1" />
        <button onClick={load} className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
        <Link to="/articles/new" className="ml-2 px-4 py-2 bg-green-600 text-white rounded">New Article</Link>
      </div>

      <div className="grid gap-4">
        {articles.map(a => <ArticleCard key={a._id} article={a} />)}
        {articles.length === 0 && <p className="text-center text-gray-500">No articles found.</p>}
      </div>
    </div>
  );
}
