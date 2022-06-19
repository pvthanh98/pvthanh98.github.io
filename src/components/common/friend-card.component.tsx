import { Box } from '@mui/system';
import { Avatar, Typography } from '@mui/material';
import { FriendRowType } from '../../types/common.type';

export interface FriendCardComponentProps {
    friend: FriendRowType
}

export const FriendCardComponent = ({friend}: FriendCardComponentProps) => {
    return (
        <Box
            sx={{
                border: "2px solid #bbbbbb",
                padding: "16px",
                width: "95%",
                boxShadow: "2px 2px #bbbbbb",
                display: "flex",
                alignItems: "center",
                marginTop: "8px"
            }}
        >
            <Avatar
                sx={{
                    height: "80px",
                    width: "80px"
                }}
                src={friend.image}
            />
            <Box
                sx={{
                    marginLeft: "16px"
                }}
            >
                <Box
                    sx={{
                        marginTop: "16px"
                    }}
                >
                    <Typography variant="h5">
                    {friend.firstName} {friend.lastName}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        marginTop: "16px"
                    }}
                >
                    {friend.status}
                </Box>
            </Box>

        </Box>

    )
}