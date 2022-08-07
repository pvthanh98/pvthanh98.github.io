import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export interface PostContentPropType {
    socket?: any
}

export function PostContent() {
    return (
        <Box
            sx={{
                marginTop: '24px'
            }}
        >
            {/* Content */}
            <Typography paragraph align="justify">
                Are you looking for the best personal branding examples?
            </Typography>
            <Typography paragraph align="justify">
                Whether you’re building an online empire or web based business, you need one thing: self branding.
                You can’t build a profitable website or business without positioning yourself as an expert. That’s where self branding comes into play.
            </Typography>
            <Typography paragraph align="justify">
                If you’re looking for some of the best self brand statement examples and finding ways to improve your overall branding, this post is exclusively for you where we’ll be discussing about successful people from Elon Musk to Simon Sinek to Tony Robbins.
            </Typography>

            <Typography paragraph align="justify">
                So what is personal branding? Self branding which is also often referred as charisma is what helps you turn your name into a visionary brand.
            </Typography>
            <Typography paragraph align="justify">
                The best example for personal branding is none other than, Steve Jobs. Whenever you hear the name Steve Jobs, what comes to your mind? Apple, right? Steve Jobs simply became a synonym for the brand Apple.
            </Typography>
            <img 
                src="https://thuannhat.com.vn/wp-content/uploads/2021/12/technology-1-1.jpg" 
                width={'100%'}
            />
            <Typography
                paragraph
                align="justify"
                sx={{
                    marginTop: '24px'
                }}
            >
                The best example for personal branding is none other than, Steve Jobs. Whenever you hear the name Steve Jobs, what comes to your mind? Apple, right? Steve Jobs simply became a synonym for the brand Apple.
            </Typography>
            <Typography paragraph align="justify">
                Do you know who’s the founder of Facebook? We bet majority of the people know that Mark Zuckerberg is the founder of Facebook.
            </Typography>
            <Typography>
                We don’t think majority of the people know who he is (who is Jack Dorsey btw). We regularly use both Facebook and Twitter yet majority of us not aware of the CEO and founder of Twitter.
            </Typography>
        </Box>
    );
}
