import { Link } from 'react-router'
import {memo} from 'react'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <Link
      to={'/'}
      className={styles.logo}
    >
      <img
        alt="logo"
        src="/PurePlay.svg"
        loading="lazy"
      />
      <span className={`${styles.shinyText} h3`}>Pure Play</span>
    </Link>
  )
}

export default memo(Logo)