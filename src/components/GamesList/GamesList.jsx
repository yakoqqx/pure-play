import GameCard from '@/components/GameCard'
import {GAMES_DATA} from '@/constants/gamesData'
import styles from './GamesList.module.scss'

const GamesList = () => {
  return (
    <section className={`content`}>
      <h2 className={`${styles.title} h3`}>Доступные игры</h2>
      <ul className={styles.list}>
        {GAMES_DATA.map((game) => (
          <li
            key={game.id}
            className={styles.listItem}
          >
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GamesList