import {routes} from '@/app/routing/routesConfig'
import {NavLink} from 'react-router'
import {memo} from 'react'
import styles from './NavList.module.scss'

const NavList = (props) => {
  const {
    isOpen,
    onClose,
  } = props

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.menuContainer}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>

        <ul className={styles.navList}>
          {routes
            .filter(route => !route.hidden)
            .map(({path, name}) => (
              <li key={path}>
                <NavLink
                  className={`link`}
                  to={path}
                  onClick={onClose}
                >
                  {name}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default memo(NavList)