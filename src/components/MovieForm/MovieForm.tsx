import React, {useState} from 'react';

const MovieForm: React.FC = () => {
  const [query, setQuery] = useState('');
  const changeMovie = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);


  return (
    <div className="container-fluid mt-2">
        <div className="input-group input-group-lg">
          <input type="text"
                 className="form-control"
                 value={query}
                 onChange={changeMovie}
                 aria-label="Sizing example input"
                 aria-describedby="inputGroup-sizing-lg"
          />
          <div className="position-absolute">

          </div>
        </div>
    </div>
  );
};

export default MovieForm;