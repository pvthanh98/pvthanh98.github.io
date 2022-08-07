import { Box, Container, Grid, Typography } from "@mui/material";

function FooterLayout() {
  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        minHeight: '100px',
        paddingTop: '24px',
        background: '#173948',
        marginTop: '48px'
      }}
    >
      <Container>
        <Box
          sx={{
            color: '#ffffff',
            textAlign: 'center'
          }}
        >
          <Typography textAlign={'center'} variant='body2'>
            Keywords: ThanhPhan, ThanhPhan Personal, ThanhPhan Personal Site, Thanh Phan, Thanh Phan Personal Site, ThanhPhan Site, ThanhPhan Site, ThanhPhan-Site, ThanhPhan-Personal-Site, ThanhPhan-PersonalSite
          </Typography>
          <Typography textAlign={'center'} variant='body2'>
            ThanhPhan is a personal website where to share about daily life, technology and stories. Let's give me your idea or any concerns so that i can make the site better. Visit <a href='' style={{ color: '#ffffff' }}>profile</a> to know more about me.
          </Typography>
        </Box>
      </Container>
    </Grid>
  );
}

export default FooterLayout;