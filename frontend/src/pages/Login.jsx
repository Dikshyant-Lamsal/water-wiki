import React, { useState } from 'react';
import { login } from '../services/authService';
import { setAuthToken } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

export default function Login({ onAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      setAuthToken(data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      onAuth(data.token, data.user);
      nav('/');
    } catch (e) {
      setErr(e.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">Login</h2>
      {err && <div className="text-red-600 mb-2">{err}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full border p-2 rounded" />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
      <p className="mt-3 text-sm">No account? <Link to="/signup" className="text-blue-600">Sign up</Link></p>
    </div>
  );
}
