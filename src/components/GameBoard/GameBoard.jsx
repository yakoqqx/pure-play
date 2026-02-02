import {useState} from 'react'
import {GAME_ENGINES} from '@/components/GameEngines'
import styles from './GameBoard.module.scss'

const GameBoard = (props) => {
  const {
    currentSettings,
    gameId,
  } = props

  const Engine = GAME_ENGINES[gameId]

  const [isGameStart, setIsGameStart] = useState(false)

  return (
    <>
      <h4 className={`titleAccent h2`}>Игра</h4>
      <div className={styles.gameBoard}>

        <div className={`${styles.gameContent} ${(!isGameStart && Engine) ? styles.blur : ''}`}>
          {Engine ? (
            <Engine
              currentSettings={currentSettings}
              isGameStart={isGameStart}
            />
          ) : (
            <div className={styles.emptyMessage}>
              Приносим свои извинения, данная игра еще находится в разработке!
            </div>
          )}
        </div>

        {!isGameStart && Engine && (
          <div className={styles.overlay}>
            <button
              className={`button ${styles.startButton}`}
              onClick={() => setIsGameStart(true)}
            >
              Начать игру
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default GameBoard