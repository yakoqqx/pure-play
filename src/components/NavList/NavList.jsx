import {routes} from '@/app/routing/routesConfig'
import {NavLink} from 'react-router'
import styles from './NavList.module.scss'

const NavList = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        {routes
          .filter(route => route.path !== '*')
          .map(({path, name}) => (
            <li
              key={path}
              className={styles.navList__Element}
            >
              <NavLink to={path}>
                {name}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default NavList