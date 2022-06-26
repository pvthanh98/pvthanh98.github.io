import { Avatar, Button, Container, Grid, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { LinenearProgressLoading } from '../../components/common/common-component';
import { NavComponent } from '../../components/common/nav/nav';
import { UserCardComponent } from '../../components/common/user-card.component';
import axios from 'axios';
import { appendUserAction, updateFriendRequestAction, updateUserAction } from '../../redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../redux/actions/auth.action';
import { RootState } from '../../redux/store';
import { UserSideBarComponent } from '../../components/common/nav/user-side-bar';
import { FriendRequestCardComponent } from '../../components/common/friend-request-card.component';
import { FriendRequestCard } from '../../components/common/card';
import { updateUserSidebarAction } from '../../redux/actions/common.action';
import { UserSideBarEnum } from '../../types/common.type';


export const UserFriendRequest = () => {
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [isRespondingRequest, setIsRespondingRequest] = useState<boolean>(false);
    const friendRequests = useSelector((state: RootState) => state.users.friendRequests);
    const userSidebarValue = useSelector((state:RootState) => state.common.userSidebar);
    const [searchValue, setSearchValue] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateUserSidebarAction(UserSideBarEnum.FRIEND_REQUEST))
        loadFriends();
    }, [])

    const loadFriends = async () => {
        try {
            setIsLoad(true)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/user/friend-request`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            const resultsConvert = []
            for(let data of response.data.result) {
                resultsConvert.push({
                    friendShipId: data.id,
                    firstName: data.user.firstName,
                    lastName: data.user.lastName,
                    userId: data.user.id,
                    image: data.user.image,
                    status: data.status,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt
                })
            }
            dispatch(updateFriendRequestAction(resultsConvert))
            setIsLoad(false)
        } catch (e: any) {
            if (e.response.status === 401) {
                localStorage.removeItem("accessToken");
                dispatch(setAuth(false))
            }
            if (e.response.status === 403) {
                alert("Permission denied")
            }
            setIsLoad(false)
        }
    }

    const onResponsRequset = async (type: string, friendShipId: string) => {
        try {
            setIsRespondingRequest(true)
            await axios.post(`${process.env.REACT_APP_SERVER_HOST}/user/friend-request`,
                {
                    friendShipId: friendShipId,
                    action: type
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                }
            );
            setIsRespondingRequest(false)
            loadFriends()
        } catch (e: any) {
            if (e.response.status === 401) {
                localStorage.removeItem("accessToken");
                dispatch(setAuth(false))
            }
            if (e.response.status === 403) {
                alert("Permission denied")
            }
            setIsRespondingRequest(false)
        }
    }
    return (
        <Container>
            <Grid item xs={12} md={12}>
                <LinenearProgressLoading isLoad={isLoad} />
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <UserSideBarComponent activeValue={userSidebarValue} />
                </Grid>
                <Grid item xs={12} md={8} display={'flex'} flexDirection={'column'} >
                    {
                        friendRequests.map(request=>(
                            <FriendRequestCard 
                                key={request.friendShipId} 
                                friend={request} 
                                onResponsRequset={onResponsRequset}
                                isLoad={isRespondingRequest}
                            />
                        ))
                    }
                </Grid>
            </Grid>
        </Container>
    )
}