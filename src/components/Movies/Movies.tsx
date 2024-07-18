import React from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import Spinner from '../Spinner/Spinners';

const Movies = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(state => state.movies.movies);
  const fetchLoading = useAppSelector(state => state.movies.fetchLoading);



  return fetchLoading ? <Spinner/> : (
    <div className="d-flex flex-column gap-2">
      {movies.map((movie) => (
        <div>

        </div>
      ))}
    </div>
  );
};

export default Movies;