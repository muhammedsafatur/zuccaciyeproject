import React from 'react';
import ProductCard from '@/components/ProductCard';

const ProductsPage = () => {
  // Örnek ürün verileri
  const products = [
    { id: 1, name: 'Beyaz Çaydanlık', price: '₺150' },
    { id: 2, name: 'Mavi Tabak Seti', price: '₺120' },
    { id: 3, name: 'Cam Şişe', price: '₺80' },
  ];

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">Ürünlerimiz</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
