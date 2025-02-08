import React from 'react';
import Hero from '@/components/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* Tanıtım Bölümü */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Kalite ve Güven ile Tanışın</h2>
        <p className="mb-6">
          Züccaciye dükkanımız, evinize şıklık katacak, modern ve kaliteli ürünleri ile hizmetinizde.
          Müşterilerimizin memnuniyeti en büyük önceliğimizdir.
        </p>
        <a
          href="/products"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Ürünlerimizi Görüntüle
        </a>
      </section>

      {/* Müşteri Yorumları Bölümü */}
      <section className="bg-gray-100 p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Müşteri Yorumları</h2>
        <p className="mb-6">
          Müşterilerimizden gelen olumlu geri bildirimler, işimizi ne kadar ciddiye aldığımızın en büyük göstergesidir.
        </p>
        {/* İleride buraya slider veya kart şeklinde yorumlar ekleyebilirsin */}
      </section>
    </>
  );
};

export default HomePage;
