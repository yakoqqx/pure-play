import PageInfo from '@/widgets/PageInfo'
import Header from '@/widgets/Header'
import FadeIn from '@/shared/ui/FadeIn'

const NotFoundPage = () => {
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
      </main>
    </>
  )
}

export default NotFoundPage