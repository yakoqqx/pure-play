import Header from '@/components/Header'
import PageInfo from '@/components/PageInfo'
import FadeIn from '@/components/shared/FadeIn'

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