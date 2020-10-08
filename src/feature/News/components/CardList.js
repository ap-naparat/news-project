import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import styled from 'styled-components/macro'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    textAlign: 'left',
    width: '100%',
    margin: '10px 0',
  },
  media: {
    height: 140,
    backgroundSize: '100% auto'
  },
}));

const CardWrapper = styled(Link)`
  text-decoration: none;
`

const CardTitle = styled(Typography)`
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 35px;
  -webkit-line-clamp: 1;
`

const CardDesc = styled(Typography)`
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`

function CardList (props) {
  const classes = useStyles()
  // const { t } = useTranslation()
  return (  
    <CardWrapper to={props.href}>
      <Card className={classes.root}>
      <CardContent>
        <CardTitle variant="h6" component="h6">{props.title} </CardTitle>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardDesc variant="body2" component="body2">{props.desc}</CardDesc>
        <Typography>{props.date}</Typography>
      </CardContent>
      </Card>
    </CardWrapper>
  )
}

export default CardList