import Logo from '@/shared/ui/Logo'
import NavList from '@/widgets/NavList'
import ThemeButton from '@/features/ThemeButton'
import BurgerButton from '@/shared/ui/BurgerButton'
import {memo, useCallback, useState} from 'react'
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

export default memo(Header)