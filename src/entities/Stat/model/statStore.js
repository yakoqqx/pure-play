import {GAMES_DATA} from '@/entities/Game/model/gamesData'

const STORAGE_KEY = 'pureplay_stats'

const getAllRawStats = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : {}
}

export const saveGameResult = (gameId, result) => {
  const stats = getAllRawStats()

  if (!stats[gameId]) {
    stats[gameId] = {
      totalGames: 0,
      history: [],
    }
  }

  const gameStat = stats[gameId]
  gameStat.totalGames += 1

  const newEntry = {
    date: new Date().toISOString(),
    ...result,
  }

  gameStat.history = [newEntry, ...gameStat.history].slice(0, 50)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
}

export const getFormattedStats = () => {
  const rawStats = getAllRawStats()

  return GAMES_DATA.map(game => {
    const gameRawData = rawStats[game.id] || {totalGames: 0, history: []}

    return {
      id: game.id,
      title: game.title,
      image: game.image,
      totalGames: gameRawData.totalGames,
      lastMatch: gameRawData.history[0] || null,
      history: gameRawData.history,
    }
  })
}
