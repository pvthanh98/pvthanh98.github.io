import Typography from '@mui/material/Typography';

export interface TitlePropType {
    title: string,
}

export function Title({ title }: TitlePropType) {
    return (
        <Typography
            sx={{
                borderRadius: '4px',
                fontWeight: '700',
                userSelect: 'none',
                '&:hover': {
                    transform: 'translateY(2px)'
                },
                color: '#53131E',
                cursor: 'pointer'
            }}
        >
            {title}
        </Typography>
    );
}