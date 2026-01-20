import Logo from '@/components/Logo'
import NavList from '@/components/NavList'
import ThemeButton from '@/components/ThemeButton'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.actions}>
        <NavList />
        <ThemeButton />
      </div>
    </header>
  )
}

export default Header