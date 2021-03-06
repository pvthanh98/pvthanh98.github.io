import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function AppBarOnlyLogoComponent() {
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
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppBarOnlyLogoComponent;
