import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleView from './pages/ArticleView';
import NewArticle from './pages/NewArticle';
import Forum from './pages/Forum';
import PostView from './pages/PostView';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { setAuthToken } from './services/api';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || 'null'));

  useEffect(() => {
    setAuthToken(token);
    if (!token) {
      localStorage.removeItem('user');
      setUser(null);
    }
  }, [token]);

  const handleAuth = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <div>
      <Navbar user={user} onLogout={logout} />
      <main className="container py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/new" element={token ? <NewArticle user={user} /> : <Navigate to="/login" />} />
          <Route path="/articles/:id" element={<ArticleView />} />
          <Route path="/forum" element={<Forum user={user} />} />
          <Route path="/forum/:id" element={<PostView user={user} />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/login" element={<Login onAuth={handleAuth} />} />
          <Route path="/signup" element={<Signup onAuth={handleAuth} />} />
          <Route path="/profile" element={token ? <Profile user={user} /> : <Navigate to="/login" />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
