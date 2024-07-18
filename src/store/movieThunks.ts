import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiMovies, Movie} from '../types';
import axiosApi from '../axiosApi';


export const fetchMovie = createAsyncThunk<Movie[], string>(
  'movie/fetchMovie',
  async (id: string) => {
      const {data: apiMovies} = await axiosApi.get<ApiMovies | null>(`https://api.tvmaze.com/shows/${id}`);
      if (!apiMovies) {
        return [];
      }
      return Object.keys(apiMovies).map((id) => ({
        id,
        ...apiMovies[id],
      }));
  },
);