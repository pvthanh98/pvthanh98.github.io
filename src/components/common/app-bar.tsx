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
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { UserRoleEnum } from '../../enum/user-role.enum';

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
  },
  {
    title: 'Login',
    path: path.LOGIN_PATH
  }
];

function AppBarComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const userRole = useSelector((state: RootState) => state.userRole.value)
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
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
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
              onClose={() => handleCloseNavMenu(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
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
                }
                if (page.title === "Finance" && userRole === UserRoleEnum.ADMIN)
                  return (
                    <MenuItem key={page.path}>
                      <FinanceMenuMobile title={page.title} handleCloseNavMenu={handleCloseNavMenu} />
                    </MenuItem>
                  )

                return ''
              })}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
              if (page.title !== "Finance") {
                return (
                  <Button
                    key={page.path}
                    onClick={() => handleCloseNavMenu(page.path)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.title}
                  </Button>
                )
              }

              if (page.title === "Finance" && userRole === UserRoleEnum.ADMIN)
                return (
                  <Box
                    key={page.path}
                    onClick={() => handleCloseNavMenu(null)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <FinanceMenu title={page.title} handleCloseNavMenu={handleCloseNavMenu} />
                  </Box>
                )

              return ''
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarComponent;
