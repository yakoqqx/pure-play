import {useParams} from 'react-router'
import {GAMES_DATA} from '@/entities/Game/model/gamesData'
import NotFoundPage from '@/pages/NotFoundPage'
import Header from '@/widgets/Header'
import PageInfo from '@/widgets/PageInfo'
import GameSettings from '@/features/GameSettings'
import {useCallback, useState} from 'react'
import FadeIn from '@/shared/ui/FadeIn'
import GameBoard from '@/features/GameProcess/ui/GameBoard'

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

  const [result, setResult] = useState(null)

  const handleSettingsChange = useCallback((newSettings) => {
    setCurrentSettings(newSettings)
    setResult(null)

    localStorage.setItem(`${gameId}_settings`, JSON.stringify(newSettings))
  }, [gameId])

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

        {game.settingsSchema && (
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
        )}

        <FadeIn
          className="content"
          as="section"
          delay={0.4}
        >
          <GameBoard
            currentSettings={currentSettings}
            gameId={gameId}
            result={result}
            setResult={setResult}
            key={JSON.stringify(currentSettings)}
          />
        </FadeIn>
      </main>
    </>

  )
}

export default GamePage