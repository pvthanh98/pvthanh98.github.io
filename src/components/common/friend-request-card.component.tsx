import { Box } from '@mui/system';
import { Avatar, Button, CircularProgress, Typography } from '@mui/material';
import { FriendRequestRowType } from '../../types/common.type';
import moment from 'moment';
import { useState } from 'react';
import { setAuth } from '../../redux/actions/auth.action';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export interface FriendCardComponentProps {
    friend: FriendRequestRowType,
    onResponsRequset: (type: string, friendShipId: string) => void,
    isLoad: boolean
}

export const FriendRequestCardComponent = ({ friend, onResponsRequset, isLoad }: FriendCardComponentProps) => {
    const dispatch = useDispatch()
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
                        {friend.firstName} {friend.lastName}
                    </Box>
                    <Box
                        sx={{
                            marginTop: "8px"
                        }}
                    >
                        Join Date: {moment(friend.createdAt).fromNow()}
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                minWidth: "200px"
            }}>
                <Button
                    sx={{ marginTop: "8px", minWidth: "24px" }}
                    variant="outlined" color="primary"
                    onClick={() => onResponsRequset('denied', friend.friendShipId)}
                >
                    {isLoad ? <CircularProgress color="inherit" /> : "Denied"}
                </Button>
                <Button
                    sx={{ marginTop: "8px", minWidth: "24px", marginLeft: "8px" }}
                    variant="contained" color="primary"
                    onClick={() => onResponsRequset('accept',friend.friendShipId)}
                >
                    {isLoad ? <CircularProgress color="inherit" /> : "Accept"}
                </Button>
            </Box>
        </Box>
    )
}