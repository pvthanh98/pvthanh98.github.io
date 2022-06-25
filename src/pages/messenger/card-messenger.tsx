import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const CardMessenger = () => {
    return (
        <Box
            sx={{
                width:"100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #a89898",
                padding: "0px 8px 0px 8px",
                backgroundColor: "#ddd9d9",
                cursor: "pointer",
                boxSizing: "border-box",
                '&:hover': {
                    backgroundColor: "#173948",
                    color: "white"
                },
                '&:active': {
                    transform: "translateY(4px)"
                },
                marginTop:"4px",
                borderRadius:"8px"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",

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
                        padding: "8px",
                    }}
                >
                    <Typography variant="h6">
                        ThanhPhan
                    </Typography>
                    <Typography variant="body2" textAlign={"justify"}>
                        Còn áp lực như hồi thực tập không?
                        Còn áp lực như hồi
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    minWidth: "50px",
                    textAlign: "center"
                }}
            >
                2 giờ
            </Box>

        </Box>
    )
}