import React, { useState } from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Dialog, 
  DialogContent,
  DialogActions,
  Button,
  Container,
  Divider,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import sample from "../images/blackBg.jpg";
import NavBar from '../components/navbar';

const products = [
  { 
    id: 1, 
    name: 'Garam Masala', 
    category: 'Blended Spices', 
    image: `${sample}`,
    description: 'A select blend of 13 spices go into this grand old universal taste enhancer. Being chilli based, it provides an exotic red gravy to dishes.',
    usage: 'It is used essentially for preparing vegetarian dishes requiring a gravy. Gujaratis and Marwaris normally use it in lentils (dal) and for filling in snacks such as samosa, usal, patra, farsan etc.',
    packaging: '15 gms / 25 gms / 50 gms / 100 gms / 200 gms / Jar 1 kg',
    extraInfo: 'It is widely used all over India on account of its being a less pungent garam masala. Fennel, Tejpatta (Cinnamon leaves) and Trifala imparts a cooling effect to this blend.',
    color: '#FF6B6B'
  },
  { 
    id: 2, 
    name: 'Turmeric Powder', 
    category: 'Pure Spices', 
    image: `${sample}`,
    description: 'A vibrant yellow spice with a warm, earthy flavor and numerous health benefits.',
    usage: 'Used in curries, rice dishes, and for its anti-inflammatory properties in golden milk.',
    packaging: '50 gms / 100 gms / 200 gms / 500 gms',
    extraInfo: 'Known for its antioxidant and anti-inflammatory properties.',
    color: '#FFD93D'
  },
  { 
    id: 3, 
    name: 'Coriander Powder', 
    category: 'Pure Spices', 
    image: `${sample}`,
    description: 'A versatile spice with a slightly sweet, lemony flavor.',
    usage: 'Used in various cuisines, particularly in Indian, Middle Eastern, and Mexican dishes.',
    packaging: '50 gms / 100 gms / 200 gms / 500 gms',
    extraInfo: 'Rich in antioxidants and may help lower blood sugar levels.',
    color: '#6BCB77'
  },
  { 
    id: 4, 
    name: 'Cumin Powder', 
    category: 'Pure Spices', 
    image: `${sample}`,
    description: 'A warm, earthy spice with a slightly bitter, peppery flavor.',
    usage: 'Commonly used in Indian, Middle Eastern, and Mexican cuisines.',
    packaging: '50 gms / 100 gms / 200 gms / 500 gms',
    extraInfo: 'Known for its digestive benefits and rich iron content.',
    color: '#4D96FF'
  },
];

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
  transition: 'all 0.3s ease-in-out',
});

const ProductCard = ({ product, onClick }) => {
  return (
    <ProfessionalCard onClick={() => onClick(product)} color={product.color}>
      <ProfessionalCardMedia
        component="img"
        image={product.image}
        alt={product.name}
      />
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
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: 'white', mb: 6, fontWeight: 'bold' , marginTop:'5%' }}>
          Premium Spice Collection
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
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
                <img 
                  src={selectedProduct?.image} 
                  alt={selectedProduct?.name} 
                  style={{ width: '100%', height: 'auto' }}
                />
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