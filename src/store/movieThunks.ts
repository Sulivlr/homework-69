import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiMovie, ApiMovies, Movie} from '../types';
import axiosApi from '../axiosApi';
import axios from 'axios';


export const fetchMovie = createAsyncThunk<Movie[], string>(
  'movie/fetchMovie',
  async (name: string) => {
      const {data: apiMovies} = await axiosApi.get<ApiMovies | null>(`https://api.tvmaze.com/search/shows?q=${name}`);
      if (!apiMovies) {
        return [];
      }
      return apiMovies;
  },
);

export const fetchMovieById = createAsyncThunk<ApiMovie, number>(
  'movie/fetchMovieById',
  async (id: number) => {
    const { data: movie } = await axios.get<ApiMovie | null>(`https://api.tvmaze.com/shows/${id}`);
    return movie;
  }
);