"use client";

import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`İletişim Mesajı - ${name}`);
    const body = encodeURIComponent(`Ad: ${name}\n\n\nMesaj:\n${message}`);
    window.location.href = `mailto:msafatur@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">İletişim</h1>
      <p className="mb-4">
        Bize ulaşmak için aşağıdaki formu kullanabilirsiniz.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">İsim</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full border p-2 rounded-md"
            placeholder="Adınızı girin"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="İsim"
          />
        </div>
    
        <div>
          <label htmlFor="message" className="block font-medium">Mesaj</label>
          <textarea 
            id="message" 
            name="message" 
            className="w-full border p-2 rounded-md"
            placeholder="Mesajınızı yazın"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Mesaj"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Gönder
        </button>
      </form>
    </section>
  );
};

export default ContactPage;