"use client";

import React, { useState, ChangeEvent } from 'react';
import { Grid, Typography, Pagination, Box, SelectChangeEvent } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import { products } from './products';
import { filterProducts } from './filter';
import FilterSortPanel from '@/components/FilterSortPanel';

const ProductsPage = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('Hepsi');
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [productType, setProductType] = useState('Hepsi');
  const [brand, setBrand] = useState('Hepsi');
  const [color, setColor] = useState('Hepsi');
  const [productName, setProductName] = useState('');
  const [sortBy, setSortBy] = useState('alphabetical');
  const itemsPerPage = 12;

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeFilter = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value as string);
    setPage(1);
  };

  const handleChangePriceRange = (index: number, value: number) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = value;
    setPriceRange(newPriceRange);
    setPage(1);
  };

  const handleChangeProductType = (event: SelectChangeEvent<string>) => {
    setProductType(event.target.value as string);
    setPage(1);
  };

  const handleChangeBrand = (event: SelectChangeEvent<string>) => {
    setBrand(event.target.value as string);
    setPage(1);
  };

  const handleChangeColor = (event: SelectChangeEvent<string>) => {
    setColor(event.target.value as string);
    setPage(1);
  };

  const handleChangeProductName = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
    setPage(1);
  };

  const handleChangeSortBy = (event: SelectChangeEvent<string>) => {
    setSortBy(event.target.value as string);
    setPage(1);
  };

  const filteredProducts = filterProducts(products, filter, priceRange, productType, brand, color, productName, sortBy);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Box id="root" sx={{ padding: '16px' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Ürünlerimiz
      </Typography>
      <FilterSortPanel
        filter={filter}
        priceRange={priceRange}
        productType={productType}
        brand={brand}
        color={color}
        productName={productName}
        sortBy={sortBy}
        handleChangeFilter={handleChangeFilter}
        handleChangePriceRange={handleChangePriceRange}
        handleChangeProductType={handleChangeProductType}
        handleChangeBrand={handleChangeBrand}
        handleChangeColor={handleChangeColor}
        handleChangeProductName={handleChangeProductName}
        handleChangeSortBy={handleChangeSortBy}
      />
      <Grid container spacing={4}>
        {paginatedProducts.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard
              name={product.name}
              price={product.price}
              stock={product.stock}
              image={product.image}
              description={product.description}
              discount={product.discount}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        color="primary"
        sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </Box>
  );
};

export default ProductsPage;