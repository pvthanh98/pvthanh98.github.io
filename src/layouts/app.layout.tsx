import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import AppBarComponent from "../components/common/app-bar";

interface AppLayoutProps {
  children: any
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <AppBarComponent />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          paddingTop: "8px",
        }}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          minHeight: '100px',
          paddingTop: '24px',
          background: '#213343',
          marginTop:'48px'
        }}
      >
        <Container>
          <Grid 
            container
            sx={{
              color: '#ffffff',
              textAlign: 'center'
            }}
          >
            <Typography textAlign={'center'} variant='body2'>
              ThanhPhan is a personal website where to share about daily life, technology and stories. Let's give me your idea or any concerns so that i can make the site better. Visit <a href='' style={{color:'#ffffff'}}>profile</a> to know more about me.
            </Typography>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}

export default AppLayout;