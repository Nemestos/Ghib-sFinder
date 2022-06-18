import axios from 'axios';
import { QueryClient } from 'react-query';
import { BASE_URL } from './consts';

export const apiClient = axios.create({
  baseURL: `${BASE_URL}`,
});

export const queryClient = new QueryClient();
