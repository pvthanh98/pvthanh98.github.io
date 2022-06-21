import { Avatar, Button, Container, Grid, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { LinenearProgressLoading } from '../../components/common/common-component';
import { NavComponent } from '../../components/common/nav/nav';
import { UserCardComponent } from '../../components/common/user-card.component';
import axios from 'axios';
import { appendUserAction, updateUserAction } from '../../redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../redux/actions/auth.action';
import { RootState } from '../../redux/store';
import { UserSideBarComponent } from '../../components/common/nav/user-side-bar';
import { UserCard } from '../../components/common/card';
import { updateUserSidebarAction } from '../../redux/actions/common.action';
import { UserSideBarEnum } from '../../types/common.type';


export const UserPage = () => {
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const users = useSelector((state: RootState) => state.users.value);
    const userSidebarValue = useSelector((state: RootState) => state.common.userSidebar);
    const [searchValue, setSearchValue] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateUserSidebarAction(UserSideBarEnum.ALL_USER))
        loadUsers();
    }, [])

    const onSearch = async (e: any) => {
        e.preventDefault()
        try {
            setIsLoad(true)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/user?search=${searchValue}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            dispatch(updateUserAction(response.data.result))
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

    const loadUsers = async () => {
        try {
            setIsLoad(true)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/user`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            dispatch(updateUserAction(response.data.result))
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

    const sendFriendRequest = async (friendId: string) => {
        try {
            setIsLoad(true)
            const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST}/user/friend`,{
                friendId
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            loadUsers()
        } catch (e: any) {
            console.log(e, )
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
            <Grid item xs={12} md={12}>
                <LinenearProgressLoading isLoad={isLoad} />
            </Grid>
            <Grid container>
                <Grid item xs={12} md={3}>
                    <UserSideBarComponent activeValue={userSidebarValue} />
                </Grid>
                <Grid item xs={12} md={9} display={'flex'} flexDirection={'column'} >
                    <form
                        onSubmit={onSearch}
                        style={{
                            marginLeft:"8px",
                            marginTop:"8px"
                        }}
                    >
                        Name
                        <TextField
                            sx={{
                                width: "100%",
                                marginTop: "8px"
                            }}
                            variant="standard"
                            placeholder='Find users...'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </form>
                    <Box
                        sx={{
                            marginTop: "8px",
                            textAlign: "right"
                        }}
                    >
                        <Button variant='contained' type="submit">Search</Button>
                    </Box>
                    <Grid container>
                        {
                            users.map(user => (
                                <UserCard
                                    key={user.id}
                                    id={user.id}
                                    firstName={user.firstName}
                                    lastName={user.lastName}
                                    email={user.email}
                                    createdAt={user.createdAt}
                                    isActive={user.isActive}
                                    image={user.image}
                                    sendFriendRequest={sendFriendRequest}
                                />
                            ))
                        }

                    </Grid>
                    <Typography
                        variant="body1"
                        fontSize={'16px'} fontStyle="italic"
                        sx={{
                            paddingTop: "16px",
                            paddingBottom: "16px",
                            textDecoration: "underline",
                            cursor: "pointer"
                        }}
                    >
                        {
                            users.length > 0 && 'Load more'
                        }
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}