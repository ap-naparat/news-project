import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import LinearProgress from '@material-ui/core/LinearProgress'
// import { ReactComponent as LogoBlack } from 'assets/images/logo-black.svg'

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: 48,
  },
  logo: {
    cursor: 'pointer',
  },
}))

function ElevationScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}


export default function Header(props) {
  const { t } = useTranslation()
  const classes = useStyles()
  const loading = useSelector(state => state.app.loading)

  return (
    <ElevationScroll {...props}>
      <AppBar color="inherit">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              flexGrow={1}
              style={{ cursor: 'pointer' }}
            >
              <Button href="/">
                logo
              </Button>
            </Box>
            <Button aria-label="theme" className={classes.button} onClick={props.setLang}>
              {props.lang}
            </Button>
          </Toolbar>
        </Container>
        {loading && <LinearProgress />}
      </AppBar>
    </ElevationScroll>
  )
}
