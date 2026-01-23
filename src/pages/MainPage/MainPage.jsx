import Header from '@/components/Header'
import PageInfo from '@/components/PageInfo'
import GamesList from '@/components/GamesList'

const MainPage = () => {
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

export default MainPage