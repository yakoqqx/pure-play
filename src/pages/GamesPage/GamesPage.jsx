import Header from '@/widgets/Header'
import PageInfo from '@/widgets/PageInfo'
import GamesList from '@/entities/Game/ui/GamesList'
import FadeIn from '@/shared/ui/FadeIn'

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