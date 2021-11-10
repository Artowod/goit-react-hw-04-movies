import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </div>
  );
}

export default App;
