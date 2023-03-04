import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/home';
import CharactersPage from './pages/characters';
import NotFoundPage from './pages/not-found';
import { configuration } from './configuration';

const routes = configuration.routes;

export default function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.characters} element={<CharactersPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
