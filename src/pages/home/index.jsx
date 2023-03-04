import { NavLink } from 'react-router-dom';
import Button from '../../components/ui-kit/button';
import { configuration } from '../../configuration';
import styles from './home.module.scss';

const routes = configuration.routes;

export default function HomePage() {
  return (
    <main className={styles['home']}>
      <div className={`container ${styles['home__content']}`}>
        <h1 className={styles['home__title']}>
          <strong>Find</strong> all your favorite <strong>character</strong>
        </h1>

        <h2 className={styles['home__description']}>
          You can find out all the information about your favorite characters
        </h2>

        <Button className={styles['home__button']}>
          <NavLink className={styles['home__button-link']} to={routes.characters}>
            See more...
          </NavLink>
        </Button>
      </div>
    </main>
  );
}