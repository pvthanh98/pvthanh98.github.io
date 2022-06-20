import { Grid } from "@mui/material";
import AppBarComponent from "../components/common/app-bar";

interface AppLayoutProps {
  children: any
}

function AppLayout({children}: AppLayoutProps) {
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
          paddingTop:"8px",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default AppLayout;