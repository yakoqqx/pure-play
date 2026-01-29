import {useParams} from 'react-router'
import {GAMES_DATA} from '@/constants/gamesData'
import NotFoundPage from '@/pages/NotFoundPage'
import Header from '@/components/Header'
import PageInfo from '@/components/PageInfo'
import GameSettings from '@/components/GameSettings'
import {useState} from 'react'
import FadeIn from '@/components/shared/FadeIn'

const GamePage = () => {
  const {gameId} = useParams()
  const game = GAMES_DATA.find(game => game.id === gameId)
  if (!game) {
    return <NotFoundPage />
  }

  const [currentSettings, setCurrentSettings] = useState(() => {
    const saved = localStorage.getItem(`${gameId}_settings`)
    if (saved) return JSON.parse(saved)

    return game.defaultSettings
  })

  const handleSettingsChange = (newSettings) => {
    setCurrentSettings(newSettings)

    localStorage.setItem(`${gameId}_settings`, JSON.stringify(newSettings))
  }

  return (
    <>
      <Header />
      <main>
        <FadeIn
          className="content"
          as="section"
        >
          <PageInfo GAME_INFO={game} />
        </FadeIn>
        <FadeIn
          className="content"
          as="section"
          delay={0.2}
        >
          <GameSettings
            schema={game.settingsSchema}
            currentSettings={currentSettings}
            onSettingsChange={handleSettingsChange}
          />
        </FadeIn>
      </main>
    </>

  )
}

export default GamePage