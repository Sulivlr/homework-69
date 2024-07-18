
import Movies from './components/Movies/Movies';
import Appbar from './components/Appbar/AppBar';
import {Route, Routes} from 'react-router-dom';
import MovieForm from './components/MovieForm/MovieForm';


const App = () => {
    return (
        <>
            <header>
              <Appbar />
            </header>
          <main>
            <Routes >
              <Route path="/" element={<MovieForm />} />
              <Route path="/shows/:id" element={<Movies />}/>
            </Routes>
          </main>
        </>
    );
};

export default App;
