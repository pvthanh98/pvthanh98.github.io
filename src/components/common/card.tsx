import { Avatar, Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import moment from 'moment';
import { FriendCardComponentProps } from "./friend-request-card.component";

interface ProfileCard {
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    isActive: boolean;
    createdAt: string;
}


export interface ProfileCardProps {
    profile: ProfileCard;
}

export interface UserCardProps {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    isActive: boolean;
    createdAt: string;
    sendFriendRequest: (friendId: string) => void;
}

export interface FriendCardProps {
    id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    image?: string;
    isActive?: boolean;
    createdAt?: string;
    status?: string;
    unFriend: (friendId: string) => void;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
    return (
        <Grid
            item
            container
            xs={12}
            md={6}
            sx={{
                padding: "8px",
            }}
        >
            <Grid
                container
                sx={{
                    border: "1px solid #193f50",
                    padding: "8px",
                    backgroundColor: "#173948",
                    color: "#f1f1f1",
                    boxShadow: "3px 3px #173948",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={7}
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
                            src={profile.image}
                        />
                        <Typography
                            variant="h4"
                            sx={{
                                marginLeft: "8px"
                            }}
                        >
                            {profile.firstName} {profile.lastName}
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ marginTop: "8px" }}>
                        Email: {profile.email}
                    </Typography>
                    <Typography variant="body1">
                        Status: {profile.isActive ? "Active" : "Disactive"}
                    </Typography>
                    <Typography variant="body1">
                        Join Date: {moment(profile.createdAt).format("DD MMM YYYY")}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                        textAlign: "right"
                    }}
                >
                    {/* <Button
                        variant="contained"
                        color="inherit"
                    >
                        <Typography variant="body1" style={{ color: "#173948" }}>
                            Update
                        </Typography>
                    </Button> */}
                </Grid>
            </Grid>
        </Grid >
    )
}


export const UserCard = ({
    id, firstName,
    lastName,
    email,
    image,
    isActive,
    createdAt,
    sendFriendRequest
}: UserCardProps) => {
    return (
        <Grid
            item
            container
            xs={12}
            md={12}
            sx={{
                padding: "8px",
            }}
        >
            <Grid
                container
                sx={{
                    border: "1px solid #193f50",
                    padding: "16px",
                    backgroundColor: "#173948",
                    color: "#f1f1f1",
                    boxShadow: "3px 3px #173948",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={7}
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
                        <Typography
                            variant="h4"
                            sx={{
                                marginLeft: "8px"
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ marginTop: "8px" }}>
                        Email: {email}
                    </Typography>
                    <Typography variant="body1">
                        Status: {isActive ? "Active" : "Disactive"}
                    </Typography>
                    <Typography variant="body1">
                        Join Date: {moment(createdAt).format("DD MMM YYYY")}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                        textAlign: "right"
                    }}
                >
                    <Button
                        variant="contained"
                        color="inherit"
                        onClick={()=>sendFriendRequest(id)}
                    >
                        <Typography variant="body1" style={{ color: "#173948" }}>
                            Send Request
                        </Typography>
                    </Button>
                    {/* <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            marginLeft:"8px"
                        }}
                    >
                        <Typography variant="body1" style={{ color: "#f1f1f1" }}>
                           Profile
                        </Typography>
                    </Button> */}
                </Grid>
            </Grid>
        </Grid >
    )
}


export const FriendCard = ({
    id, 
    firstName,
    lastName,
    email,
    image,
    isActive,
    createdAt,
    status,
    unFriend
}: FriendCardProps) => {
    return (
        <Grid
            item
            container
            xs={12}
            md={12}
            sx={{
                padding: "8px",
            }}
        >
            <Grid
                container
                sx={{
                    border: "1px solid #193f50",
                    padding: "16px",
                    backgroundColor: "#173948",
                    color: "#f1f1f1",
                    boxShadow: "3px 3px #173948",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={7}
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
                        <Typography
                            variant="h4"
                            sx={{
                                marginLeft: "8px"
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ marginTop: "8px" }}>
                        Email: {email}
                    </Typography>
                    <Typography variant="body1">
                        Status: {status}
                    </Typography>
                    <Typography variant="body1">
                        Join Date: {moment(createdAt).format("DD MMM YYYY")}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                        textAlign: "right"
                    }}
                >
                    <Button
                        variant="contained"
                        color="error"
                        onClick={()=>unFriend(id)}
                    >
                        <Typography variant="body1" style={{ color: "#f1f1f1" }}>
                            Unfriend
                        </Typography>
                    </Button>
                    {/* <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            marginLeft:"8px"
                        }}
                    >
                        <Typography variant="body1" style={{ color: "#f1f1f1" }}>
                           Profile
                        </Typography>
                    </Button> */}
                </Grid>
            </Grid>
        </Grid >
    )
}



export const FriendRequestCard = ({
    friend,
    onResponsRequset
}: FriendCardComponentProps) => {
    return (
        <Grid
            item
            container
            xs={12}
            md={12}
            sx={{
                padding: "8px",
            }}
        >
            <Grid
                container
                sx={{
                    border: "1px solid #193f50",
                    padding: "16px",
                    backgroundColor: "#173948",
                    color: "#f1f1f1",
                    boxShadow: "3px 3px #173948",
                }}
            >
                <Grid
                    item
                    xs={12}
                    md={7}
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
                        <Typography
                            variant="h4"
                            sx={{
                                marginLeft: "8px"
                            }}
                        >
                            {friend.firstName} {friend.lastName}
                        </Typography>
                    </Box>
                    {/* <Typography variant="body1" sx={{ marginTop: "8px" }}>
                        Email: {friend.email}
                    </Typography> */}
                    <Typography variant="body1">
                        Status: {friend.status}
                    </Typography>
                    <Typography variant="body1">
                        Join Date: {moment(friend.createdAt).format("DD MMM YYYY")}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                        textAlign: "right"
                    }}
                >
                    <Button
                        variant="contained"
                        color="inherit"
                        sx={{
                            marginLeft:"8px"
                        }}
                        onClick={() => onResponsRequset('denied', friend.friendShipId)}
                    >
                        <Typography variant="body1" style={{ color: "red" }}>
                           Denied
                        </Typography>
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            marginLeft:"8px"
                        }}
                        onClick={() => onResponsRequset('accept', friend.friendShipId)}
                    >
                        <Typography variant="body1" style={{ color: "#f1f1f1" }}>
                           Accept
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    )
}