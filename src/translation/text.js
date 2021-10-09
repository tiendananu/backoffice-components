import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
const TranslationField = ({ values, languages }) => {
  const [language, setLanguage] = React.useState(languages[0])

  return (
    <Box display="flex">
      <Box flexGrow={1}>
        <Typography>{values[language]}</Typography>
      </Box>
      {Boolean(languages.length > 1) && (
        <ToggleButtonGroup
          size="small"
          value={language}
          exclusive
          onChange={(e, lang) => lang && setLanguage(lang)}
        >
          {languages.map((language) => (
            <ToggleButton value={language}>{language}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    </Box>
  )
}
export default TranslationField
