import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"

interface MessageProps {
    name: string;
    id: string;
    body: string;
}

const MessageLeft = ({ id, name, body }: MessageProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                marginBottom: "8px"
            }}
        >
            <Avatar
                sx={{
                    height: "50px",
                    width: "50px",
                }}
            />
            <Box>
                <Box
                    sx={{ marginLeft: "8px", }}
                >
                    <Typography
                        variant="h6"
                    >
                        {name}
                    </Typography>
                    <Typography variant="body2" fontSize={10}>
                        {id}
                    </Typography>
                </Box>
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
                    {body}
                </Box>
            </Box>
        </Box>
    )
}

const MessageRight = ({ id, name, body }: MessageProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "right",
                marginBottom: "8px"
            }}
        >
            <Box>
                <Box
                    sx={{
                        textAlign: "right"
                    }}
                >
                    <Typography
                        variant="h6"
                    >
                        {name}
                    </Typography>
                    <Typography variant="body2" fontSize={10}>
                        {id}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        border: "1px solid #747474",
                        padding: "16px",
                        borderRadius: "12px",
                        backgroundColor: "#792e0a",
                        color: "#f1f1f1"
                    }}
                >
                    {body}
                </Box>
            </Box>

            <Avatar
                sx={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "8px"
                }}
            />
        </Box>
    )
}

export interface MessageItemProps {
    isLeft: boolean;
    name: string;
    body: string;
    id: string
}

export const MessageItem = (props: MessageItemProps) => {
    if (props.isLeft) return <MessageLeft {...props} />
    return <MessageRight {...props} />
}