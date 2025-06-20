import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:4000/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded shadow mt-4">
      <h2 className="text-xl mb-2 font-bold">Login</h2>
      <input name="username" onChange={e => setForm({ ...form, username: e.target.value })} className="border p-2 w-full mb-2" placeholder="Username" />
      <input name="password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} className="border p-2 w-full mb-2" placeholder="Password" />
      <button onClick={login} className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}