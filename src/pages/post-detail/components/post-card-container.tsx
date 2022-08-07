import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PostCard } from "./post-card";
import { SidebarTitle } from "./sidebar-title";

export function PostCardContainer() {
    return (
        <Box
            sx={{
                marginTop:"12px"
            }}
        >
            <SidebarTitle title="Newest Posts" color="success" />
            <PostCard
                src={'https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?format=jpg&width=960'}
                title='How To Become A Flight Attendant And Make $61,640 Each Year'
            />
            <PostCard
                src={'https://obj.shine.cn/files/2022/04/28/a4002daa-433c-45bc-b0bd-4b29c7db3be1_0.jpg'}
                title='10 Best Things I Did To Build A $5 Million Dollar Blog'
            />
            <PostCard
                src={'https://cdn-attachments.timesofmalta.com/a8bcb4dc15fae58f6fff211683a1191247bdea90-1589029621-5eb6aaf5-1920x1280.jpg'}
                title='Best Ways To Find Virtual Assistant Jobs In 2022'
            />
            <PostCard
                src={'https://static01.nyt.com/images/2022/07/15/business/13Techfix-illo/13Techfix-illo-videoLarge.jpg'}
                title='How to Make Money as an Airbnb Experience Host'
            />
        </Box>
    );
}
