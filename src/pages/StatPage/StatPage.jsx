import Header from '@/widgets/Header'
import PageInfo from '@/widgets/PageInfo'
import FadeIn from '@/shared/ui/FadeIn'

const StatPage = () => {
  return (
    <div>
      <Header />
      <main>
        <FadeIn
          className="content"
          as="section"
        >
          <PageInfo />
        </FadeIn>
      </main>
    </div>
  )
}

export default StatPage