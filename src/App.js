import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Switch } from 'react-router-dom'
import styled, { ThemeProvider as StyledComponentThemeProvider } from 'styled-components/macro'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { setLang } from './AppReducer'
import { useSelector, useDispatch } from 'react-redux'
import { color } from 'theme/color'
import createMuiTheme from './theme'
import './App.css'
import Header from 'common/layout/Header'
import Content from 'common/layout/Content'
import News from 'feature/News'
import Detail from 'feature/News/Detail'

// const News = lazy(() => import(/* webpackChunkName: 'Rewards' */ 'feature/News'))
const Site = styled.div`
  padding-top: 60px;
`

function App() {
  const { i18n } = useTranslation()
  const dispatch = useDispatch()
  const { theme, lang } = useSelector(state => state.app)
  const muiTheme = useMemo(() => createMuiTheme(theme), [theme])

  const handleChangeLanguage = async () => {
    const nextLang = lang === 'en' ? 'th' : 'en'
    i18n.changeLanguage(nextLang)
    dispatch(setLang(nextLang))
  }

  return (
    <StyledComponentThemeProvider
      theme={{ color, breakpoints: muiTheme.breakpoints}}
    >
      <ThemeProvider theme={{ ...muiTheme, color }}>
        <CssBaseline />
        <Site>
          <Header
            theme={theme}
            lang={lang}
            setLang={handleChangeLanguage}
          />
          <Content>
            <Switch>
              <Route exact path="/" component={News} />
              <Route exact path="/news/:id" component={Detail} />
            </Switch>
          </Content>
        </Site>
      </ThemeProvider>
    </StyledComponentThemeProvider>
  )
}

export default App
