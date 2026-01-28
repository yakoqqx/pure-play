import styles from './RadioGroup.module.scss'

const RadioGroup = (props) => {
  const {
    setting,
    currentSettings,
    onSettingsChange,
  } = props

  return (
    <div className={styles.optionsWrapper}>
      {setting.options.map((option) => {
        const inputId = `${setting.id}-${option.value}`

        return (
          <div
            key={option.value}
            className={styles.radioGroup}
          >
            <input
              type={setting.type}
              id={inputId}
              name={setting.id}
              value={option.value}
              checked={currentSettings[setting.id] === option.value}
              onChange={() => onSettingsChange({
                ...currentSettings,
                [setting.id]: option.value,
              })}
              className={`${styles.input} visually-hidden`}
            />
            <label
              htmlFor={inputId}
              className={styles.radioLabel}
            >
              <span className={styles.radioInput}></span>
              <span>{option.label}</span>
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default RadioGroup