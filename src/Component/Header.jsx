import React, { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SignInModal from './SignInModal';
import CustomBreadcrumbs from '../constant/CustomBreadcrumbs';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('HOME'); 
  const [popupOpen , setpopupOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['HOME', 'WOMEN', 'MEN', 'GIFTING'];
  const menSubMenu = [
    'All Men',
    'Nico Core',
    'New Arrivals',
    'Bestsellers',
    'Shirts',
    'Kurtas',
    'T-Shirts',
    "Men's Accessories",
  ];
  const womenSubMenu = [
    'All women',
    'Kurta',
    'New Arrivals',
    'Bestsellers',
    'Shirts',
    'Kurtas',
    'T-Shirts',
    "Men's Accessories",
  ];

  const clickpop =()=>{
setpopupOpen(true);
  }
  return (
    <>
      {/* Top Header Bar */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={1}
        sx={{ backgroundColor: 'white', boxShadow: 1 }}
      >
        {/* Left Side */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <svg width="100" height="24" viewBox="0 0 100 24">
            <text
              x="0"
              y="20"
              fontFamily="sans-serif"
              fontSize="20"
              fill="#1e1e1e"
              letterSpacing="5px"
            >
              NICOBAR
            </text>
          </svg>
        </Box>

        {/* Right Side Icons */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <PersonOutlineIcon />
          </IconButton>
          <IconButton>
            <WorkOutlineIcon />
          </IconButton>
        </Box>
      </Box>
 <CustomBreadcrumbs />
      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box width={300} role="presentation" p={2}>
          {/* Sign in and Close */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontSize="14px" fontWeight="500" sx={{ textDecoration: 'underline' }}>
             <a onClick={clickpop} style={{cursor:'pointer'}}> Sign in </a>
            </Typography>
            <IconButton onClick={handleDrawerToggle}>
              ✕
            </IconButton>
          </Box>

          {/* Top Nav Tabs */}
          <Box display="flex" justifyContent="space-around" my={2}>
            {menuItems.map((item) => (
              <Typography
                key={item}
                sx={{
                  fontWeight: 400,
                  borderBottom: activeMenu === item ? '2px solid black' : 'none',
                  pb: 0.5,
                  cursor: 'pointer',
                }}
                onClick={() => setActiveMenu(item)}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Divider />

          {/* Submenu based on selected menu */}
          <List>
            {activeMenu === 'MEN' &&
              menSubMenu.map((item) => (
                <ListItem button key={item}>
                  <ListItemText primary={item} primaryTypographyProps={{ fontSize: 15 }} />
                </ListItem>
              ))}
            {activeMenu === 'WOMEN' &&
              womenSubMenu.map((item) => (
                <ListItem button key={item}>
                  <ListItemText primary={item} primaryTypographyProps={{ fontSize: 15 }} />
                </ListItem>
              ))}
          </List>
        </Box>
      </Drawer>
      <SignInModal open={popupOpen} handleClose={()=>setpopupOpen(false)}/>
    </>
  );
}

export default Header;
