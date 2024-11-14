import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Dialog, DialogContent, DialogActions, Button, Container, Divider, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import NavBar from '../components/navbar';
import { products } from '../constants/productInfo';
import { motion, AnimatePresence } from 'framer-motion';

const ProfessionalCard = styled(motion.div)(({ color }) => ({
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

const ProductCard = ({ product, onClick, index }) => {
  return (
    <ProfessionalCard
      onClick={() => onClick(product)}
      color={product.color}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card sx={{ backgroundColor: 'black' }}>
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
      </Card>
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

  const pageVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <Box sx={{ bgcolor: 'black', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: 'white', mb: 6, fontWeight: 'bold', marginTop: '5%' }}>
              Premium <span style={{ color: 'red' }}>Spice Collection</span>
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            <AnimatePresence>
              {products?.map((product, index) => (
                <Grid item xs={12} sm={6} md={3} key={product.id}>
                  <ProductCard product={product} onClick={handleProductClick} index={index} />
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
          <AnimatePresence>
            {selectedProduct && (
              <ProfessionalDialog 
                open={!!selectedProduct} 
                onClose={handleCloseDialog}
                maxWidth="md"
                fullWidth
                color={selectedProduct?.color}
                components={{
                  Backdrop: motion.div
                }}
                BackdropProps={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
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
                        <Box sx={{ backgroundColor: 'black', padding: '16px', display: 'flex', justifyContent: 'center'}}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <BlendedImage 
                              src={selectedProduct?.image} 
                              alt={selectedProduct?.name} 
                              sx={{
                                width: { xs: '40%', sm: '100%' },
                                height: 'auto',
                                margin: 'auto'
                              }}
                            />
                          </motion.div>
                        </Box>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            variant="contained" 
                            fullWidth 
                            sx={{color:'transparent', mt: 2, bgcolor: selectedProduct?.color, '&:hover': { bgcolor: `${selectedProduct?.color}CC` } }}
                          >
                            Add to Cart
                          </Button>
                        </motion.div>
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
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
                        </motion.div>
                      </Grid>
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog} sx={{ color: selectedProduct?.color }}>
                      Close
                    </Button>
                  </DialogActions>
                </motion.div>
              </ProfessionalDialog>
            )}
          </AnimatePresence>
        </Container>
      </Box>
    </motion.div>
  );
};

export default AllProducts;
