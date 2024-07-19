import React, {useEffect, useState} from 'react';
import { fetchMovie } from '../../store/movieThunks';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {selectMovieMovies} from '../../store/movieSlice';
import {ApiMovie} from '../../types';
import {useNavigate} from 'react-router-dom';

const MovieForm: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();



  const onChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      dispatch(fetchMovie(e.target.value));
    }
  };

  const onClick = (movie: ApiMovie) => {
    setQuery(movie.name);
    navigate(`/shows/${movie.id}`);
  };

  const movies = useAppSelector(selectMovieMovies);


  useEffect(() => {
    void fetchMovie(query);
  }, [query]);

  return (
    <div className="container-fluid mt-2">
      <form className="input-group input-group-lg">
        <input type="text"
               className="form-control"
               value={query}
               onChange={onChange}
        />
        <ul>
          {movies.map((movie) => (
            <li onClick={() => onClick(movie.show)} key={movie.show.id}>{movie.show.name}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default MovieForm;
