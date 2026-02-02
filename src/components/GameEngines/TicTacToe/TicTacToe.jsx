import {useState} from 'react'
import {WIN_LINES} from '@/components/GameEngines/TicTacToe/constants/winLines'
import styles from './TicTacToe.module.scss'

const TicTacToe = (props) => {
  const {
    currentSettings,
    isGameStart,
  } = props

  const [board, setBoard] = useState(Array(9).fill(null))

  const [isXTurn, setIsXTurn] = useState(true)

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_LINES.length; i++) {
      const [a, b, c] = WIN_LINES[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
  }

  const winner = checkWinner(board)
  const isDraw = !winner && board.every(square => square !== null)

  const handleClick = (index) => {
    if (!isGameStart || board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXTurn ? 'X' : 'O'

    setBoard(newBoard)
    setIsXTurn(!isXTurn)
  }

  return (
    <div className={styles.container}>
      <div className={styles.status}>
        {winner ? `Победитель: ${winner}` : isDraw ? 'Ничья!' : `Ход: ${isXTurn ? 'X' : 'O'}`}
      </div>

      <div className={styles.grid}>
        {board.map((value, i) => (
          <button
            key={i}
            className={`${styles.cell} ${value ? styles[value.toLowerCase()] : ''}`}
            onClick={() => handleClick(i)}
            disabled={!!winner || !!value}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TicTacToe