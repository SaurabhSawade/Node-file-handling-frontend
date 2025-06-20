import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const register = async () => {
    try {
      const res = await axios.post('https://node-file-handling-backend.onrender.com/register', form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded shadow">
      <h2 className="text-xl mb-2 font-bold">Register</h2>
      <input name="username" onChange={handleChange} placeholder="Username" className="border p-2 w-full mb-2" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="border p-2 w-full mb-2" />
      <button onClick={register} className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    </div>
  );
}