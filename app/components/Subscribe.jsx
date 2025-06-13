'use client';

import { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify you at: ${email}`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 ">
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="p-2 border rounded w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Notify Me
      </button>
    </form>
  );
}
