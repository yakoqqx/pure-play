import {NavLink} from 'react-router'
import styles from './Button.module.scss'

const Button = (props) => {
  const {
    as: Component = 'button',
    variant = 'primary',
    className = '',
    children,
    ...rest
  } = props

  const combinedClassName = `${styles.button} ${styles[variant]} ${className}`

  if (Component === NavLink) {
    return (
      <NavLink
        {...rest}
        className={({isActive}) =>
          `${combinedClassName} ${isActive ? styles.active : ''}`
        }
      >
        {children}
      </NavLink>
    )
  }

  return (
    <Component {...rest} className={combinedClassName}>
      {children}
    </Component>
  )
}

export default Button