import { useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface HomePagePropType {
    socket?: any
}

export function PostProperty() {
    return (
        <Box 
            display='flex'
            sx={{
                marginTop: '4px'
            }}
        >
            <Typography
                variant="caption"
                sx={{
                    border: '1px solid #aa1414',
                    padding: '0px  8px 0px 8px',
                    background: '#aa1414',
                    color: '#ffffff',
                    borderRadius: '4px',
                    userSelect: 'none',
                    '&:active': {
                        backgroundColor: 'black'
                    },
                    '&:hover': {
                        cursor: 'pointer',
                        transform: 'translateY(2px)'
                    },
                }}
            >
                Posted on: 12 Jan, 2022
            </Typography>
            <Typography>&nbsp;&nbsp;</Typography>
            <Typography
                variant="caption"
                sx={{
                    border: '1px solid #00620d',
                    padding: '0px  8px 0px 8px',
                    background: '#00620d',
                    color: '#ffffff',
                    borderRadius: '4px',
                    userSelect: 'none',
                    '&:active': {
                        backgroundColor: 'black'
                    },
                    '&:hover': {
                        cursor: 'pointer',
                        transform: 'translateY(2px)'
                    },
                }}
            >
                Author: Thanh Phan
            </Typography>
            <Typography>&nbsp;&nbsp;</Typography>
            <Typography
                variant="caption"
                sx={{
                    border: '1px solid #063762',
                    padding: '0px  8px 0px 8px',
                    background: '#063762',
                    color: '#ffffff',
                    borderRadius: '4px',
                    userSelect: 'none',
                    '&:active': {
                        backgroundColor: 'black'
                    },
                    '&:hover': {
                        cursor: 'pointer',
                        transform: 'translateY(2px)'
                    },
                }}
            >
                Category: My Stories
            </Typography>
            <Typography>&nbsp;&nbsp;</Typography>
            <Typography
                variant="caption"
                sx={{
                    border: '1px solid #eaeaea',
                    padding: '0px  8px 0px 8px',
                    background: '#eaeaea',
                    color: '#000000',
                    borderRadius: '4px',
                    userSelect: 'none',
                    '&:active': {
                        backgroundColor: 'black',
                        color: '#ffffff'
                    },
                    '&:hover': {
                        cursor: 'pointer',
                        transform: 'translateY(2px)'
                    },
                }}
            >
                Tags: Others
            </Typography>
        </Box>
    );
}
