import Appbar from './components/Appbar/AppBar';
import {Route, Routes} from 'react-router-dom';
import MovieForm from './components/MovieForm/MovieForm';
import Layout from './components/Layout/Layout';

const App = () => {
    return (
        <>
            <Layout>
              <Routes>
                <Route path="/:movieName" element={<MovieForm/> } />
              </Routes>
            </Layout>
        </>
    );
};

export default App;
