import { useEffect} from "react";
import { Container, Grid } from "@mui/material";
import { PostProperty } from "./components/post-property";
import { PostTitle } from "./components/title";
import { PostContent } from "./components/post-content";
import { PostCardContainer } from "./components/post-card-container";
import CategorySidebardContainter from "./components/cateogry-sidebar-container";

export interface HomePagePropType {
  socket?: any
}

export function HomePage({ socket }: HomePagePropType) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <PostTitle title={'What is Personal Branding with Personal Brand Examples in 2022'} />
          <PostProperty />
          <PostContent />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
        >
          <PostCardContainer />
          <CategorySidebardContainter />
        </Grid>
      </Grid>
    </Container>
  );
}
