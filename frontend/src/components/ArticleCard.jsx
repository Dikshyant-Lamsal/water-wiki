import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ article }) {
  return (
    <article className="bg-white shadow-sm rounded p-4">
      <h3 className="text-lg font-semibold"><Link to={`/articles/${article._id}`} className="text-blue-600">{article.title}</Link></h3>
      <p className="text-sm text-gray-600 mt-1">By {article.author?.name || 'Unknown' } • {new Date(article.createdAt).toLocaleDateString()}</p>
      <p className="mt-3 text-sm text-gray-700">{(article.content || '').slice(0, 220)}{(article.content||'').length > 220 ? '...' : ''}</p>
      <div className="mt-3 text-xs text-gray-500">{(article.tags || []).join(', ')}</div>
    </article>
  );
}
