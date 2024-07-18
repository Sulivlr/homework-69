import {Movie} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchMovie} from './movieThunks';

export interface MovieState {
  movies: Movie[];
  fetchLoading: boolean;
  isSearching: boolean;
}

const initialState: MovieState = {
  movies: [],
  fetchLoading: false,
  isSearching: false,
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
  },
  selectors: {
    selectMovieIsSearching: (state) => state.isSearching,
    selectMovieIsFetching: (state) => state.fetchLoading,
    selectMovieMovies: (state) => state.movies,
  }
});

export const movieReducer = movieSlice.reducer;
export const {
  selectMovieIsFetching,
  selectMovieIsSearching,
  selectMovieMovies
} = movieSlice.selectors;