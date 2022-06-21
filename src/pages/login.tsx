import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/actions/auth.action';

import { Button, CircularProgress, Container, Input } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { Box } from '@mui/system';
import AppBarOnlyLogoComponent from '../components/common/app-bar-only-logo';


export const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const dispatch = useDispatch();
    const authState = useSelector((state: RootState) => state.isAuth)
    const navigate = useNavigate();
    

    const onEmailChange = (e: any) => {
        setEmail(e.target.value)
    }

    const onPasswordChange = (e: any) => {
        setPassword(e.target.value)
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (email !== "" && password !== "") {
                setIsLoad(true)
                const response = await axios.post(`${process.env.REACT_APP_SERVER_HOST}/auth/login`, {
                    email, password
                });
                localStorage.setItem("accessToken", response.data.access_token)
                dispatch(setAuth(true))
                setIsLoad(false);
                navigate("/")
            } else {
                alert(
                    "Email or password cannot be empty"
                )
            }
        } catch (e: any) {
            if (e.response.status === 401) {
                alert(
                    "Incorrect email or password"
                )
            }
            setIsLoad(false)
        }
    }

    return (
        <Box>
            <AppBarOnlyLogoComponent />
            <Container>
                <Grid container spacing={2}>
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
                                    width: "400px",
                                    border: "2px solid #bebebe",
                                    padding: "30px",
                                    minHeight: "600px",
                                    borderRadius: "12px",
                                    boxShadow: "5px 10px #888888"
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
                                    <Box sx={{ display: "flex", justifyContent: "right", marginTop: "8px" }}>
                                        <Link to="/">Go to home page</Link>
                                    </Box>
                                </div>
                            </form>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}