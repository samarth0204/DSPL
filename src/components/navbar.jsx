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

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('Home');
  const [scrolling, setScrolling] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'About', 'Services', 'Contact'];

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
    setActiveButton(item);
  };

  const list = () => (
    <List>
      {menuItems.map((text) => (
        <ListItem
          button
          key={text}
          onClick={() => {
            toggleDrawer(false)({ type: 'click' });
            handleButtonClick(text);
          }}
          sx={{
            backgroundColor: activeButton === text ? 'red' : 'transparent',
            color: 'white',
            '&:hover': {
              backgroundColor: activeButton === text ? 'darkred' : 'rgba(255, 0, 0, 0.1)',
            },
          }}
        >
          <ListItemText primary={text} />
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
                key={item}
                onClick={() => handleButtonClick(item)}
                sx={{
                  marginLeft: 2,
                  backgroundColor: activeButton === item ? 'red' : 'transparent',
                  border: activeButton === item ? 'none' : '1px solid red',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: activeButton === item ? 'darkred' : 'rgba(255, 0, 0, 0.1)',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
