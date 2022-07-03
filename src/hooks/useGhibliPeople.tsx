import { useQuery, UseQueryResult } from 'react-query';
import { apiClient } from '../utils/clients';
import { IMovie } from '../interfaces';

const fetchGhibliMovies = (): Promise<IMovie[]> => apiClient.get('/films')
    .then((resp) => resp.data as IMovie[]);

export function useGhibliMovies(): UseQueryResult<IMovie[]> {
    return useQuery('ghibli-movies', fetchGhibliMovies);
}
