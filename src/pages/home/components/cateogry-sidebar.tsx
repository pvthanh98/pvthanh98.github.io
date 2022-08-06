import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ComputerIcon from '@mui/icons-material/Computer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function CategorySidebard() {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
        >
            <ListItemButton>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Personal" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ImportantDevicesIcon />
                </ListItemIcon>
                <ListItemText primary="Technology" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ComputerIcon />
                </ListItemIcon>
                <ListItemText primary="Programming Languages" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LightbulbIcon />
                </ListItemIcon>
                <ListItemText primary="Life Hacks" />
            </ListItemButton>
        </List>
    );
}