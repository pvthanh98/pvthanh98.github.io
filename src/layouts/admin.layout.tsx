import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Logo } from "./components/logo";
import { SidbarMenu } from "./components/side-bar-menu";
import { TopbarHeader } from "./components/topbar-header";

interface AdminLayoutProps {
    children: any
}

function AdminLayout({ children }: AdminLayoutProps) {
    const location = useLocation();
    const [path, setPath] = useState('');

    useEffect(()=>{
        setPath(location.pathname)
    },[location.pathname])
    
    return (
        <Grid container sx={{
            minHeight: '100vh'
        }}>
            <Grid
                item
                xs={12}
                md={2}
                sx={{
                    backgroundColor: "#173948",
                    border: '1px solid #173948',
                    boxShadow: '10px 0 5px -2px #173948',
                }}
            >
                <Logo />
                <SidbarMenu path={path} />
            </Grid>
            <Grid
                item
                xs={12}
                md={10}
                sx={{
                    backgroundColor: "#ffffff"
                }}
            >
                <TopbarHeader />
                <Box
                    sx={{
                        backgroundColor: '#f9f9f9',
                        minHeight: '92%',
                        padding: '18px',
                        paddingTop: '8px',
                        paddingBottom: '8px'
                    }}
                >
                    {children}
                </Box>
            </Grid>
        </Grid>
    );
}

export default AdminLayout;