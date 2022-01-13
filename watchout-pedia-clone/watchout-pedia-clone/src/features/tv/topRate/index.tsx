import React from 'react';
import styled from '@emotion/styled';

import useTopRateTv from './useTopRateTv';
import Card from '../../../components/Card';
import Slider from '../../../components/Slider';

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const TopRateTvSection: React.FC = () => {
  const { data: popularTvResponse, isLoading } = useTopRateTv();

  const getYear = (release_date: string) => release_date.split('-')[0] || '';

  return (
    <Base>
      <Title>인기 상영작</Title>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <Slider>
            {
              popularTvResponse?.data?.results.map(tv => (
                <Card
                  key={tv.id}
                  linkUrl={`/tv/${tv.id}`}
                  title={tv.name}
                  posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
                  voteAverage={tv.vote_average}
                  year={getYear(tv.first_air_date)}
                />
              ))
            }
          </Slider>
        )
      }
    </Base>
  )
}

export default TopRateTvSection;
