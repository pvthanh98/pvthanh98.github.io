import { Box } from "@mui/system";
import { MenuItem } from "./menu-item";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryIcon from '@mui/icons-material/Category';
import * as path from '../../routes/path';
import { useNavigate } from "react-router-dom";

const MenuItems = [
    {
        title: 'Dashboard',
        icon: DashboardIcon,
        path: path.ADMIN_DASHBOARD
    },
    {
        title: 'Categories',
        icon: CategoryIcon,
        path: path.ADMIN_CATEGORY
    },
    {
        title: 'Tags',
        icon: LocalOfferIcon,
        path: path.ADMIN_TAG
    },
    {
        title: 'Posts',
        icon: PostAddIcon,
        path: path.ADMIN_POST
    },
    {
        title: 'Users',
        icon: AssignmentIndIcon,
        path: path.ADMIN_USER
    },
]

export interface SidebarMenuPropType {
    path: string
}

export const SidbarMenu = (props: SidebarMenuPropType) => {
    const navigate = useNavigate()

    const onlickItem = (link: string) => {
        navigate(link);
    }
    const renderMenuItems = () => {
        return MenuItems.map(item => (
            <MenuItem 
                key={item.title} 
                title={item.title} 
                icon={item.icon} 
                onClick={onlickItem} 
                path={item.path} 
                isActive={props.path === item.path}
            />
        ))
    }
    return (
        <Box>
            {renderMenuItems()}   
        </Box>
    )
}