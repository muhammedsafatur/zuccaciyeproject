import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, Chip } from '@mui/material';

interface ProductCardProps {
  name: string;
  price: string;
  stock: string;
  image: string;
  description: string;
  discount: number;
}

const getStockColor = (stock: string) => {
  return stock === "Mevcut" ? "green" : "red";
};

const ProductCard = ({ name, price, stock, image, description, discount }: ProductCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        style={{ height: '300px', objectFit: 'cover' }}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="div" gutterBottom>
            {name}
          </Typography>
          {discount > 0 && (
            <Chip label={`%${discount} İndirim`} color="secondary" size="small" />
          )}
        </Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" color="text.primary">
            {price}
          </Typography>
          <Typography variant="body2" color={getStockColor(stock)}>
            Stok: {stock}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" fullWidth style={{ marginTop: '10px' }}>
          Sepete Ekle
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;