import Logo from '@/components/Logo'
import NavList from '@/components/NavList'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.actions}>
        <NavList />
        <button>Switch Theme</button>
      </div>
    </header>
  )
}

export default Header