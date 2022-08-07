import { Typography } from "@mui/material"

export interface PostTitleProps {
    title: string
}

export const PostTitle = (props: PostTitleProps) => {
    return (
        <Typography variant="h4" sx={{
            marginTop: '12px'
          }}>
            {props.title}
        </Typography>
    )
}