import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { MessengerMessageItem as MessengerMessageItemInterface } from "../../types/message.type"
interface MessengerMessageItemProps extends MessengerMessageItemInterface {
    isMe?: boolean //myuserId
}

const MessageLeft = (props: MessengerMessageItemProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                marginBottom: "16px"
            }}
        >
            <Avatar
                src={props.fromUser.image}
                sx={{
                    height: "50px",
                    width: "50px",
                }}
            />
            <Box
                sx={{
                    border: "1px solid #747474",
                    padding: "16px",
                    borderRadius: "12px",
                    backgroundColor: "#792e0a",
                    color: "#f1f1f1",
                    marginLeft:"8px"

                }}
            >
                {props.body}
            </Box>
        </Box>
    )
}
const MessageRight = (props: MessengerMessageItemProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "right",
                marginBottom: "16px"
            }}
        >
            <Box
                sx={{
                    border: "1px solid #747474",
                    marginLeft: "8px",
                    marginrRight: "8px",
                    padding: "16px",
                    borderRadius: "12px",
                }}
            >
                {props.body}
            </Box>
            <Avatar
                src={props.fromUser.image}
                sx={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "8px"
                }}
            />
        </Box>
    )
}

export const MessengerMessageItem = (props: MessengerMessageItemProps) => {
    return props.isMe ? (
        <MessageLeft {...props} />
    ) : (
        <MessageRight {...props} />
    )
}