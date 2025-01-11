import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '/src/assets/images/برنج نی نی 04.png'
import './Navbar.css'

const Navbar = () => {

  const location = useLocation()

  return (
    <AppBar position="static" color="white">
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center" gap={2}>
          <Link to="/shop/Shoppingbasket">
            <IconButton color="inherit">
              <ShoppingBasketOutlinedIcon style={{color:'black'}}/>
            </IconButton>
          </Link>
          <Link to="/shop/Profile">
            <IconButton color="inherit" onClick={() => localStorage.setItem('userredirect', location.pathname)}>
              <AccountCircleOutlinedIcon style={{color:'black'}}/>
            </IconButton>
          </Link>
          <Link to="/shop/Products" style={{textDecoration:'none'}}>
            <Typography variant="body1" color="textPrimary" fontFamily={'gandom'} >
              محصولات
            </Typography>
          </Link>
        </Box>
        <Box>
          <Link to="/shop/home">
            <img src={logo} alt="logo" style={{ width: 64 }} />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

