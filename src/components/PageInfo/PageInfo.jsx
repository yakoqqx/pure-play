import {useLocation} from 'react-router'
import {PAGES_INFO} from '@/constants/pageInfo'
import styles from './PageInfo.module.scss'

const PageInfo = (props) => {
  const {GAME_INFO} = props
  const {pathname} = useLocation()

  const content = GAME_INFO || PAGES_INFO[pathname] || PAGES_INFO['*']

  if (!content) return null

  return (
    <section className={`content`}>
      <h1 className={`titleAccent h2`}>{content.title}</h1>
      {content.description &&
        <p className={styles.mainDescription}>{content.description}</p>}

      {content.sections?.map((section, index) => (
        <div
          key={index}
          className={styles.section}
        >
          {section.subtitle &&
            <h2 className={`${styles.subtitle} h3`}>{section.subtitle}</h2>}
          {section.text && <p>{section.text}</p>}

          {(section.list) && (
            <ul className={styles.list}>
              {(section.list).map((item, index) => (
                <li
                  key={index}
                  className={styles.listItem}
                >{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  )
}

export default PageInfo