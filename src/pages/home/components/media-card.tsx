import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export interface MediaCardPropType {
  src: string,
  title: string,
  description: string,
  onClick: () => void
}

export function MediaCard({ src, title, description, onClick }: MediaCardPropType) {
  return (
    <Grid
      item
      xs={12}
      md={4}
      onClick={onClick}
    >
      <Card
        sx={{
          cursor: 'pointer',
          '&:active': {
            transform: 'translateY(2px)',
            transition: '0.5s'
          },
          '&:hover': {
            transform: 'translateY(2px)',
            transition: '0.5s'
          }
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={src}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              minHeight: '60px'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              minHeight: '70px'
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>

  );
}