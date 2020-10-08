import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },
}));

function Content({ children }) {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.root} disableGutters>
      <Box p={{ xs: 0, sm: 0, md: 3 }}>{children}</Box>
    </Container>
  )
}

export default Content
