import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import moment from 'moment';

interface CardMessengerProps {
    firstName: string;
    lastName: string;
    image: string;
    lastMessage: string;
    updatedAt: string;
}

export const CardMessenger = (props: CardMessengerProps) => {
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
                    src={props.image}
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
                        {props.firstName} {props.lastName}
                    </Typography>
                    <Typography variant="body2" textAlign={"justify"}>
                        {props.lastMessage}
                    </Typography>
                </Box>
            </Box>
            <Box
            >
                {moment(props.updatedAt).fromNow()}
            </Box>

        </Box>
    )
}