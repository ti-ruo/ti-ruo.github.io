import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'Thoughts', 'Gallery', 'About'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [hrefPage, setHrefPage] = React.useState<string>('#/');

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = React.useCallback((page: string) => {
    setAnchorElNav(null);
    if (page === 'Home'){
        setHrefPage('/#')
    }else if (page === 'About'){
        setHrefPage('/#/about')
    }else if (page === 'Gallery'){
        setHrefPage('/#/gallery')
    }else if (page === 'Thoughts'){
        setHrefPage('/#/Thoughts')
    }
  },[]);

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ᐛ 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page}
                >
                  <Button onClick={()=>handleCloseNavMenu(page)} href={hrefPage}>{page}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={hrefPage}
              >
                {page}
              </Button>
            ))}
          </Box>          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;