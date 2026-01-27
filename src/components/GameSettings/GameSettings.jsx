import styles from './GameSettings.module.scss'

const GameSettings = (props) => {
  const {
    schema,
    currentSettings,
    onSettingsChange,
  } = props

  if (!schema) {
    return
  }

  return (
    <div>
      {schema.map((setting) => {
        if (setting.showIf && !setting.showIf(currentSettings)) {
          return null
        }
      })}
    </div>
  )
}

export default GameSettings