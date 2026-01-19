import { routes } from '@/app/routing/routesConfig'
import { Link } from 'react-router'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <Link
      to={routes.HOME}
      className={styles.logo}
    >
      <img
        alt="logo"
        src="/vite.svg"
        loading="lazy"
      />
      <span>Pure Play</span>
    </Link>
  )
}

export default Logo