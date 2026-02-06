import {Link} from 'react-router'
import styles from './GameCard.module.scss'

const GameCard = ({game}) => {
  const {
    title,
    image,
    path,
  } = game

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        alt={title}
        src={image}
        loading="lazy"
      />
      <h3
        className={`${styles.title} h4`}
        title={title}
      >
        {title}
      </h3>
      <Link
        to={path}
        className={`${styles.link} link`}
      >
        Играть
      </Link>
    </div>
  )
}

export default GameCard