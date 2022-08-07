import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import AppBarComponent from "../components/common/app-bar";
import FooterLayout from "./footer.layout";

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
          minHeight: '100vh'
        }}
      >
        {children}
      </Grid>
      <FooterLayout />
    </Grid>
  );
}

export default AppLayout;