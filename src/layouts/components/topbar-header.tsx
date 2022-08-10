import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { NotificationIconButton } from "./icon-button"
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export const TopbarHeader = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#ffffff',
                minHeight: '8%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: '12px',
                paddingLeft: '12px'
            }}
        >
            <Box>
                <IconButton>
                    <MenuIcon />
                </IconButton>

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                }}
            >
                <NotificationIconButton />
                <Avatar
                    src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/280141999_1666459857024930_4547795600855370134_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cjRPKMcKMnMAX-uX79p&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT9BmTYH32iq96NN6PaJSvgO7UA5TJ42HQG49ZAKsTphMg&oe=62F8B786"
                    sx={{ width: 40, height: 40, marginRight: '20px' }}
                />
                <Box
                    sx={{
                        marginRight: '20px'
                    }}
                >
                    <Box
                        sx={{
                            fontSize: '18px'
                        }}
                    >
                        Thanh Phan
                    </Box>
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
                            fontSize: '14px'
                        }}
                    >
                        Admin
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}