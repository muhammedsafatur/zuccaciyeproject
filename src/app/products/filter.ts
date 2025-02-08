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
  let filteredProducts = products;

  if (filter !== 'Hepsi') {
    filteredProducts = filteredProducts.filter(product => product.stock === filter);
  }

  if (productType !== 'Hepsi') {
    filteredProducts = filteredProducts.filter(product => product.type === productType);
  }

  if (brand !== 'Hepsi') {
    filteredProducts = filteredProducts.filter(product => product.brand === brand);
  }

  if (color !== 'Hepsi') {
    filteredProducts = filteredProducts.filter(product => product.color === color);
  }

  if (productName) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );
  }

  filteredProducts = filteredProducts.filter(
    product => parseFloat(product.price.replace('₺', '')) >= priceRange[0] &&
               parseFloat(product.price.replace('₺', '')) <= priceRange[1]
  );

  switch (sortBy) {
    case 'alphabetical':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'alphabetical-desc':
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'price-asc':
      filteredProducts.sort((a, b) => parseFloat(a.price.replace('₺', '')) - parseFloat(b.price.replace('₺', '')));
      break;
    case 'price-desc':
      filteredProducts.sort((a, b) => parseFloat(b.price.replace('₺', '')) - parseFloat(a.price.replace('₺', '')));
      break;
    case 'discount-asc':
      filteredProducts.sort((a, b) => a.discount - b.discount);
      break;
    case 'discount-desc':
      filteredProducts.sort((a, b) => b.discount - a.discount);
      break;
    default:
      break;
  }

  return filteredProducts;
};