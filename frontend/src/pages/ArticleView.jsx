import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticle } from '../services/articleService';

export default function ArticleView() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticle(id).then(res => setArticle(res.data)).catch(err => console.error(err));
  }, [id]);

  if (!article) return <div>Loading...</div>;
  return (
    <article className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold">{article.title}</h1>
      <p className="text-sm text-gray-600 mt-1">By {article.author?.name} • {new Date(article.createdAt).toLocaleDateString()}</p>
      <div className="mt-4 whitespace-pre-wrap">{article.content}</div>
      {article.tags?.length ? <div className="mt-4 text-xs text-gray-500">Tags: {article.tags.join(', ')}</div> : null}
    </article>
  );
}
