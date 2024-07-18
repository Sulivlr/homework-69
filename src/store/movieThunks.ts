import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiMovies, Movie} from '../types';
import axiosApi from '../axiosApi';
import {RootState} from '../app/store';


export const fetchMovie = createAsyncThunk<Movie[], void, {state: RootState}>(
  'movie/fetchMovie',
  async (id) => {
    try {
      const {data: apiMovies} = await axiosApi.get<ApiMovies | null>(`https://api.tvmaze.com/shows/${id}`);
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