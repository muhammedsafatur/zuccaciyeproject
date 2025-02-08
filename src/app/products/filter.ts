import { Product } from './products';

export const filterProducts = (
  products: Product[],
  filter: string,
  priceRange: number[],
  productType: string,
  brand: string,
  color: string,
  productName: string,
  sortBy: string
): Product[] => {
  let filteredProducts = products.filter(product => {
    const price = parseFloat(product.price.replace('₺', ''));
    const isPriceInRange = price >= priceRange[0] && price <= priceRange[1];
    const isTypeMatch = productType === 'Hepsi' || product.type === productType;
    const isStockMatch = filter === 'Hepsi' || product.stock === filter;
    const isBrandMatch = brand === 'Hepsi' || product.brand === brand;
    const isColorMatch = color === 'Hepsi' || product.color === color;
    const isNameMatch = productName === '' || product.name.toLowerCase().includes(productName.toLowerCase());
    return isPriceInRange && isTypeMatch && isStockMatch && isBrandMatch && isColorMatch && isNameMatch;
  });

  switch (sortBy) {
    case 'alphabetical':
      filteredProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'price':
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(a.price.replace('₺', '')) - parseFloat(b.price.replace('₺', '')));
      break;
    case 'discount':
      filteredProducts = filteredProducts.sort((a, b) => b.discount - a.discount);
      break;
    default:
      break;
  }

  return filteredProducts;
};