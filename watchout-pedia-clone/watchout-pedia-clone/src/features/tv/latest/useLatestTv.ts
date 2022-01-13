import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { latestApi } from '../../../apis/tvApi';
import { TVDetail } from '../../../types';

const useLatestMovie = () => {
  return useQuery<AxiosResponse<TVDetail>, AxiosError>('latestTv', latestApi);
}

export default useLatestMovie;
