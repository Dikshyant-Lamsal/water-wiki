import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <span>💧</span> Water Wiki
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/articles" className="hover:underline">Articles</Link>
          <Link to="/forum" className="hover:underline">Forum</Link>
          <Link to="/calculator" className="hover:underline">Calculator</Link>

          {user ? (
            <>
              <Link to="/profile" className="px-3 py-1 rounded bg-blue-500/30">{user.name}</Link>
              <button onClick={onLogout} className="px-3 py-1 rounded bg-red-500/40">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 rounded bg-blue-500/30">Login</Link>
              <Link to="/signup" className="px-3 py-1 rounded bg-white text-blue-600">Sign up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
