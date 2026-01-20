import { useEffect, useState } from 'react'
import styles from './ThemeButton.module.scss'

const ThemeButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')

    setIsAnimating(true)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  return (
    <button
      className={`${styles.themeButton} ${isAnimating ? styles.animateIcon : ''}` }
      onClick={toggleTheme}
      aria-label="Переключение темы"
    >
    </button>
  )
}

export default ThemeButton