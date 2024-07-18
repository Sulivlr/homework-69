import {Movie} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchMovie} from './movieThunks';

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
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.fetchLoading = true;
    }).addCase(fetchMovie.fulfilled, (state, {payload: movies}) => {
      state.movies = movies;
      state.fetchLoading = false;
    }).addCase(fetchMovie.rejected, (state) => {
      state.fetchLoading = false;
    });
  }
});

export const movieReducer = movieSlice.reducer;