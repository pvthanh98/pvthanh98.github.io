import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FinanceMenu from '../../components/common/dropdown-menu';
import FinanceMenuMobile from '../../components/common/dropdown-menu-mobile';
import { Link, useNavigate } from 'react-router-dom';
import * as path from '../../routes/path';

const pages = [
  {
    title: 'Finance',
    path: null
  },
  {
    title: 'Profile',
    path: path.PROFILE_PATH
  },
  {
    title: 'Friend',
    path: path.USER_FRIEND_PATH
  },
  {
    title: 'Messenger',
    path: path.MESSENGER_PATH
  },
  {
    title: 'About',
    path: path.ABOUT_PATH
  }
];

function AppBarChatComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (link: string | null) => {
    setAnchorElNav(null);
    if (link) navigate(link)
  };
  return (
    <AppBar position="static"
      sx={{
        backgroundColor: "#173948",
        boxShadow: "0px 12px 12px -10px #000000"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
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
              onClose={() => handleCloseNavMenu(null)}
              sx={{
                display: 'block',
              }}
            >
              {pages.map((page) => {
                if (page.title !== "Finance") {
                  return (
                    <MenuItem sx={{ width: "200px" }} key={page.path} onClick={() => handleCloseNavMenu(page.path)}>
                      <Typography textAlign="center">
                        {page.title}
                      </Typography>
                    </MenuItem>
                  )
                } else return (
                  <MenuItem key={page.path}>
                    <FinanceMenuMobile title={page.title} handleCloseNavMenu={handleCloseNavMenu} />
                  </MenuItem>
                )
              })}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: 'flex',
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              ThanhPhan
            </Link>

          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarChatComponent;
