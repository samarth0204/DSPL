import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Box, Typography } from '@mui/material';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../images/DSPL.png";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/all-products' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleButtonClick = (item) => {
    navigate(item.path);
  };

  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          background: scrolling ? 'black' : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))',
          transition: 'background 0.3s ease',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            component="img"
            sx={{
              height: 50,
              padding: 1,
              maxWidth: '100%',
              objectFit: 'contain',
              cursor: 'pointer',
            }}
            alt="Brand Logo"
            src={logo}
            onClick={() => navigate('/')}
          />
          <IconButton
            size="large"
            edge="end"
            sx={{ 
              color: 'white',
              position: 'absolute',
              top: 8,
              right: 16,
              zIndex: 1300,
              display: { sm: 'none' }, // Hide on larger screens
            }}
            aria-label="menu"
            onClick={toggleDrawer(!drawerOpen)}
          >
            {drawerOpen ? <CloseIcon sx={{zIndex: 1300}}/> : <MenuOpenOutlinedIcon />}
          </IconButton>
          {isMobile ? (
            <Drawer
              anchor="bottom"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: { 
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px 10px 0 0',
                  height: '90%',
                },
              }}
            >
              <List sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {menuItems.map((item, index) => (
                  <ListItem
                    button="true"
                    key={item.name}
                    onClick={() => {
                      handleButtonClick(item);
                      toggleDrawer(false)({ type: 'click' });
                    }}
                    sx={{
                      backgroundColor: location.pathname === item.path ? 'red' : 'transparent',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: location.pathname === item.path ? 'darkred' : 'rgba(255, 0, 0, 0.1)',
                      },
                      justifyContent: 'center',
                    }}
                  >
                    <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  color="inherit"
                  key={item.name}
                  onClick={() => handleButtonClick(item)}
                  sx={{
                    marginLeft: 2,
                    backgroundColor: location.pathname === item.path ? 'red' : 'transparent',
                    border: location.pathname === item.path ? 'none' : '1px solid red',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: location.pathname === item.path ? 'darkred' : 'rgba(255, 0, 0, 0.1)',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
      {/* Disclaimer Text */}
      <Typography
        variant="body2"
        sx={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '8px 0',
          fontSize: '12px',
          zIndex: 1300,
        }}
      >
        This website is not developed completely, all the texts and images are for development use only.
      </Typography>
    </Box>
  );
}
