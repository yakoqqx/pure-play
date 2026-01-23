import Header from '@/components/Header'
import PageInfo from '@/components/PageInfo'
import GamesList from '@/components/GamesList'

const GamesPage = () => {
  return (
    <>
      <Header />
      <main>
        <PageInfo />
        <GamesList />
      </main>
    </>
  )
}

export default GamesPage