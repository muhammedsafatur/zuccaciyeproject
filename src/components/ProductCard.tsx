interface ProductCardProps {
    name: string;
    price: string;
  }
  
  const ProductCard = ({ name, price }: ProductCardProps) => {
    return (
      <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-lg text-gray-600">{price}</p>
        <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg">Sepete Ekle</button>
      </div>
    );
  };
  
  export default ProductCard;
  