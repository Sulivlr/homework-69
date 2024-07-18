import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiMovies, Movie} from '../types';
import axiosApi from '../axiosApi';

export const fetchMovie = createAsyncThunk<Movie[]>(
  'movie/fetchMovie',
  async (query) => {
    try {
      const {data: apiMovies} = await axiosApi.get<ApiMovies | null>(`/q=${query}`);
      if (!apiMovies) {
        return [];
      } else
      return Object.keys(apiMovies).map((id) => ({
        id,
        ...apiMovies[id],
      }));
    } catch (error) {
      console.error('error fetching', error);
    }
  },
);