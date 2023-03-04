import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { configuration } from '../../configuration';
import Icon from '../ui-kit/icon';
import styles from './layout.module.scss';

import logoImage from '../../assets/images/logo.png';

const routes = configuration.routes;

export default function Layout() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const toggleMobileMenu = () => setIsOpenMobileMenu(!isOpenMobileMenu);
  const closeMobileMenu = () => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  };

  return (
    <>
      <header className={styles['layout__header']}>
        <div className={`container ${styles['layout__header-content']}`}>
          <div onClick={toggleMobileMenu} className={styles['layout__mobile-menu']}>
            <Icon variant={isOpenMobileMenu ? 'close' : 'menu'} color='white' />
          </div>

          <NavLink className={styles['layout__logo']} to={routes.home}>
            <img src={logoImage} alt='Logo' />
          </NavLink>

          <nav className={`${styles['layout__navigation']} ${isOpenMobileMenu ? styles['layout__navigation_open'] : ''}`}>
            <NavLink
              onClick={closeMobileMenu}
              className={styles['layout__navlink']}
              to={routes.home}>
              Home
            </NavLink>
            
            <NavLink
              onClick={closeMobileMenu}
              className={styles['layout__navlink']}
              to={routes.characters}>
              Characters
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
}