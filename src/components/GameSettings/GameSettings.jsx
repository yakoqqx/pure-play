import { motion, AnimatePresence } from 'motion/react'
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
        <AnimatePresence>
          {schema.map((setting) => {
            if (setting.showIf && !setting.showIf(currentSettings)) {
              return null
            }

            switch (setting.type) {
              case 'radio':
                return (
                  <motion.div
                    key={setting.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease:'easeInOut' }}
                    className={styles.setting}
                  >
                    <h4 className={`h5`}>{`${setting.label}:`}</h4>
                    <RadioGroup
                      setting={setting}
                      currentSettings={currentSettings}
                      onSettingsChange={onSettingsChange}
                    />
                  </motion.div>
                )

              default:
                return null
            }
          })}
        </AnimatePresence>
      </div>
    </>

  )
}

export default GameSettings