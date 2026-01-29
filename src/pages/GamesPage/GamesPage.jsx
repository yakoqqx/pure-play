import Header from '@/components/Header'
import PageInfo from '@/components/PageInfo'
import GamesList from '@/components/GamesList'
import FadeIn from '@/components/shared/FadeIn'

const GamesPage = () => {
  return (
    <>
      <Header />
      <main>
        <FadeIn
          className="content"
          as="section"
        >
          <PageInfo />
        </FadeIn>

        <FadeIn
          className="content"
          as="section"
          delay={0.2}
        >
          <GamesList />
        </FadeIn>
      </main>
    </>
  )
}

export default GamesPage