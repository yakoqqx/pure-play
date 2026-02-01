import {useState} from 'react'
import styles from './GameBoard.module.scss'

const GameBoard = () => {
  const [isGameStart, setIsGameStart] = useState(false)

  return (
    <>
      <h4 className={`titleAccent h2`}>Игра</h4>
      <div className={styles.gameBoard}>

        <div className={`${styles.gameContent} ${!isGameStart ? styles.blur : ''}`}>
          <div>Hello, game content!</div>
        </div>

        {!isGameStart && (
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