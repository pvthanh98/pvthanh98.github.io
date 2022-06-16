import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/actions/auth.action';

import { Button, CircularProgress, Input } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';


export const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const dispatch = useDispatch();
    const authState = useSelector((state: RootState) => state.isAuth)

    const onEmailChange = (e: any) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e: any) => {
        setPassword(e.target.value)
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setIsLoad(true)
            const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST}/auth/login`, {
                email, password
            });
            console.log(response.data)
            localStorage.setItem("accessToken", response.data.access_token)
            dispatch(setAuth(true))
            setIsLoad(false);
        } catch (e: any) {
            console.log(e)
            if (e.response.status === 401) {
                dispatch(setAuth(false))
                localStorage.removeItem("accessToken");
            }
            setIsLoad(false)
        }
    }

    return (
        <Grid container spacing={2}>
            {authState.value && <Navigate to="/finance" />}
            <Grid item xs={12} md={12}>
                <div style={{
                    marginTop: "8px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                }}>
                    <form
                        onSubmit={onSubmit}
                        style={{
                            width: "500px"
                        }}
                    >
                        <Typography variant='h5' style={{
                            marginTop: "10px"
                        }}>
                            Sign In
                        </Typography>
                        <Typography variant='body1' style={{
                            marginTop: "20px"
                        }}>
                            Email
                        </Typography>
                        <Input
                            type="text"
                            onChange={onEmailChange}
                            value={email}
                            style={{
                                width: "100%"
                            }}
                        />
                        <Typography variant='body1' style={{
                            marginTop: "10px",
                        }}>
                            Password
                        </Typography>
                        <Input
                            type="password"
                            onChange={onPasswordChange}
                            value={password}
                            style={{
                                width: "100%"
                            }}
                        />
                        <div style={{

                        }}>
                            <Button
                                style={{
                                    marginTop: "8px",
                                    width: "100%"
                                }}
                                variant="contained"
                                color="success"
                                type="submit"
                            >
                               {
                                isLoad ? <CircularProgress color="inherit" size="25px" /> : "Login"
                               }
                                
                            </Button>

                        </div>
                    </form>
                </div>
            </Grid>

        </Grid>
    )
}