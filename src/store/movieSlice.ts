import {Movie} from '../types';
import {createSlice} from '@reduxjs/toolkit';

interface MovieState {
  movies: Movie[];
  fetchLoading: boolean;
}

const initialState: MovieState = {
  movies: [],
  fetchLoading: false,
};

const movieSlice = createSlice<MovieState>({
  name: 'movie',
  initialState,
  reducers: {},
});

export const movieReducer = movieSlice.reducer;