import { Grid } from "@mui/material";

interface BodyLayoutProps {
  children: any
}

function BodyLayout({children}: BodyLayoutProps) {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        {children}
      </Grid>
    </Grid>
  );
}

export default BodyLayout;