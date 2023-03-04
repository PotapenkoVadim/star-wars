import { NavLink, Outlet } from 'react-router-dom';
import { configuration } from '../../configuration';

const routes = configuration.routes;

export default function Layout() {
  return (
    <>
      <header>
        <NavLink to={routes.home}>Home</NavLink>
        <NavLink to={routes.characters}>Characters</NavLink>
      </header>

      <Outlet />
    </>
  );
}