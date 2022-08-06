import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface PostCardPropType {
    src: string;
    title: string;
    marginTop?: string;
}

export function PostCard({ src, title, marginTop="4px" }: PostCardPropType) {
    return (
        <Box
            sx={{
              display: 'flex',
              marginTop,
              '&:active': {
                transform: 'translateY(4px)',
              },
              '&:hover':{
                cursor: 'pointer',
                paddingLeft: '12px',
                transition: '0.6s'
              },
              userSelect: 'none'
            }}
          >
            <Box>
              <img
                src={src}
                height={'70px'}
                width={'70px'}
              />
            </Box>
            <Box
              sx={{
                marginLeft: '8px'
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: '500'
                }}
              >
                {title}
              </Typography>
            </Box>
          </Box>
    );
}
