import { Box } from '@mui/system';
import { Avatar, Button } from '@mui/material';

export interface userCardComponentProps {
    firstName: string, lastName: string, email: string, isActive: boolean, createdAt: string, image: string
}

export const UserCardComponent = ({ firstName, lastName, email, isActive, createdAt, image }: userCardComponentProps) => {
    return (
        <Box
            sx={{
                border: "2px solid #bbbbbb",
                padding: "16px",
                width: "100%",
                boxShadow: "2px 2px #bbbbbb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "8px"
            }}
        >
            <Box
            sx={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <Avatar
                sx={{
                    height: "80px",
                    width: "80px"
                }}
                src={image}
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
                    {firstName} {lastName}
                </Box>
                <Box
                    sx={{
                        marginTop: "16px"
                    }}
                >
                    Email: {email}
                </Box>

                <Box
                    sx={{
                        marginTop: "8px"
                    }}
                >
                    Status:  Active
                </Box>
                <Box
                    sx={{
                        marginTop: "8px"
                    }}
                >
                    Join Date: {createdAt}
                </Box>
            </Box>
        </Box>
        <Box sx={{
            minWidth:"200px"
        }}>
            <Box>
                <Button sx={{minWidth:"24px"}} variant="outlined" color="inherit">View Profile</Button>
            </Box>
            <Box>
            <Button sx={{marginTop:"8px",minWidth:"24px"}} variant="contained" color="primary">Send Request</Button>
            </Box>  
            
        </Box>
        </Box>
    )
}