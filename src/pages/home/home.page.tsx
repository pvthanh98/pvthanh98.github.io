import { Container, Grid, Typography } from "@mui/material";
import { PostCardContainer } from "./components/post-card-container";
import { MediaCard } from './components/media-card';
import { Title } from "./components/title";
import { useNavigate } from 'react-router-dom';

export interface HomePagePropType {
  socket?: any
}

export function HomePage({ socket }: HomePagePropType) {
  const navigate = useNavigate()

  const redirectToPostDetailPage = () => {
    navigate('/post/what-is-personal-branding-with-personal-brand-examples-in-2022')
  }

  return (
    <Container >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Title title="Top Viewest" />
        </Grid>
        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Travel in VietNam tips"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://media.gettyimages.com/photos/beautiful-asian-female-sightseeing-and-sunset-over-hawa-mahal-at-pink-picture-id1206216260?s=2048x2048"
        />
        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Top ten beatiful waterfall in the world"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://dulichvietnam.com.vn/kinh-nghiem/wp-content/uploads/2020/09/dinh-mau-son-dia-diem-du-lich-noi-tieng-o-lang-son.jpg"
        />
        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Top ten beatiful places in the world we should travel to"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHVmmlfThRbcN_ZA1lWY_ti1tXhnnuRgEtQ&usqp=CAU"
        />
        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Top ten beatiful places in the world we should travel to"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://t3.ftcdn.net/jpg/02/02/91/98/360_F_202919865_YETlHK2eMYwHVAhLKhXMyNnpkP0uFmVd.jpg"
        />
        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Top ten beatiful places in the world we should travel to"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://media.istockphoto.com/photos/beautiful-happy-young-woman-excited-having-fun-in-plaza-mayor-madrid-picture-id1163872700"
        />

        <MediaCard
          onClick={redirectToPostDetailPage}  
          title="Top ten beatiful places in the world we should travel to"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://youimg1.tripcdn.com/target/100q1f000001gri6kE272.jpg?proc=source%2Ftrip"
        />
        <Grid item xs={12} md={12}>
          <Title title="Newest Posts" />
        </Grid>
        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Travel in VietNam tips"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://i.pinimg.com/originals/9d/0b/b1/9d0bb126021816dcdb4072efa8f0deb4.jpg"
        />
        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Top ten beatiful waterfall in the world"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://previews.123rf.com/images/inurbanspace/inurbanspace1402/inurbanspace140200062/26124467-phu-soi-dao-waterfall-major-sightseeing-spots-with-beautiful-5-step-cascade-thailand.jpg"
        />
        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Top ten beatiful places in the world we should travel to"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://cdn.vietreader.com/uploads/posts/2021-06/trekking-chua-chan-mountain-in-dong-nai-has-a-dreamy-view-and-beautiful-sightseeing-1.jpg"
        />
        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Top ten beatiful places in the world we should travel to"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://outofyourcomfortzone.net/wp-content/uploads/2016/06/Busan-1.jpg"
        />
        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Top ten beatiful places in the world we should travel to"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://4.bp.blogspot.com/-BNdep-SGGPk/VCqwTjhF_AI/AAAAAAAAI8Y/xaIV4wtWpn8/s1600/france%2B(1).jpg"
        />

        <MediaCard
          onClick={redirectToPostDetailPage}
          title="Top ten beatiful places in the world we should travel to"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSAeGlv5uhyX8BxCrUScqm1q4Jj65y9HAIQ&usqp=CAU"
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={12}
        sx={{
          marginTop: "24px"
        }}
      >
        <Grid item xs={12} md={4}>
          <PostCardContainer title={'Technology'} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PostCardContainer title={'Life Hacks'} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PostCardContainer title={'Programming Languages'} />
        </Grid>
      </Grid>
    </Container>
  );
}
