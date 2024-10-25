import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import logo from "../images/logo.jpeg";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get the current path
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/all-products' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close drawer and navigate to the page
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleButtonClick = (item) => {
    navigate(item.path); // Navigate to the corresponding path
  };

  // Scroll event to change navbar background
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Change threshold as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
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
            height: 70, // Set a fixed height
            maxWidth: '100%', // Ensure it doesn't stretch beyond its natural width
            objectFit: 'contain',
            cursor: 'pointer', // Optional: cursor pointer for clicking the logo
          }}
          alt="Brand Logo"
          src={`${logo}`} // Provide the path to your image here
          onClick={() => navigate('/')} // Optional: Add navigation to home on logo click
        />
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              sx={{ color: 'white' }}
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: { backgroundColor: 'black' },
              }}
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.name}
                    onClick={() => {
                      handleButtonClick(item);
                      toggleDrawer(false)({ type: 'click' }); // Close drawer on item click
                    }}
                    sx={{
                      backgroundColor: location.pathname === item.path ? 'red' : 'transparent',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: location.pathname === item.path ? 'darkred' : 'rgba(255, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
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
  );
}
