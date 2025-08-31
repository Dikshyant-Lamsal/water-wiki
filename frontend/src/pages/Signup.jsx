import React, { useState } from 'react';
import { signup } from '../services/authService';
import { setAuthToken } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Signup({ onAuth }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup({ name, email, password });
      setAuthToken(data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      onAuth(data.token, data.user);
      nav('/');
    } catch (e) {
      setErr(e.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">Create account</h2>
      {err && <div className="text-red-600 mb-2">{err}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full border p-2 rounded" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full border p-2 rounded" />
        <button className="w-full bg-green-600 text-white p-2 rounded">Sign up</button>
      </form>
    </div>
  );
}
