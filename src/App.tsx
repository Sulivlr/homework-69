
import Movies from './components/Movies/Movies';
import Appbar from './components/Appbar/AppBar';


const App = () => {
    return (
        <>
            <header>
              <Appbar />
            </header>
          <main>
            <Movies />
          </main>
        </>
    );
};

export default App;
