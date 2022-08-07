import { SidebarTitle } from './sidebar-title';
import CategorySidebard from './cateogry-sidebar';
import { Box } from '@mui/material';

export default function CategorySidebardContainter() {

    return (
        <Box
            sx={{
                marginTop: '12px'
            }}
        >
            <SidebarTitle title="Explore By Category" color="secondary" />
            <CategorySidebard />
        </Box>
    );
}