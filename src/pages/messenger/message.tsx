import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const MessageLeft = () => {
    return (
        <Box
            sx={{
                display: "flex",
                marginBottom:"8px"
            }}
        >
            <Avatar
                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/280141999_1666459857024930_4547795600855370134_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MWAXWN-uNxkAX9HXHVA&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT_zQ8LpsRRvtNRw2-LdIMmvkhrbb5bKFyo0HaEVb6Cb2A&oe=62B77546"
                sx={{
                    height: "50px",
                    width: "50px",
                }}
            />
            <Box
                sx={{
                    // width:"200px",
                    border: "1px solid #747474",
                    marginLeft: "8px",
                    marginrRight: "8px",
                    padding: "16px",
                    borderRadius: "12px"
                }}
            >
                Hello. how are you?
            </Box>
        </Box>
    )
}

export const MessageRight = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "right",
                marginBottom:"8px"
            }}
        >
            <Box
                sx={{
                    border: "1px solid #747474",
                    padding: "16px",
                    borderRadius: "12px",
                    backgroundColor: "#792e0a",
                    color: "#f1f1f1"
                }}
            >
                Hello. how are you?
            </Box>
            <Avatar
                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/280141999_1666459857024930_4547795600855370134_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MWAXWN-uNxkAX9HXHVA&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT_zQ8LpsRRvtNRw2-LdIMmvkhrbb5bKFyo0HaEVb6Cb2A&oe=62B77546"
                sx={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "8px"
                }}
            />
        </Box>
    )
}