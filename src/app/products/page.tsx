"use client";

import React, { useState, ChangeEvent } from 'react';
import { Grid, Typography, Pagination, Box, Card, CardContent, FormControl, InputLabel, Select, MenuItem, TextField, SelectChangeEvent } from '@mui/material';
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
    setPage(1);
  };

  const handleChangePriceRange = (index: number, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = Number(event.target.value);
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

  const handleChangeProductName = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Card sx={{ flex: '1 1 20%', position: 'sticky', top: '20px', alignSelf: 'flex-start' }}>
          <CardContent>
            <FormControl variant="outlined" sx={{ minWidth: 200, marginBottom: '20px' }}>
              <InputLabel>Stok Durumu</InputLabel>
              <Select value={filter} onChange={handleChangeFilter} label="Stok Durumu">
                <MenuItem value="Hepsi">Hepsi</MenuItem>
                <MenuItem value="Mevcut">Mevcut</MenuItem>
                <MenuItem value="Bitti">Bitti</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ minWidth: 200, marginBottom: '20px' }}>
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
            <FormControl variant="outlined" sx={{ minWidth: 200, marginBottom: '20px' }}>
              <InputLabel>Marka</InputLabel>
              <Select value={brand} onChange={handleChangeBrand} label="Marka">
                <MenuItem value="Hepsi">Hepsi</MenuItem>
                <MenuItem value="BrandA">BrandA</MenuItem>
                <MenuItem value="BrandB">BrandB</MenuItem>
                <MenuItem value="BrandC">BrandC</MenuItem>
                {/* Diğer markalar... */}
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ minWidth: 200, marginBottom: '20px' }}>
              <InputLabel>Renk</InputLabel>
              <Select value={color} onChange={handleChangeColor} label="Renk">
                <MenuItem value="Hepsi">Hepsi</MenuItem>
                <MenuItem value="Beyaz">Beyaz</MenuItem>
                <MenuItem value="Mavi">Mavi</MenuItem>
                <MenuItem value="Şeffaf">Şeffaf</MenuItem>
                {/* Diğer renkler... */}
              </Select>
            </FormControl>
            <Typography gutterBottom>Fiyat Aralığı</Typography>
            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <TextField
                label="Min Fiyat"
                variant="outlined"
                type="number"
                value={priceRange[0]}
                onChange={(e) => handleChangePriceRange(0, e as ChangeEvent<HTMLInputElement>)}
              />
              <TextField
                label="Max Fiyat"
                variant="outlined"
                type="number"
                value={priceRange[1]}
                onChange={(e) => handleChangePriceRange(1, e as ChangeEvent<HTMLInputElement>)}
              />
            </Box>
          </CardContent>
        </Card>
        <Box sx={{ flex: '1 1 80%' }}>
          <Card sx={{ marginBottom: '20px' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
              <TextField
                label="Ürün Adı"
                variant="outlined"
                value={productName}
                onChange={(e) => handleChangeProductName(e as ChangeEvent<HTMLInputElement>)}
                sx={{ flex: 1 }}
              />
              <FormControl variant="outlined" sx={{ minWidth: 200, flex: 1 }}>
                <InputLabel>Sırala</InputLabel>
                <Select value={sortBy} onChange={handleChangeSortBy} label="Sırala">
                  <MenuItem value="alphabetical">Alfabetik (A-Z)</MenuItem>
                  <MenuItem value="alphabetical-desc">Alfabetik (Z-A)</MenuItem>
                  <MenuItem value="price-asc">Fiyat (Artan)</MenuItem>
                  <MenuItem value="price-desc">Fiyat (Azalan)</MenuItem>
                  <MenuItem value="discount-asc">İndirim Oranı (Artan)</MenuItem>
                  <MenuItem value="discount-desc">İndirim Oranı (Azalan)</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
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
            onChange={(e, value) => handleChangePage(e, value)}
            color="primary"
            sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsPage;