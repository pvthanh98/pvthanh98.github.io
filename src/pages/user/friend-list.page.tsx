import { Avatar, Button, Container, Grid, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { LinenearProgressLoading } from '../../components/common/common-component';
import { NavComponent } from '../../components/common/nav/nav';
import { UserCardComponent } from '../../components/common/user-card.component';
import axios from 'axios';
import { appendUserAction, updateFriendAction, updateUserAction } from '../../redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../redux/actions/auth.action';
import { RootState } from '../../redux/store';
import { UserSideBarComponent } from '../../components/common/nav/user-side-bar';
import { FriendCardComponent } from '../../components/common/friend-card.component';
import { FriendCard } from '../../components/common/card';
import { updateUserSidebarAction } from '../../redux/actions/common.action';
import { UserSideBarEnum } from '../../types/common.type';


export const UserFriendList = () => {
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const friends = useSelector((state: RootState) => state.users.friends);
    const userSidebarValue = useSelector((state: RootState) => state.common.userSidebar);
    const [searchValue, setSearchValue] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        loadFriends();
        dispatch(updateUserSidebarAction(UserSideBarEnum.FRIEND_LIST))
    }, [])

    const loadFriends = async () => {
        try {
            setIsLoad(true)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/user/friend`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            const resultsConvert = []
            for (let data of response.data.result) {
                resultsConvert.push({
                    id: data.friend.id,
                    firstName: data.friend.firstName,
                    lastName: data.friend.lastName,
                    image: data.friend.image,
                    status: data.status,
                    email: data.friend.email
                })
            }
            dispatch(updateFriendAction(resultsConvert))
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

    const unFriend = async (friendId: string) => {
        try {
            setIsLoad(true)
            const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST}/user/friend/unfriend`, {
                friendId
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            loadFriends()
            setIsLoad(false)
        } catch (e: any) {
            if (e.response.status === 401) {
                localStorage.removeItem("accessToken");
                dispatch(setAuth(false));
            }
            if (e.response.status === 403) {
                alert("Permission denied")
            }

            if (e.response.status === 400) {
                alert(e.response.data.message)
            }
            setIsLoad(false)
        }
    }

    return (
        <Container>
            <LinenearProgressLoading isLoad={isLoad} />
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <UserSideBarComponent activeValue={userSidebarValue} />
                </Grid>
                <Grid item xs={12} md={8}>
                    {
                        friends.map(friend => (
                            <FriendCard
                                key={friend.id}
                                {...friend}
                                unFriend={unFriend}
                            />
                        ))
                    }
                </Grid>
            </Grid>
        </Container>
    )
}