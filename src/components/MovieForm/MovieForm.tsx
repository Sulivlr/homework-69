import React, {useState} from 'react';


const MovieForm: React.FC = () => {
  const [query, setQuery] = useState('');
  const changeMovie = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);
  console.log(query);


  return (
    <div className="container-fluid mt-2">
      <div className="input-group input-group-lg">
        <input type="text"
               className="form-control"
               value={query}
               onChange={changeMovie}
        />
        <button className="btn btn-primary">Search</button>
      </div>
      <div className="card mt-4 d-flex flex-row">
        <div className="card-body">
          <img
            className="d-flex justify-content-between"
            style={{width: '500px'}}
            src="https://thumbs.dreamstime.com/b/%D1%88%D0%B8%D1%84%D0%B5%D1%80-%D0%BA%D0%B8%D0%BD%D0%BE-%D0%B8-%D0%B2%D1%8C%D1%8E%D1%80%D0%BE%D0%BA-%D1%84%D0%B8-%D1%8C%D0%BC%D0%B0-%D0%BD%D0%B0-%D1%80%D0%B5%D0%B2%D0%B5%D1%81%D0%B8%D0%BD%D0%B5-36502412.jpg"
            alt="img"/>
        </div>
          <div className="gap-3">
            <h1>Fast and Furious</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cupiditate inventore magni nam nisi
              perspiciatis praesentium ratione sequi voluptas? Alias assumenda atque consequatur facere illo in ipsa
              pariatur, quo voluptatum?</p>
          </div>
      </div>

    </div>
  );
};

export default MovieForm;