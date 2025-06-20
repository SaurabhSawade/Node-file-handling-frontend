import { useState } from 'react';
import axios from 'axios';

export default function ReadData() {
  const [data, setData] = useState('');

  const read = async () => {
    try {
      const res = await axios.get('http://localhost:4000/read', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setData(JSON.stringify(res.data, null, 2));
    } catch {
      alert('Error fetching data');
    }
  };

  return (
    <div className="p-4">
      <button onClick={read} className="bg-gray-700 text-white px-4 py-2 rounded mb-2">Read Data</button>
      <pre className="bg-gray-100 p-2">{data}</pre>
    </div>
  );
}