import { Avatar, Button, Container, Grid, Input, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { LinenearProgressLoading } from '../../components/common/common-component';
import { NavComponent } from '../../components/common/nav/nav';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile.action';
import { setAuth } from '../../redux/actions/auth.action';
import { RootState } from '../../redux/store';
import moment from 'moment';
import { ProfileCard } from '../../components/common/card';

export const ProfilePage = () => {
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [isModified, setIsModified] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const dispatch = useDispatch();
    const profile = useSelector((state: RootState) => state.profile.value)

    useEffect(() => {
        loadProfile();
    }, [])

    useEffect(() => {
        copyDataFromProfile();
    }, [profile])

    const copyDataFromProfile = () => {
        setFirstName(profile.firstName);
        setLastName(profile.lastName);
        setImage(profile.image)
    }

    const loadProfile = async () => {
        try {
            setIsLoad(true);
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/user/profile`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            dispatch(updateProfile(response.data))
            setIsLoad(false)
        } catch (e: any) {
            if (e.response && e.response.status === 401) {
                dispatch(setAuth(false));
                localStorage.removeItem("accessToken");
            }
            if (e.response.status === 403) {
                alert("Permission denied")
            }
            setIsLoad(false)
        }
    }
    return (
        <Container>
            <Grid item xs={12} md={12}>
                <LinenearProgressLoading isLoad={isLoad} />
            </Grid>
            <Grid container sx={{marginTop:"4px"}}>
               <ProfileCard profile={profile} />  
            </Grid>
        </Container >
    )
}
