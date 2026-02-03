import {useState} from 'react'
import {GAME_ENGINES} from '@/components/GameEngines'
import styles from './GameBoard.module.scss'

const GameBoard = (props) => {
  const {
    currentSettings,
    gameId,
    result,
    setResult,
  } = props

  const Engine = GAME_ENGINES[gameId]

  const [gameKey, setGameKey] = useState(0)

  const [isGameStart, setIsGameStart] = useState(false)

  const handleGameOver = (winner) => {
    setIsGameStart(false)
    setResult(winner)
  }

  const handleRestart = () => {
    setResult(null)
    setIsGameStart(true)
    setGameKey(prev => prev + 1)
  }

  return (
    <>
      <h4 className={`titleAccent h2`}>Игра</h4>
      <div className={styles.gameBoard}>

        <div className={`${styles.gameContent} ${(!isGameStart && Engine) ? styles.blur : ''}`}>
          {Engine ? (
            <Engine
              key={gameKey}
              currentSettings={currentSettings}
              isGameStart={isGameStart}
              onGameOver={handleGameOver}
            />
          ) : (
            <div className={styles.emptyMessage}>
              Приносим свои извинения, данная игра еще находится в разработке!
            </div>
          )}
        </div>

        {!isGameStart && Engine && (
          <div className={styles.overlay}>
            {!result ? (
              <button
                className={`button ${styles.overlayButton}`}
                onClick={handleRestart}
              >
                Начать игру
              </button>
            ) : (
              <div className={styles.overlayResult}>
                <h5 className={'h4'}>{result.winner === 'draw' ? 'Ничья!' : `Победитель: ${result.winner}`}</h5>
                <button
                  className={`button ${styles.overlayButton}`}
                  onClick={handleRestart}
                >
                  Реванш
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default GameBoard