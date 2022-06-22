import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const ChatHeader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: "#173948",
                color: "#f1f1f1",
                padding: "8px",
                borderRadius:"8px"
            }}
        >
            <Avatar
                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/280141999_1666459857024930_4547795600855370134_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MWAXWN-uNxkAX9HXHVA&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT_zQ8LpsRRvtNRw2-LdIMmvkhrbb5bKFyo0HaEVb6Cb2A&oe=62B77546"
                sx={{
                    minHeight: "60px",
                    width: "auto"
                }}
            />
            <Box
                sx={{
                    padding: "8px"
                }}
            >
                <Typography variant="h5">
                    Thanh Phan
                </Typography>
                <Typography variant="body2">
                    22/12/2022
                </Typography>
            </Box>
        </Box>
    )
}