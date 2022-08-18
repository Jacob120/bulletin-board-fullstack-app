import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className={styles.nav_wrapper}>
        <h2>Bulletin Board</h2>
        <ul className={styles.nav_list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/login'
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/register'
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
