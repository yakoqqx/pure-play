import {useParams} from 'react-router'
import {GAMES_DATA} from '@/constants/gamesData'
import NotFoundPage from '@/pages/NotFoundPage'
import Header from '@/components/Header'

const GamePage = () => {
  const {gameId} = useParams()
  const game = GAMES_DATA.find(game => game.id === gameId)
  if (!game) {
    return <NotFoundPage />
  }

  return (
    <>
      <Header />
      <main>
        <h1>{game.title}</h1>
      </main>
    </>

  )
}

export default GamePage