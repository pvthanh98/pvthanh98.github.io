import { Avatar, Button, Container, Grid, TextField, Typography, } from '@mui/material';
import { Box } from '@mui/system';
import { FriendCard } from '../../components/common/card';
import { LinenearProgressLoading } from '../../components/common/common-component';
import { CardMessenger } from './card-messenger';
import { ChatHeader } from './chat-header-messenger';
import SendIcon from '@mui/icons-material/Send';


export const MessengerPage = () => {
    return (
        <Box>
            <Grid item xs={12} md={12}>
                <LinenearProgressLoading isLoad={false} />
            </Grid>
            <Grid container sx={{ marginTop: "0px", }}>
                <Grid item xs={12} md={3} sx={{ paddingLeft: "8px" }}>
                    {/* <CardMessenger />
                    <CardMessenger />
                    <CardMessenger />
                    <CardMessenger />
                    <CardMessenger />
                    <CardMessenger /> */}
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={9}
                    sx={{
                        padding: "4px 8px 0px 8px"
                    }}
                >
                    <ChatHeader />
                    <Box
                        sx={{
                            border: "1px solid #e0e0e0",
                            height: "470px",
                            borderRadius: "8px",
                            paddingTop: "8px",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                            overflow: "scroll",
                            overflowX: "hidden"
                        }}
                    >
                        {/* <MessageLeft />
                        <MessageRight />
                        <MessageLeft />
                        <MessageRight />
                        <MessageLeft />
                        <MessageRight />
                        <MessageLeft />
                        <MessageRight />
                        <MessageLeft />
                        <MessageRight />
                        <MessageLeft />
                        <MessageRight /> */}
                    </Box>
                    <Box
                        sx={{display:'flex'}}
                    >
                        <TextField
                            sx={{
                                width:"100%"
                            }}
                        >
                            Place.....
                        </TextField>
                        <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                            SEND
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}
