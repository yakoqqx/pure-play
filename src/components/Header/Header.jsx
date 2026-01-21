import Logo from '@/components/Logo'
import NavList from '@/components/NavList'
import ThemeButton from '@/components/ThemeButton'
import BurgerButton from '@/components/BurgerButton'
import {useCallback, useState} from 'react'
import styles from './Header.module.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.actions}>
        <NavList
          isOpen={isOpen}
          onClose={toggleMenu}
        />
        <BurgerButton
          isOpen={isOpen}
          onClick={toggleMenu}
        />
        <ThemeButton />
      </div>
    </header>
  )
}

export default Header