import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LatestMovieSection from '../features/movie/latest/index';
import NowPlayingSection from '../features/movie/nowPlaying/index';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage: React.FC = () => (
  <>
    <Header />
    <Main>
      <Container>
        <LatestMovieSection />
        <NowPlayingSection/>
      </Container>
    </Main>
    <Footer />
  </>
)

export default MainPage;