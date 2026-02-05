import {useEffect, useState, useCallback} from 'react'
import {WIN_LINES} from '@/components/GameEngines/TicTacToe/constants/winLines'
import {motion} from 'motion/react'
import {getBotMove} from '@/components/GameEngines/TicTacToe/botLogic'
import styles from './TicTacToe.module.scss'

const TicTacToe = (props) => {
  const {currentSettings, isGameStart, onGameOver} = props

  const playerSymbol = currentSettings.side
  const botSymbol = playerSymbol === 'X' ? 'O' : 'X'
  const isPve = currentSettings.mode === 'pve'

  const [board, setBoard] = useState(Array(9).fill(null))

  const [currentTurn, setCurrentTurn] = useState('O')

  const isBotTurn = isPve && isGameStart && currentTurn === botSymbol

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

  const makeMove = useCallback((index) => {
    if (board[index] || winner) return

    setBoard(prev => {
      const newBoard = [...prev]
      newBoard[index] = currentTurn
      return newBoard
    })

    setCurrentTurn(prev => (prev === 'O' ? 'X' : 'O'))
  }, [board, winner, currentTurn])

  const handleClick = (index) => {
    if (!isGameStart || isBotTurn) return
    makeMove(index)
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
  }, [winner, isDraw, onGameOver])

  useEffect(() => {
    if (isBotTurn && !winner && !isDraw) {
      const timer = setTimeout(() => {
        const move = getBotMove(board, currentSettings.difficulty, botSymbol, playerSymbol)
        if (move !== null) {
          makeMove(move)
        }
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isBotTurn, winner, isDraw, board, makeMove])

  return (
    <div className={styles.container}>
      <div className={styles.status}>
        {winner || isDraw
          ? 'Игра окончена!'
          : `Ход: ${currentTurn === 'O' ? 'Нолики (O)' : 'Крестики (X)'}`}
      </div>

      <div className={styles.grid}>
        {board.map((value, i) => {
          const isWinCell = winningLine.includes(i)

          return (
            <motion.button
              key={i}
              className={`${styles.cell} ${value ? styles[value.toLowerCase()] : ''}`}
              onClick={() => handleClick(i)}
              disabled={!!winner || !!value || (!isGameStart || isBotTurn)}

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