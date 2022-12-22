import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';
import { MovieDetail } from './views/MovieDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
           <Route exact path="/" element={ <Home /> } />
           <Route exact path="/about" element={ <About /> } />
           <Route exact path="/movie/:id" element={ <MovieDetail /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
