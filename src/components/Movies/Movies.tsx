import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Spinner from '../Spinner/Spinners';
import { selectMovieIsFetching, selectMovieMovies } from '../../store/movieSlice';
import { fetchMovie } from '../../store/movieThunks';
import MovieForm from '../MovieForm/MovieForm';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const dispatch = useAppDispatch();
  const fetchLoading = useAppSelector(selectMovieIsFetching);
  const movies = useAppSelector(selectMovieMovies);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovie(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <MovieForm />
      {fetchLoading ? (
        <Spinner />
      ) : (
        <div className="d-flex flex-column gap-2">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div className="card mt-4 d-flex flex-row" key={movie.id}>
                <div className="card-body">
                  {movie.image ? (
                    <img src={movie.image} alt={movie.title} style={{ width: '150px' }} />
                  ) : (
                    <div>No image available</div>
                  )}
                </div>
                <div className="gap-3">
                  <h1>{movie.title}</h1>
                  <p>{movie.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div>No movies found</div>
          )}
        </div>
      )}
    </>
  );

};

export default Movies;
