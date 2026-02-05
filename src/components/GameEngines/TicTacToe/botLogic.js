import {WIN_LINES} from './constants/winLines'

const findWinningMove = (board, symbol) => {
  for (const pattern of WIN_LINES) {
    let symbolCount = 0
    let emptyCell = null

    for (const index of pattern) {
      if (board[index] === symbol) symbolCount++
      else if (board[index] === null) emptyCell = index
    }

    if (symbolCount === 2 && emptyCell !== null) {
      return emptyCell
    }
  }
  return null
}

const checkSimpleWin = (board, symbol) => {
  return WIN_LINES.some(pattern => pattern.every(index => board[index] === symbol))
}

const minimax = (board, depth, isMaximizing, botSymbol, playerSymbol, alpha, beta) => {
  if (checkSimpleWin(board, botSymbol)) return 10 - depth
  if (checkSimpleWin(board, playerSymbol)) return depth - 10
  if (board.every(s => s !== null)) return 0

  const emptyCells = board.map((v, i) => v === null ? i : null).filter(v => v !== null)

  if (isMaximizing) {
    let bestScore = -Infinity
    for (const index of emptyCells) {
      board[index] = botSymbol
      const score = minimax(board, depth + 1, false, botSymbol, playerSymbol, alpha, beta)
      board[index] = null
      bestScore = Math.max(score, bestScore)
      alpha = Math.max(alpha, bestScore)
      if (beta <= alpha) break
    }
    return bestScore
  } else {
    let bestScore = Infinity
    for (const index of emptyCells) {
      board[index] = playerSymbol
      const score = minimax(board, depth + 1, true, botSymbol, playerSymbol, alpha, beta)
      board[index] = null
      bestScore = Math.min(score, bestScore)
      beta = Math.min(beta, bestScore)
      if (beta <= alpha) break
    }
    return bestScore
  }
}

const easyAi = (board) => {
  const emptyCells = board.map((v, i) => v === null ? i : null).filter(v => v !== null)
  return emptyCells[Math.floor(Math.random() * emptyCells.length)]
}

const mediumAi = (board, botSymbol, playerSymbol) => {
  const winMove = findWinningMove(board, botSymbol)
  if (winMove !== null) return winMove

  const blockMove = findWinningMove(board, playerSymbol)
  if (blockMove !== null) return blockMove

  return easyAi(board)
}

const hardAi = (board, botSymbol, playerSymbol) => {
  const centerIndex = 4
  if (board[centerIndex] === null) return centerIndex

  let bestScore = -Infinity
  let move = null
  const emptyCells = board.map((v, i) => v === null ? i : null).filter(v => v !== null)

  for (const index of emptyCells) {
    board[index] = botSymbol
    const score = minimax(board, 0, false, botSymbol, playerSymbol, -Infinity, Infinity)
    board[index] = null
    if (score > bestScore) {
      bestScore = score
      move = index
    }
  }
  return move
}

export const getBotMove = (board, difficulty, botSymbol, playerSymbol) => {
  const boardCopy = [...board]

  switch (difficulty) {
    case 'easy':
      return easyAi(boardCopy)
    case 'medium':
      return mediumAi(boardCopy, botSymbol, playerSymbol)
    case 'hard':
      return hardAi(boardCopy, botSymbol, playerSymbol)
    default:
      return mediumAi(boardCopy, botSymbol, playerSymbol)
  }
}