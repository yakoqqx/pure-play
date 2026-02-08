import {routes} from '@/app/routing/routesConfig'
import {NavLink} from 'react-router'
import {memo} from 'react'
import styles from './NavList.module.scss'
import Button from '@/shared/ui/Button'

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
                <Button
                  as={NavLink}
                  variant={'nav'}
                  to={path}
                  onClick={onClose}
                  >
                  {name}
                </Button>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default memo(NavList)