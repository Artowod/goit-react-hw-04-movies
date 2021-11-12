import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import Header from './components/Header';
//import HomePage from './pages/HomePage';
//import MoviesPage from './pages/MoviesPage';
//import MovieDetailsPage from './pages/MovieDetailsPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<h2> Lodaing...</h2>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
