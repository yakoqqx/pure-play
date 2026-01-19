import MainPage from '@/pages/MainPage'
import StatPage from '@/pages/StatPage'
import NotFoundPage from '@/pages/NotFoundPage'
import GamesPage from '@/pages/GamesPage'

const PATH = {
  HOME: '/',
  GAMES: '/games',
  STATS: '/statistics',
  404: '*',
}

export const routes = [
  { path: PATH.HOME, element: <MainPage />, name: "Главная" },
  { path: PATH.GAMES, element: <GamesPage />, name: "Игры" },
  { path: PATH.STATS, element: <StatPage />, name: "Статистика" },
  { path: PATH['404'], element: <NotFoundPage />, name: "404" },
]