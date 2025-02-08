"use client";

import React, { useState, ChangeEvent } from 'react';
import { Grid, Typography, Pagination, Select, MenuItem, FormControl, InputLabel, TextField, SelectChangeEvent } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import { products } from './products';
import { filterProducts } from './filter';

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
    setPage(1); // Filtre değiştiğinde sayfayı 1'e resetleyelim
  };

  const handleChangePriceRange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = Number(event.target.value);
    setPriceRange(newPriceRange);
    setPage(1); // Filtre değiştiğinde sayfayı 1'e resetleyelim
  };

  const handleChangeProductType = (event: SelectChangeEvent<string>) => {
    setProductType(event.target.value as string);
    setPage(1); // Filtre değiştiğinde sayfayı 1'e resetleyelim
  };

  const handleChangeBrand = (event: SelectChangeEvent<string>) => {
    setBrand(event.target.value as string);
    setPage(1); // Filtre değiştiğinde sayfayı 1'e resetleyelim
  };

  const handleChangeColor = (event: SelectChangeEvent<string>) => {
    setColor(event.target.value as string);
    setPage(1); // Filtre değiştiğinde sayfayı 1'e resetleyelim
  };

  const handleChangeProductName = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
    setPage(1); // Filtre değiştiğinde sayfayı 1'e resetleyelim
  };

  const handleChangeSortBy = (event: SelectChangeEvent<string>) => {
    setSortBy(event.target.value as string);
    setPage(1); // Sıralama değiştiğinde sayfayı 1'e resetleyelim
  };

  const filteredProducts = filterProducts(products, filter, priceRange, productType, brand, color, productName, sortBy);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div id="root">
      <main className="p-8">
        <Typography variant="h3" component="h1" gutterBottom>
          Ürünlerimiz
        </Typography>
        <FormControl variant="outlined" style={{ minWidth: 200, marginBottom: '20px' }}>
          <InputLabel>Stok Durumu</InputLabel>
          <Select value={filter} onChange={handleChangeFilter} label="Stok Durumu">
            <MenuItem value="Hepsi">Hepsi</MenuItem>
            <MenuItem value="Mevcut">Mevcut</MenuItem>
            <MenuItem value="Bitti">Bitti</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" style={{ minWidth: 200, marginBottom: '20px' }}>
          <InputLabel>Ürün Türü</InputLabel>
          <Select value={productType} onChange={handleChangeProductType} label="Ürün Türü">
            <MenuItem value="Hepsi">Hepsi</MenuItem>
            <MenuItem value="Çaydanlık">Çaydanlık</MenuItem>
            <MenuItem value="Tabak">Tabak</MenuItem>
            <MenuItem value="Şişe">Şişe</MenuItem>
            <MenuItem value="Tencere">Tencere</MenuItem>
            <MenuItem value="Bardak">Bardak</MenuItem>
            <MenuItem value="Kupa">Kupa</MenuItem>
            <MenuItem value="Set">Set</MenuItem>
            <MenuItem value="Makine">Makine</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" style={{ minWidth: 200, marginBottom: '20px' }}>
          <InputLabel>Marka</InputLabel>
          <Select value={brand} onChange={handleChangeBrand} label="Marka">
            <MenuItem value="Hepsi">Hepsi</MenuItem>
            <MenuItem value="BrandA">BrandA</MenuItem>
            <MenuItem value="BrandB">BrandB</MenuItem>
            <MenuItem value="BrandC">BrandC</MenuItem>
            {/* Diğer markalar... */}
          </Select>
        </FormControl>
        <FormControl variant="outlined" style={{ minWidth: 200, marginBottom: '20px' }}>
          <InputLabel>Renk</InputLabel>
          <Select value={color} onChange={handleChangeColor} label="Renk">
            <MenuItem value="Hepsi">Hepsi</MenuItem>
            <MenuItem value="Beyaz">Beyaz</MenuItem>
            <MenuItem value="Mavi">Mavi</MenuItem>
            <MenuItem value="Şeffaf">Şeffaf</MenuItem>
            {/* Diğer renkler... */}
          </Select>
        </FormControl>
        <TextField
          label="Ürün Adı"
          variant="outlined"
          value={productName}
          onChange={handleChangeProductName}
          style={{ marginBottom: '20px' }}
        />
        <Typography gutterBottom>Fiyat Aralığı</Typography>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <TextField
            label="Min Fiyat"
            variant="outlined"
            type="number"
            value={priceRange[0]}
            onChange={(event) => handleChangePriceRange(event, 0)}
          />
          <TextField
            label="Max Fiyat"
            variant="outlined"
            type="number"
            value={priceRange[1]}
            onChange={(event) => handleChangePriceRange(event, 1)}
          />
        </div>
        <FormControl variant="outlined" style={{ minWidth: 200, marginBottom: '20px' }}>
          <InputLabel>Sırala</InputLabel>
          <Select value={sortBy} onChange={handleChangeSortBy} label="Sırala">
            <MenuItem value="alphabetical">Alfabetik</MenuItem>
            <MenuItem value="price">Fiyat</MenuItem>
            <MenuItem value="discount">İndirim Oranı</MenuItem>
          </Select>
        </FormControl>
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
          style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
      </main>
    </div>
  );
};

export default ProductsPage;