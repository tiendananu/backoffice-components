import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import * as Components from './demos'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Box from '@material-ui/core/Box'
import ComponentIcon from '@material-ui/icons/Category'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    whitelist: ['en', 'es'],
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })
i18n.languages = ['en', 'es']

export default i18n

const Menu = () => {
  const [component, setComponent] = React.useState()
  const Component = Components[Object.keys(Components)[component]]
  return (
    <Box display="flex">
      <Box paddingTop={2} paddingBottom={2} paddingLeft={2}>
        <Tabs
          style={{ height: '100vh' }}
          orientation="vertical"
          value={component}
          onChange={(_, i) => setComponent(i)}
          indicatorColor="secondary"
          textColor="primary"
          variant="scrollable"
        >
          {Object.keys(Components).map((name, i) => (
            <Tab key={name} label={name.replace('Story', '')} />
          ))}
        </Tabs>
      </Box>

      <Container maxWidth="md">
        <Box
          display="flex"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          {Component ? (
            <Component />
          ) : (
            <Typography variant="h5" color="textSecondary">
              <ComponentIcon
                fontSize="large"
                style={{ verticalAlign: 'bottom' }}
              />{' '}
              Select a component on the left
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  )
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Menu />
  </ThemeProvider>,
  document.querySelector('#root')
)
