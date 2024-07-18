import React, { useState } from 'react';
import { fetchMovie } from '../../store/movieThunks';
import ButtonSpinner from '../ButtonSpinner/ButtonSpinner';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectMovieIsSearching } from '../../store/movieSlice';

const MovieForm: React.FC = () => {
  const [query, setQuery] = useState('');
  const isSearching = useAppSelector(selectMovieIsSearching);
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(fetchMovie(query));
  };

  return (
    <div className="container-fluid mt-2">
      <form className="input-group input-group-lg" onSubmit={onSubmit}>
        <input type="text"
               className="form-control"
               value={query}
               onChange={onChange}
        />
        <button
          disabled={isSearching}
          type="submit"
          className="btn btn-primary"
        >
          {isSearching && <ButtonSpinner />}
          Search
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
