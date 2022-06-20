import { Avatar, Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import moment from 'moment';

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

export const ProfileCard = ({profile}: ProfileCardProps) => {
    return (
        <Grid
            item
            container
            xs={12}
            md={6}
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
                <Button
                    variant="contained"
                    color="inherit"
                >
                    <Typography variant="body1" style={{ color: "#173948" }}>
                        Update
                    </Typography>
                </Button>
            </Grid>
        </Grid >
    )
}