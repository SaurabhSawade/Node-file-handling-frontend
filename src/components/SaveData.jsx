import { useState } from 'react';
import axios from 'axios';

export default function SaveData() {
  const [text, setText] = useState('');

  const save = async () => {
    try {
      await axios.post('https://node-file-handling-backend.onrender.com/save', { text }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Saved!');
    } catch (err) {
      alert('Unauthorized or error');
    }
  };

  return (
    <div className="p-4">
      <textarea className="border p-2 w-full mb-2" onChange={e => setText(e.target.value)} />
      <button onClick={save} className="bg-purple-600 text-white px-4 py-2 rounded">Save Data</button>
    </div>
  );
}