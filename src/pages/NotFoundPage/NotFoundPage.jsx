import PageInfo from '@/components/PageInfo'
import Header from '@/components/Header'
import FadeIn from '@/components/shared/FadeIn'

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