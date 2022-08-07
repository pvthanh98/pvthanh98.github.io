import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import BookIcon from '@mui/icons-material/Book';


export interface SidebarTitlePropType {
  title: string;
  color: 'primary' | 'success' | 'error' | 'secondary';
}

export function SidebarTitle({ title, color = "primary" }: SidebarTitlePropType) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <BookIcon />
      <Typography variant='h6' alignItems={'center'} marginLeft='4px' fontWeight={'500'}>
        {title}
      </Typography>
    </Box>
  );
}
