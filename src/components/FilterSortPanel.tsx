import React, { ChangeEvent } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Card, CardContent, Box, SelectChangeEvent, Typography } from '@mui/material';

interface FilterSortPanelProps {
  filter: string;
  priceRange: number[];
  productType: string;
  brand: string;
  color: string;
  productName: string;
  sortBy: string;
  handleChangeFilter: (event: SelectChangeEvent<string>) => void;
  handleChangePriceRange: (index: number, value: number) => void;
  handleChangeProductType: (event: SelectChangeEvent<string>) => void;
  handleChangeBrand: (event: SelectChangeEvent<string>) => void;
  handleChangeColor: (event: SelectChangeEvent<string>) => void;
  handleChangeProductName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeSortBy: (event: SelectChangeEvent<string>) => void;
}

const FilterSortPanel: React.FC<FilterSortPanelProps> = ({
  filter,
  priceRange,
  productType,
  brand,
  color,
  productName,
  sortBy,
  handleChangeFilter,
  handleChangePriceRange,
  handleChangeProductType,
  handleChangeBrand,
  handleChangeColor,
  handleChangeProductName,
  handleChangeSortBy
}) => {
  return (
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
              onChange={(e) => handleChangePriceRange(0, Number(e.target.value))}
            />
            <TextField
              label="Max Fiyat"
              variant="outlined"
              type="number"
              value={priceRange[1]}
              onChange={(e) => handleChangePriceRange(1, Number(e.target.value))}
            />
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ flex: '1 1 80%' }}>
        <Card sx={{ marginBottom: '20px', position: 'sticky', top: '20px', zIndex: 1 }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
            <TextField
              label="Ürün Adı"
              variant="outlined"
              value={productName}
              onChange={handleChangeProductName}
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
      </Box>
    </Box>
  );
};

export default FilterSortPanel;