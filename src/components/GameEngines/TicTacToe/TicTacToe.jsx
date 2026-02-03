import {useEffect, useState} from 'react'
import {WIN_LINES} from '@/components/GameEngines/TicTacToe/constants/winLines'
import {motion} from 'motion/react'
import styles from './TicTacToe.module.scss'

const TicTacToe = (props) => {
  const {
    currentSettings,
    isGameStart,
    onGameOver,
  } = props

  const [board, setBoard] = useState(Array(9).fill(null))

  const [isXTurn, setIsXTurn] = useState(true)

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_LINES.length; i++) {
      const [a, b, c] = WIN_LINES[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return {symbol: board[a], line: [a, b, c]}
      }
    }
    return null
  }

  const winData = checkWinner(board)
  const winner = winData?.symbol
  const isDraw = !winner && board.every(square => square !== null)
  const winningLine = winData?.line || []

  const handleClick = (index) => {
    if (!isGameStart || board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXTurn ? 'X' : 'O'

    setBoard(newBoard)
    setIsXTurn(!isXTurn)
  }

  useEffect(() => {
    if (winner || isDraw) {
      const timer = setTimeout(() => {
        onGameOver({
          winner: winner || 'draw',
          score: null,
        })
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [winner, isDraw])


  return (
    <div className={styles.container}>
      <div className={styles.status}>
        {winner || isDraw ? `Игра окончена!` : `Ход: ${isXTurn ? 'X' : 'O'}`}
      </div>

      <div className={styles.grid}>
        {board.map((value, i) => {
          const isWinCell = winningLine.includes(i)

          return (
            <motion.button
              key={i}
              className={`${styles.cell} ${value ? styles[value.toLowerCase()] : ''}`}
              onClick={() => handleClick(i)}
              disabled={!!winner || !!value}

              animate={isWinCell ? {
                scale: [1, 1.2, 1],
                backgroundColor: 'var(--highlight)',
              } : {}}
              transition={isWinCell ? {
                duration: 0.75,
                repeat: Infinity,
                repeatType: 'mirror',
              } : {}}
            >
              {value}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default TicTacToe