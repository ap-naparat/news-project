import { createMuiTheme } from '@material-ui/core/styles'
import { color } from './color'

const muiTheme = theme => {
  return createMuiTheme({
    palette: {
      type: theme,
      primary: {
        main: color.black
      },
      error: {
        main: color.red
      },
    },
    typography: {
      fontFamily: [
        'Roboto',
        'Kanit'
      ].join(','),
    },
  })
}

export default muiTheme