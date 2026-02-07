const getSettingsKey = (gameId) => `pureplay_settings_${gameId}`

export const loadGameSettings = (gameId, defaultSettings) => {
  const saved = localStorage.getItem(getSettingsKey(gameId))
  if (saved && saved !== 'undefined') {
    try {
      return JSON.parse(saved)
    } catch (error) {
      return defaultSettings
    }
  }
  return defaultSettings
}

export const saveGameSettings = (gameId, settings) => {
  localStorage.setItem(getSettingsKey(gameId), JSON.stringify(settings))
}
