import React from 'react'
import get from 'lodash/get'
import TextField from '@material-ui/core/TextField'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
const TranslationField = ({
  key,
  id,
  children,
  handleChange,
  multi,
  languages,
  ...props
}) => {
  const [language, setLanguage] = React.useState(languages[0])
  let values = get(props, `values.${id}`) || {}

  return (
    <TextField
      {...props}
      variant="outlined"
      size="large"
      fullWidth
      multiline={multi}
      InputProps={{
        endAdornment: Boolean(languages.length > 1) && (
          <ToggleButtonGroup
            size="small"
            value={language}
            exclusive
            onChange={(e, lang) => setLanguage(lang)}
          >
            {languages.map((language) => (
              <ToggleButton value={language}>{language}</ToggleButton>
            ))}
          </ToggleButtonGroup>
        )
      }}
      value={values[language]}
      label={`${children} (${language})`}
      onChange={(e) => {
        const newValues = { ...values }
        newValues[language] = e.target.value

        handleChange({ target: { id, value: newValues } })
      }}
    />
  )
}
export default TranslationField
