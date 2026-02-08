import {memo, useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'motion/react'
import styles from './ThemeButton.module.scss'

const ThemeButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      className={styles.themeButton}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Переключение темы"
    >
      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.div
          key={theme}
          initial={{y: -30, opacity: 0, scale: 0.5}}
          animate={{y: 0, opacity: 1, scale: 1}}
          exit={{y: 30, opacity: 0, scale: 0.5}}
          transition={{
            duration: 0.33,
            ease: [0.23, 1, 0.32, 1],
          }}
          className={styles.iconWrapper}
          style={{backgroundImage: `var(--theme-icon)`}}
        />
      </AnimatePresence>
    </button>

  )
}

export default memo(ThemeButton)