import { Box } from "@mui/system"

export interface CardContainerPropType {
    children: React.ReactNode,
    sx?: Record<string, string>
}

export const CardContainer = (
    { 
        children,
        sx = {}
    }: CardContainerPropType
) => {
    return (
        <Box
            sx={{
                background: '#ffffff',
                padding: '24px',
                borderRadius: '12px',
                ...sx
            }}
        >
            {children}
        </Box>
    )
}