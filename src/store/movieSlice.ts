import {ApiMovie, Movie} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchMovie, fetchMovieById} from './movieThunks';

export interface MovieState {
  movies: Movie[];
  fetchLoading: boolean;
  isSearching: boolean;
  selectedMovie: ApiMovie | null;
}

const initialState: MovieState = {
  movies: [],
  fetchLoading: false,
  isSearching: false,
  selectedMovie: null,
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
    }).addCase(fetchMovieById.pending, (state) => {
      state.fetchLoading = true;
    }).addCase(fetchMovieById.fulfilled, (state, { payload: movie }) => {
        state.selectedMovie = movie;
        state.fetchLoading = false;
      }).addCase(fetchMovieById.rejected, (state) => {
        state.fetchLoading = false;
      });
  },
  selectors: {
    selectMovieIsSearching: (state) => state.isSearching,
    selectMovieIsFetching: (state) => state.fetchLoading,
    selectMovieMovies: (state) => state.movies,
    selectMovieById: (state) => state.selectedMovie,
  }
});



export const movieReducer = movieSlice.reducer;
export const {
  selectMovieIsFetching,
  selectMovieIsSearching,
  selectMovieMovies,
  selectMovieById,
} = movieSlice.selectors;