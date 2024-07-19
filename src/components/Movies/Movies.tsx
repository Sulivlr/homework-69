import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Spinner from '../Spinner/Spinners';
import { selectMovieIsFetching, selectMovieMovies } from '../../store/movieSlice';
import { fetchMovie } from '../../store/movieThunks';
import MovieForm from '../MovieForm/MovieForm';

const Movies: React.FC = () => {
  const dispatch = useAppDispatch();
  const fetchLoading = useAppSelector(selectMovieIsFetching);
  const movies = useAppSelector(selectMovieMovies);


  useEffect(() => {
      dispatch(fetchMovie());
  }, [dispatch]);

  return (
    <>
      <MovieForm />
      {fetchLoading ? (
        <Spinner />
      ) : (
        movies.map((movie) => (
          <div className="d-flex flex-column gap-2" >
            <div className="card mt-4 d-flex flex-row" key={movie.id}>
              <div className="card-body">
                <img src={movie.image} alt="img" style={{ width: '600px' }} />
              </div>
              <div className="gap-3">
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Movies;
