import { Typography } from "@mui/material"

export const Logo = () => {
    return (
        <Typography
            sx={{
                paddingLeft: '24px',
                paddingTop: '12px',
                paddingBottom: '12px',
                color: '#ffffff',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                fontSize: "24px",
                backgroundColor: '#103647'
            }}
        >
            Thanh Phan
        </Typography>
    )
}