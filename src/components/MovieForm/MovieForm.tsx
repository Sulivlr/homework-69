import React from 'react';
import {useParams} from 'react-router-dom';

const MovieForm = () => {
  const {movieName} = useParams();

  return (
    <div>
      Movie {movieName}
    </div>
  );
};

export default MovieForm;