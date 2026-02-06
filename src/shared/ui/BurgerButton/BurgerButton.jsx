import {memo} from 'react'
import styles from './BurgerButton.module.scss'

const BurgerButton = (props) => {
  const {
    isOpen,
    onClick,
  } = props

  return (
    <button
      className={styles.burger}
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}

export default memo(BurgerButton)