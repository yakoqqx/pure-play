import {Link} from 'react-router'
import styles from './GameCard.module.scss'
import Button from '@/shared/ui/Button'

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
      <Button
        as={Link}
        to={path}
        variant={'primary'}
        className={'wide'}
      >
        Играть
      </Button>
    </div>
  )
}

export default GameCard