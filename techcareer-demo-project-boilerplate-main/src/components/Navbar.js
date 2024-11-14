import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { Button, Menu, MenuItem, Stack } from '@mui/material';
import logo from '../assets/techcareer-logo.svg';
import useMediaQuery from '@mui/material/useMediaQuery';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.06),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.12),
  },
  width: '300px',
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '250px',
    transition: theme.transitions.create('width'),
    color: 'black',
    '&::placeholder': {
      color: 'rgba(0, 0, 0, 0.6)',
      opacity: 1,
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
            <a href="../Pages/Home">
              <img 
                src={logo} 
                alt="logo" 
                style={{
                  width: 'auto',
                  height: '25px',
                  maxWidth: '200px'
                }}
              />
            </a>
          </Box>

          {/* Desktop Search */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Etkinlik, İş ilanı, Blog ara"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Buttons */}
          {!isMobile && (
            <Stack 
              spacing={1}
              direction="row"
              sx={{
                overflowX: 'auto',
                flexWrap: 'nowrap',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <Button variant="text" sx={{ color: 'black', whiteSpace: 'nowrap', minWidth: 'auto' }}>Etkinlikler</Button>
              <Button variant="text" sx={{ color: 'black', whiteSpace: 'nowrap', minWidth: 'auto' }}>İş ilanları</Button>
              <Button variant="text" sx={{ color: 'black', whiteSpace: 'nowrap', minWidth: 'auto' }}>Eğitimler</Button>
              <Button variant="text" sx={{ color: 'black', whiteSpace: 'nowrap', minWidth: 'auto' }}>Komünite</Button>
              <Button variant="text" sx={{ color: 'black', whiteSpace: 'nowrap', minWidth: 'auto' }}>Şirketler</Button>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#1eb96b',
                  color: 'white',
                  whiteSpace: 'nowrap',
                  minWidth: 'auto',
                  '&:hover': {
                    backgroundColor: '#1aa65f',
                  }
                }}
              >
                Giriş/Üye Ol
              </Button>
            </Stack>
          )}

          {/* Mobile Icons */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton 
                onClick={handleSearchToggle} 
                sx={{ color: 'black' }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                onClick={handleMenuOpen}
                sx={{ color: 'black' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          {/* Mobile Search Overlay */}
          {isMobile && isSearchOpen && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white',
                zIndex: 1100,
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              <IconButton 
                onClick={handleSearchToggle}
                sx={{ color: 'black', mr: 1 }}
              >
                <ArrowBackIcon />
              </IconButton>
              <StyledInputBase
                autoFocus
                fullWidth
                placeholder="Etkinlik, İş ilanı, Blog ara"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
          )}

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              sx: {
                width: '200px',
                mt: 2
              }
            }}
          >
            <MenuItem onClick={handleMenuClose} sx={{ width: '100%' }}>Etkinlikler</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ width: '100%' }}>İş ilanları</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ width: '100%' }}>Eğitimler</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ width: '100%' }}>Komünite</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ width: '100%' }}>Şirketler</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ width: '100%', padding: '8px' }}>
              <Button 
                variant="contained" 
                fullWidth
                sx={{ 
                  backgroundColor: '#1eb96b',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#1aa65f',
                  }
                }}
              >
                Giriş/Üye Ol
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
