import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductCard = ({ products }) => {

    return (
        products.map((product) =>(

            <Card
              sx={{
                backgroundColor: 'var(--bgCard)',
                color: 'var(--colorTitle)',
                width: 300,
                height: 'auto',
                borderRadius: 3,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                m: 2,
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.name}
                sx={{ borderRadius: '12px 12px 0 0' }}
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ color: '#A0A0A0' }}>
                  {product.description}
                </Typography>
                <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" fontWeight="bold" color="#FFC700">
                    ${product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      backgroundColor: '#FFC700',
                      color: '#191035', 
                      '&:hover': {
                        backgroundColor: '#e6b800', 
                      },
                      borderRadius: 2,
                      padding: '6px 12px',
                      fontWeight: 'bold',
                    }}
                  >
                    Añadir
                  </Button>
                </Box>
              </CardContent>
            </Card>
        ))
    );
};

export default ProductCard;