import RadioGroup from '@/components/RadioGroup'
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
    <>
      <h3 className={`titleAccent h2`}>Настройки</h3>
      <div className={styles.gameSettings}>
        {schema.map((setting) => {
          if (setting.showIf && !setting.showIf(currentSettings)) {
            return null
          }

          switch (setting.type) {
            case 'radio':
              return (
                <div
                  key={setting.id}
                  className={styles.setting}
                >
                  <h4 className={`h5`}>{`${setting.label}:`}</h4>
                  <RadioGroup
                    setting={setting}
                    currentSettings={currentSettings}
                    onSettingsChange={onSettingsChange}
                  />
                </div>
              )

            default:
              return null
          }
        })}
      </div>
    </>

  )
}

export default GameSettings