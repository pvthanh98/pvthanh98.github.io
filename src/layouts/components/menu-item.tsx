import { Box } from "@mui/system"
import { Typography } from "@mui/material";

export interface MenuItemPropType {
    title: string;
    icon: any;
    onClick : (link: string) => void;
    path: string;
    isActive: boolean;
}

export const MenuItem = (props: MenuItemPropType) => {
    const Component = props.icon;
    return (
        <Box
            onClick={()=> props.onClick(props.path)}
            sx={{
                display: 'flex',
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '24px',
                cursor: 'pointer',
                userSelect: 'none',
                '&:hover': {
                    backgroundColor: '#6b7b8c',
                    fontWeight: '700'
                },
                '&:active': {
                    transform: 'translateY(1px)'
                },
            }}
        >
            <Component
                sx={{
                    color: props.isActive ? '#FFB5C2' : '#ffffff'
                }}
            />
            <Typography
                variant='body1'
                sx={{ marginLeft: '10px', color: '#ffffff' }}
            >
                {props.title}
            </Typography>
        </Box>
    )
}