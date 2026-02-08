import {useCallback, useState} from 'react'
import {GAME_ENGINES} from '@/features/GameProcess/engines'
import styles from './GameBoard.module.scss'
import {saveGameResult} from '@/entities/Stat/model/statStore'
import Button from '@/shared/ui/Button'

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

  const handleGameOver = useCallback((winner) => {
    setIsGameStart(false)
    setResult(winner)

    saveGameResult(gameId, winner)
  }, [gameId, setResult])

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
              <Button
                variant={'primary'}
                onClick={handleRestart}
              >
                Начать игру
              </Button>
            ) : (
              <div className={styles.overlayResult}>
                <h5 className={'h4'}>{result.winner === 'draw' ? 'Ничья!' : `Победитель: ${result.winner}`}</h5>
                <Button
                  variant={'primary'}
                  onClick={handleRestart}
                >
                  Реванш
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default GameBoard