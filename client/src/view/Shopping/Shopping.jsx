import React from 'react';
import { Box, Typography } from '@mui/material';
import ProductCard from "../../componentes/cards/ProductCard/ProductCard.jsx";
import './style.css'

// Ejemplo de uso del componente ProductCard
const Shopping = () => {
  const products = [
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      },
      {
        name: 'Producto Ejemplo',
        description: 'Descripción breve del producto.',
        price: 49.99,
        image: 'https://via.placeholder.com/300x180',
      }
  ];

  return (
    <Box 
        sx={{ 
            backgroundColor: 'var(--bgColorGradient)',
            height: '100%',
            width: '100%',
            marginTop: '100px'
        }}>
          
      <Box 
          sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
      }}>
          <ProductCard products={products} />
      </Box>
    </Box>
  );
};

export default Shopping;

