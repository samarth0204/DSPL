import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('Home');
  const [scrolling, setScrolling] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate(); // Initialize useNavigate

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/all-products' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleButtonClick = (item) => {
    setActiveButton(item.name);
    navigate(item.path); // Navigate to the corresponding path
  };

  const list = () => (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.name}
          onClick={() => {
            toggleDrawer(false)({ type: 'click' });
            handleButtonClick(item);
          }}
          sx={{
            backgroundColor: activeButton === item.name ? 'red' : 'transparent',
            color: 'white',
            '&:hover': {
              backgroundColor: activeButton === item.name ? 'darkred' : 'rgba(255, 0, 0, 0.1)',
            },
          }}
        >
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );

  // Scroll event to change navbar background
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
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: 'white',
            textAlign: 'left', // Align logo to the left
          }}
        >
          Brand Logo
        </Typography>
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
                sx: { backgroundColor: 'black' }
              }}
            >
              {list()}
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
                  backgroundColor: activeButton === item.name ? 'red' : 'transparent',
                  border: activeButton === item.name ? 'none' : '1px solid red',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: activeButton === item.name ? 'darkred' : 'rgba(255, 0, 0, 0.1)',
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
