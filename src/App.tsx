import {Route, Routes} from 'react-router-dom';
import MovieForm from './components/MovieForm/MovieForm';
import Layout from './components/Layout/Layout';

const App = () => {
    return (
        <>
            <Layout>
              <Routes>
                <Route path="/" element={<MovieForm/> } />
                <Route path="*" element={<h1>Page Doesnt Exist</h1>}/>
              </Routes>
            </Layout>
        </>
    );
};

export default App;
