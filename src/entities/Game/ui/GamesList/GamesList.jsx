import FadeIn from '@/shared/ui/FadeIn'
import GameCard from '@/entities/Game/ui/GameCard'
import {GAMES_DATA} from '@/entities/Game/model/gamesData'
import styles from './GamesList.module.scss'

const GamesList = () => {
  return (
    <>
      <h2 className={`${styles.title} h3`}>Доступные игры</h2>
      <ul className={styles.list}>
        {GAMES_DATA.map((game, index) => (
          <li
            key={game.id}
            className={styles.listItem}
          >
            <FadeIn delay={index * 0.1}>
              <GameCard game={game} />
            </FadeIn>
          </li>
        ))}
      </ul>
    </>
  )
}

export default GamesList