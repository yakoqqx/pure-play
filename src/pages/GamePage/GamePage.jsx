import {useParams} from 'react-router'
import {GAMES_DATA} from '@/constants/gamesData'
import NotFoundPage from '@/pages/NotFoundPage'
import Header from '@/components/Header'
import PageInfo from '@/components/PageInfo'

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
        <PageInfo GAME_INFO={game} />
      </main>
    </>

  )
}

export default GamePage