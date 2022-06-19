import { Box } from '@mui/system';
import { Avatar, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux/actions/auth.action';

export interface userCardComponentProps {
    id:string, firstName: string, lastName: string, email: string, isActive: boolean, createdAt: string, image: string
}

export const UserCardComponent = ({id, firstName, lastName, email, isActive, createdAt, image }: userCardComponentProps) => {
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const dispatch = useDispatch();

    const onSendFriendRequest = async () => {
        try {
            setIsLoad(true)
            await axios.post(`${process.env.REACT_APP_SERVER_HOST}/user/friend`,
                {
                    friendId: id
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                }
            );
            setIsLoad(false)
        } catch (e: any) {
            if (e.response.status === 401) {
                localStorage.removeItem("accessToken");
                dispatch(setAuth(false))
            }
            if (e.response.status === 403) {
                alert("Permission denied")
            }
            console.log(e.response.data)
            setIsLoad(false)
        }
    }

    return (
        <Box
            sx={{
                border: "2px solid #bbbbbb",
                padding: "16px",
                width: "95%",
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
                minWidth: "200px"
            }}>
                <Button 
                    sx={{ marginTop: "8px", minWidth: "24px" }} 
                    variant="contained" color="primary"
                    onClick={onSendFriendRequest}
                >
                    {isLoad ? <CircularProgress color="inherit" />: "Send Request"}
                </Button>
            </Box>
        </Box>
    )
}