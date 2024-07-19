import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import Spinner from '../Spinner/Spinners';
import {selectMovieById, selectMovieIsFetching, selectMovieMovies} from '../../store/movieSlice';
import {fetchMovieById} from '../../store/movieThunks';
import MovieForm from '../MovieForm/MovieForm';
import Description from '../Description/Description';
import {useParams} from 'react-router-dom';

const Movies: React.FC = () => {
  const dispatch = useAppDispatch();
  const fetchLoading = useAppSelector(selectMovieIsFetching);
  const {id} = useParams();

  const movie = useAppSelector(selectMovieById);


  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);


  return (
    <>
      <MovieForm/>
      {fetchLoading ? (
          <Spinner/>
        ) :
        <div className="d-flex flex-column gap-2" key={movie?.id}>
          <div className="card mt-4 d-flex flex-row">
            <div className="card-body">
              <img src={movie?.image.medium} alt="img" style={{width: '600px'}}/>
            </div>
            <div className="gap-3">
              <h1>{movie?.name}</h1>
              <Description summary={movie?.summary}/>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Movies;
