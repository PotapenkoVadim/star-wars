import { NavLink } from 'react-router-dom';
import Button from '../../components/ui-kit/button';
import { configuration } from '../../configuration';
import styles from './not-found.module.scss';

import deathStarImage from '../../assets/images/death-star.png';

const routes = configuration.routes;

export default function NotFoundPage() {
  return (
    <main className={styles['notfound']}>
      <div className={styles['notfound__code']}>404</div>
      <img className={styles['notfound__poster']} src={deathStarImage} alt='Death Star' />

      <Button color='green'>
        <NavLink className={styles['notfound__button-link']} to={routes.home}>Return</NavLink>
      </Button>
    </main>
  );
}