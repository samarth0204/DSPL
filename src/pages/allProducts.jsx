import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Dialog, DialogContent, DialogActions, Button, Container, Divider, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import NavBar from '../components/navbar';
import { products } from '../constants/productInfo';

const ProfessionalCard = styled(Card)(({ color }) => ({
  backgroundColor: 'black',
  color: 'white',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: `0 4px 8px ${color}80`,
  },
}));

const ProfessionalCardMedia = styled(CardMedia)({
  height: 200,
  width: '100%',
  transition: 'all 0.3s ease-in-out',
  margin: 'auto',
  objectFit: 'contain',
  mixBlendMode: 'screen',
  backgroundColor: 'black',
});

const ProductCard = ({ product, onClick }) => {
  return (
    <ProfessionalCard onClick={() => onClick(product)} color={product.color}>
      <Box sx={{ backgroundColor: 'black', padding: '16px' }}>
        <ProfessionalCardMedia
          component="img"
          image={product.image}
          alt={product.name}
        />
      </Box>
      <CardContent>
        <Typography variant="body2" sx={{ color: product.color }}>
          {product.category}
        </Typography>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            color: 'white',
            borderBottom: `2px solid ${product.color}`,
            paddingBottom: '4px',
            marginTop: '4px',
          }}
        >
          {product.name}
        </Typography>
      </CardContent>
    </ProfessionalCard>
  );
};

const ProfessionalDialog = styled(Dialog)(({ color }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'black',
    color: 'white',
    border: `1px solid ${color}`,
  },
}));

const BlendedImage = styled('img')({
  width: '100%',
  height: 'auto',
  mixBlendMode: 'screen',
  backgroundColor: 'black',
});

const AllProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDialog = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <NavBar />
      <Box sx={{ bgcolor: 'black', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: 'white', mb: 6, fontWeight: 'bold', marginTop: '5%' }}>
            Premium Spice Collection
          </Typography>
          <Grid container spacing={4}>
            {products?.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductCard product={product} onClick={handleProductClick} />
              </Grid>
            ))}
          </Grid>
          <ProfessionalDialog 
            open={!!selectedProduct} 
            onClose={handleCloseDialog}
            maxWidth="md"
            fullWidth
            color={selectedProduct?.color}
          >
            <DialogContent>
              <IconButton
                aria-label="close"
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'white',
                }}
              >
                <CloseIcon />
              </IconButton>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ backgroundColor: 'black', padding: '16px' }}>
                    <BlendedImage 
                      src={selectedProduct?.image} 
                      alt={selectedProduct?.name} 
                    />
                  </Box>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    sx={{ mt: 2, bgcolor: selectedProduct?.color, '&:hover': { bgcolor: `${selectedProduct?.color}CC` } }}
                  >
                    Add to Cart
                  </Button>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="h3" gutterBottom sx={{ color: selectedProduct?.color, fontWeight: 'bold' }}>
                    {selectedProduct?.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProduct?.description}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProduct?.extraInfo}
                  </Typography>
                  <Divider sx={{ my: 2, bgcolor: selectedProduct?.color }} />
                  <Typography variant="h5" gutterBottom sx={{ color: selectedProduct?.color, fontWeight: 'bold' }}>
                    Recommended Usage
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProduct?.usage}
                  </Typography>
                  <Divider sx={{ my: 2, bgcolor: selectedProduct?.color }} />
                  <Typography variant="h5" gutterBottom sx={{ color: selectedProduct?.color, fontWeight: 'bold' }}>
                    Available Packaging
                  </Typography>
                  <Typography variant="body1">
                    {selectedProduct?.packaging}
                  </Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} sx={{ color: selectedProduct?.color }}>
                Close
              </Button>
            </DialogActions>
          </ProfessionalDialog>
        </Container>
      </Box>
    </>
  );
};

export default AllProducts;